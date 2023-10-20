import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import _ from 'lodash'; // CommonJs 不支持 import { trim } from 'lodash';
import { openSync, readSync, readdirSync, statSync } from 'fs';
import { dirname, join, relative } from 'path';
import { fileURLToPath } from 'url';
import { format } from 'date-fns';
import simpleGit, { SimpleGit, SimpleGitOptions } from 'simple-git';

// GitHub Pages 静态服务器不支持在路径里的符号（以下正则）和 _ 开头
const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g;
const SELF_PATH = fileURLToPath(import.meta.url);
const PROJECT_DIR = dirname(SELF_PATH);
const PUBLIC_DIR = join(PROJECT_DIR, 'public');
const ARCHIVES_DIR = join(PUBLIC_DIR, 'archives');

// git 获取信息
const gitOptions: Partial<SimpleGitOptions> = {
  baseDir: process.cwd(),
  binary: 'git',
  maxConcurrentProcesses: 4,
  trimmed: false,
};
const git: SimpleGit = simpleGit(gitOptions);
const readGitTimeline = async (path: string): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    git.raw(['log', '--format=%ci', '--', path], (e, r) => {
      if (e) {
        reject(e);
      } else {
        resolve(r.split('\n').filter(i => !_.isEmpty(i)));
      }
    });
  });
};

// 读取博文信息。
const readHead = (path: string, length: number): Buffer => {
  const fd = openSync(path, 'r');
  const buffer = Buffer.alloc(length);
  const end = readSync(fd, buffer);
  return buffer.subarray(0, end);
};

//@ts-ignore
const globFilesAsync = async (dir: string, suffix: string): ArchiveInfo[] => {
  const result = [];
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    const stat = statSync(path);
    if (stat.isFile() && name.endsWith(suffix)) {
      const summary = readHead(path, 140).toString('utf-8');
      const titleEnd = summary.indexOf('\n');
      const title = titleEnd > 0 ? _.trim(summary.substring(0, titleEnd), ' #') : '';
      const timeline = await readGitTimeline(path);
      result.push({
        path: path,
        createAt: format(new Date(timeline[timeline.length - 1]), 'yyyy-MM-dd'),
        modifyAt: format(new Date(timeline[0]), 'yyyy-MM-dd'),
        mtime: new Date(timeline[0]).getTime(),
        title: title,
        summary: summary,
      });
    } else if (stat.isDirectory()) {
      (await globFilesAsync(path, suffix)).forEach(p => result.push(p));
    }
  }
  return result;
}

//@ts-ignore
export const globArchivesAsync = async (dir: string): ArchiveInfo[] => {
  const archives = await globFilesAsync(dir, '.md');
  return archives
    .sort((a, b) => b.mtime - a.mtime)
    .map((info, i) => {
      info.path = relative(dir, info.path).replace(/\\/g, '/');
      info.summary = i < 10 ? info.summary : null;
      console.log(info);
      return info;
    });
};

// https://vitejs.dev/config/
export default defineConfig(async ({ command, mode }) => {
  return {
    plugins: [vue()],
    define: {
      __ARICHIVES__: await globArchivesAsync(ARCHIVES_DIR),
    },
    build: {
      rollupOptions: {
        output: {
          sanitizeFileName(name: string) {
            return _.trim(name, '_').replace(INVALID_CHAR_REGEX, "");
          },
        },
      },
    },
  };
});

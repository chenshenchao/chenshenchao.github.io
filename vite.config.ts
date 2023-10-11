import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import _ from 'lodash'; // CommonJs 不支持 import { trim } from 'lodash';
import { openSync, readSync, readdirSync, statSync } from 'fs';
import { dirname, join, relative } from 'path';
import { fileURLToPath } from 'url';
import { format } from 'date-fns';


// GitHub Pages 静态服务器不支持在路径里的符号（以下正则）和 _ 开头
const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g;
const SELF_PATH = fileURLToPath(import.meta.url);
const PROJECT_DIR = dirname(SELF_PATH);
const PUBLIC_DIR = join(PROJECT_DIR, 'public');

const readHead = (path: string, length: number): Buffer => {
  const fd = openSync(path, 'r');
  const buffer = Buffer.alloc(length);
  const end = readSync(fd, buffer);
  return buffer.subarray(0, end);
};

//@ts-ignore
const globFiles = (dir: string, suffix: string): ArchiveInfo[] => {
  const result = [];
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    const stat = statSync(path);
    if (stat.isFile() && name.endsWith(suffix)) {
      const summary = readHead(path, 140).toString('utf-8');
      const titleEnd = summary.indexOf('\n');
      const title = titleEnd > 0 ? _.trim(summary.substring(0, titleEnd), ' #') : '';
      result.push({
        path: path,
        birthtime: stat.birthtimeMs,
        mtime: stat.mtimeMs,
        title: title,
        summary: summary,
      });
    } else if (stat.isDirectory()) {
      globFiles(path, suffix).forEach(p => result.push(p));
    }
  }
  return result;
}

//@ts-ignore
export const globArchives = (dir: string): ArchiveInfo[] => {
  const archives = globFiles(dir, '.md');
  return archives
    .sort((a, b) => a.modifyAt - b.modifyAt)
    .map((info, i) => {
      info.path = relative(dir, info.path).replace(/\\/g, '/');
      info.createAt = format(info.birthtime, 'yyyy-MM-dd');
      info.modifyAt = format(info.mtime, 'yyyy-MM-dd');
      info.summary = i < 10 ? info.summary : null;
      console.log(info);
      return info;
    });
};


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    __ARICHIVES__: globArchives(PUBLIC_DIR),
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
});

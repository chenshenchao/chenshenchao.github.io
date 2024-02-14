import simpleGit, { SimpleGit, SimpleGitOptions } from 'simple-git';
import { openSync, readSync, readdirSync, statSync } from 'fs';
import { join, relative } from 'path';
import { format } from 'date-fns';
import _ from 'lodash'; // CommonJs 不支持 import { trim } from 'lodash';

// git 获取信息
const gitOptions: Partial<SimpleGitOptions> = {
    baseDir: process.cwd(),
    binary: 'git',
    maxConcurrentProcesses: 4,
    trimmed: false,
};
const git: SimpleGit = simpleGit(gitOptions);

// git 获取时间线
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

// 获取指定目录下的文件信息
const globFilesAsync = async (dir: string, suffix: string): Promise<ArchiveInfo[]> => {
    const result: ArchiveInfo[] = [];
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
                createAt: _.isEmpty(timeline) ? null : format(new Date(timeline[timeline.length - 1]), 'yyyy-MM-dd'),
                modifyAt: _.isEmpty(timeline) ? null : format(new Date(timeline[0]), 'yyyy-MM-dd'),
                mtime: _.isEmpty(timeline) ? null : new Date(timeline[0]).getTime(),
                title: title,
                summary: summary,
            });
        } else if (stat.isDirectory()) {
            (await globFilesAsync(path, suffix)).forEach(p => result.push(p));
        }
    }
    return result;
}

// 获取指定目录下的文档信息。
export const globArchivesAsync = async (dir: string): Promise<ArchiveInfo[]> => {
    const archives = await globFilesAsync(dir, '.md');
    return archives
        .sort((a, b) => b.mtime - a.mtime)
        .map((info, i) => {
            info.path = relative(dir, info.path).replace(/\\/g, '/');
            info.summary = i < 10 ? info.summary : undefined;
            console.log(info);
            return info;
        });
};
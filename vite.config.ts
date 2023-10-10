import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import _ from 'lodash'; // CommonJs 不支持 import { trim } from 'lodash';

// GitHub Pages 静态服务器不支持在路径里的符号（以下正则）和 _ 开头
const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g;

export const globArchives = (): string[] => {
  const archives = [ // TODO 获取文章文件路径
    './public/archives/essays/github-pages-with-vue3.md'
  ];
  return archives
      .map(path => path.match(/.+?\/public(\/archives\/.*\.md)/))
      .filter((match): match is RegExpMatchArray => match !== null)
      .map(match => {
          return match[1];
      });
};


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    __ARICHIVES__: globArchives(),
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

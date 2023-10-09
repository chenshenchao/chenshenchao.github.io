import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import _ from 'lodash'; // CommonJs 不支持 import { trim } from 'lodash';

// GitHub Pages 静态服务器不支持在路径里的符号（以下正则）和 _ 开头
const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
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

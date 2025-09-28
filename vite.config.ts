import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import _ from "lodash"; // CommonJs 不支持 import { trim } from 'lodash';
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import pxToViewport8 from "postcss-px-to-viewport-8-plugin";
import { globArchivesAsync } from "./inc/archive";

// GitHub Pages 静态服务器不支持在路径里的符号（以下正则）和 _ 开头
const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g;
const SELF_PATH = fileURLToPath(import.meta.url);
const PROJECT_DIR = dirname(SELF_PATH);
const PUBLIC_DIR = join(PROJECT_DIR, "public");
const ARCHIVES_DIR = join(PUBLIC_DIR, "archives");

// https://vitejs.dev/config/
export default defineConfig(async ({ command, mode }) => {
  return {
    plugins: [vue()],
    define: {
      __ARICHIVES__: await globArchivesAsync(ARCHIVES_DIR),
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: (cn) => {
            const m = cn.match(/node_modules\/(.+?)\//);
            if (m) {
              if (m[1] == "highlight.js") {
                const m1 = cn.match(/node_modules\/(.+?)\/(.+?)\/(.+?)\/(.)/);
                // console.log('chunks:', cn);
                if (m1) {
                  return `${m1[1]}-${m1[2]}-${m1[3]}-${m1[4]}`;
                }
              }
              return m[1];
            }
          },
          sanitizeFileName(name: string) {
            return _.trim(name, "_").replace(INVALID_CHAR_REGEX, "");
          },
        },
      },
    },
    css: {
      postcss: {
        plugins: [
          pxToViewport8({
            unitToConvert: "px",
            unitPrecision: 5, // 单位转换后保留的精度
            propList: ["*"], // 能转化为vw的属性列表
            viewportWidth: 375,
            viewportUnit: "vw",
            fontViewportUnit: "vw", // 字体使用的视口单位
            include: [/\/md\//],
            exclude: [/node_modules/],
            minPixelValue: 1,
            mediaQuery: true,
            replace: true,
          }),
        ],
      },
    },
  };
});

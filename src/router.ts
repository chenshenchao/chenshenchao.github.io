import { kebabCase } from "lodash";
import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw, Router } from 'vue-router';

// 列举所有 vue 页文件，并加载其 meta 信息的 ts 文件。
export const globPages = (): RouteRecordRaw[] => {
    const metas = import.meta.glob('./pages/**/*Page.ts', { eager: true });
    const pages = import.meta.glob('./pages/**/*Page.vue');
    return Object.keys(pages)
        .map(path => path.match(/.\/pages\/(.*)Page\.vue/))
        .filter((match): match is RegExpMatchArray => match !== null)
        .map(match => {
            const path = match[0];
            const prefix = path.substring(0, path.length - 4);
            const metaPath = `${prefix}.ts`;
            const name = match[1]
                .split('/')
                .map(i => kebabCase(i))
                .join('/');
            return {
                path: `/${name}`,
                alias: `/${name}.html`,
                component: pages[path],
                meta: metas[metaPath] as any,
            };
        });
};

export const routes = [
    {
        path: '/',
        component: () => import('./pages/IndexPage.vue'),
    },
    {
        path: '/archive/:path(.*)',
        component: () => import('./pages/ArchivePage.vue'),
    },
    ...globPages(),
];

export const createPageRouter = (): Router => {
    const router = createRouter({
        history: createWebHashHistory(),
        routes: routes,
    });

    router.beforeEach(async (to, from) => {
        console.log('meta', to.meta, from);

        return true;
    });

    return router;
};
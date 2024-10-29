import { kebabCase } from "lodash";
import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteLocationNormalized, RouteRecordRaw, Router } from 'vue-router';
import EnterPage from './pages/EnterPage.vue';
import { useAppStore } from "./stores/AppStore";

// 列举所有 vue 页文件，并加载其 meta 信息的 ts 文件。
export const mapPages = (
    pages: Record<string, () => Promise<unknown>>,
    metas: Record<string, unknown>,
    mapMatch: (path: string) => RegExpMatchArray | null
): RouteRecordRaw[] => {
    return Object.keys(pages)
        .map(mapMatch)
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
}

// 列举 PC 所有 vue 页文件，并加载其 meta 信息的 ts 文件。
export const globPcPages = (): RouteRecordRaw[] => {
    const metas = import.meta.glob('./pages/pc/**/*Page.ts', { eager: true });
    const pages = import.meta.glob('./pages/pc/**/*Page.vue');
    return mapPages(pages, metas, path => path.match(/.\/pages\/(.*)Page\.vue/));
};

// 列举 MD 所有 vue 页文件，并加载其 meta 信息的 ts 文件。
export const globMdPages = (): RouteRecordRaw[] => {
    const metas = import.meta.glob('./pages/md/**/*Page.ts', { eager: true });
    const pages = import.meta.glob('./pages/md/**/*Page.vue');
    return mapPages(pages, metas, path => path.match(/.\/pages\/(.*)Page\.vue/));
};

export const pcRoutes = globPcPages();
export const mdRoutes = globMdPages();


export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: EnterPage,
    },
    {
        path: '/pc',
        component: () => import('./layouts/pc/AppLayout.vue'),
        children: [
            {
                path: '/pc/archive/:path(.*)',
                component: () => import('./pages/pc/ArchivePage.vue'),
            },
            ...pcRoutes,
        ],
    },
    {
        path: '/md',
        component: () => import('./layouts/md/AppLayout.vue'),
        children: [
            {
                path: '/md/archive/:path(.*)',
                component: () => import('./pages/md/ArchivePage.vue'),
            },
            ...mdRoutes,
        ],
    },
];


export const swapMedia = (to: RouteLocationNormalized) => {
    const appStore = useAppStore();
    switch (appStore.mediaType) {
        case "mobile":
            if (!to.path.startsWith("/md")) {
                return { path: "/md/index" };
            }
            break;
        case "pc":
            if (!to.path.startsWith("/pc")) {
                return { path: "/pc/index" };
            }
            break;
    }
    return null;
}

export const createPageRouter = (): Router => {
    const router = createRouter({
        history: createWebHashHistory(),
        routes: routes,
    });

    router.beforeEach(async (to, from) => {
        const mediaAction = swapMedia(to);
        if (mediaAction) {
            return mediaAction;
        }

        console.log('meta', to.meta, from);
        if (to.meta?.title) {
            document.title = to.meta.title as string;
        }
        return true;
    });

    router.afterEach(() => {
        const appStore = useAppStore();
        appStore.title = document.title;
        appStore.canBack = router.options.history.state.back != null;
    });

    return router;
};
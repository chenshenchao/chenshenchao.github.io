import { kebabCase } from "lodash";
import { createRouter, createWebHistory } from "vue-router";

export const globPages = () => {
    const metas = import.meta.glob('./pages/**/*Meta.ts', { eager: true });
    const pages = import.meta.glob('./pages/**/*Page.vue');
    return Object.keys(pages)
        .map(path => path.match(/.\/pages\/(.*)Page\.vue/))
        .filter((match): match is RegExpMatchArray => match !== null)
        .map(match => {
            const path = match[0];
            const prefix = path.substring(0, path.length - 8);
            const metaPath = `${prefix}Meta.ts`;
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
    ...globPages(),
];

export const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

router.beforeEach(async (to, from) => {
    console.log('meta', to.meta, from);

    return true;
});
import { kebabCase } from "lodash";
import { createRouter, createWebHistory } from "vue-router";

export const globPages = () => {
    const pages = import.meta.glob('./pages/**/*Page.vue');
    return Object.keys(pages)
        .map(path => path.match(/.\/pages\/(.*)Page\.vue/))
        .filter((match): match is RegExpMatchArray => match !== null)
        .map(match => {
            const name = match[1]
                .split('/')
                .map(i => kebabCase(i))
                .join('/');
            return {
                path: `/${name}`,
                alias: `/${name}.html`,
                component: pages[match[0]],
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

import { kebabCase, camelCase, upperFirst } from "lodash";
import { App, Component, defineAsyncComponent } from "vue";

export declare interface WidgetInfo {
    kebabName: string,
    pascalName: string,
    component: () => Promise<Component>,
}

export declare interface WidgetLoader {
    install: (app: App) => void;
}

// 映射组件
const mapWidgets = (widgets: Record<string, () => Promise<unknown>>, mapMatch: (path: string) => RegExpMatchArray | null): WidgetInfo[] => {
    return Object.keys(widgets)
        .map(mapMatch)
        .filter((match): match is RegExpMatchArray => match !== null)
        .map(match => {
            const path = match[0];
            const kebabName = kebabCase(match[1]);
            const pascalName = upperFirst(camelCase(match[1]));
            return {
                kebabName: kebabName,
                pascalName: pascalName,
                component: widgets[path] as () => Promise<Component>,
            };
        });
}

// 加载公共控件
export const globWidgets = (): WidgetInfo[] => {
    const widgets = import.meta.glob('./widgets/**/*.vue');
    return mapWidgets(widgets, path => path.match(/.+?\/widgets\/(.*)\.vue/));
};

// 加载公共滤镜
export const globFilters = (): WidgetInfo[] => {
    const filters = import.meta.glob('./filters/**/*.vue');
    return mapWidgets(filters, path => path.match(/.+?\/filters\/(.*)\.vue/));
}

export const widgets = globWidgets();
export const filters = globFilters();

export const createWidgetLoader = (): WidgetLoader => {
    return {
        install(app: App) {
            widgets.forEach(wi => {
                const asyncComponent = defineAsyncComponent(wi.component);
                app.component(wi.pascalName, asyncComponent);
            });
            filters.forEach(fi => {
                const asyncComponent = defineAsyncComponent(fi.component);
                app.component(fi.pascalName, asyncComponent);
            });
        },
    };
};

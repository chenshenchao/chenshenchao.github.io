
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

export const globWidgets = (): WidgetInfo[] => {
    const widgets = import.meta.glob('./widgets/**/*.vue');
    return Object.keys(widgets)
        .map(path => path.match(/.+?\/widgets\/(.*)\.vue/))
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
};

export const widgets = globWidgets();

export const createWidgetLoader = (): WidgetLoader => {
    return {
        install(app: App) {
            widgets.forEach(wi => {
                const asyncComponent = defineAsyncComponent(wi.component);
                app.component(wi.pascalName, asyncComponent);
            });
        },
    };
};

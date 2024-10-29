/// <reference types="vite/client" />

declare class ArchiveInfo {
    path: string;
    mtime: number;
    title?: string;
    summary?: string;
    createAt?: string;
    modifyAt?: string;
}

declare class ArchiveBoxInfo extends ArchiveInfo {
    link: string;
}

declare const __ARICHIVES__: ArchiveInfo[]

declare module "*.vue" {
    import type { DefineComponent } from "vue";
    export default DefineComponent<{}, {}, any>;
}
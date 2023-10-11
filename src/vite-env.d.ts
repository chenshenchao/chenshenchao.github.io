/// <reference types="vite/client" />

declare class ArchiveInfo {
    path: string;
    birthtime: number;
    mtime: number;
    title?: string;
    summary?: string;
    createAt?: string;
    modifyAt?: string;
}

declare const __ARICHIVES__: ArchiveInfo[]

/// <reference types="vite/client" />

declare class ArchiveInfo {
    path: string;
    mtime: number;
    title?: string;
    summary?: string;
    createAt?: string;
    modifyAt?: string;
}

declare const __ARICHIVES__: ArchiveInfo[]

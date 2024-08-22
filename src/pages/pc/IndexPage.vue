<template>
    <noise-filter>
        <pc-double-column-layout class="pc-index-page">
            <template v-slot:minor>
                <pc-sidebar @search="data.searchText = $event" />
            </template>

            <template v-slot:background>
                <div class="background top"></div>
                <div class="background bottom"></div>
            </template>

            <pc-banner />
            <div v-for="archive in archives" class="archive-item">
                <div v-if="archive.summary" class="archive-summary" v-html="archive.summary">
                </div>
                <router-link v-else :to="archive.link">{{ archive.title }}</router-link>
                <div class="archive-info">
                    <div v-if="archive.summary" class="archive-info-item">
                        <router-link :to="archive.link">查看全文</router-link>
                    </div>
                    <div class="archive-info-item">
                        <span>创建日期：</span>
                        <span>{{ archive.createAt }}</span>
                    </div>
                    <div class="archive-info-item">
                        <span>修改日期：</span>
                        <span>{{ archive.modifyAt }}</span>
                    </div>
                </div>
            </div>
            <div style="height: 4em;"></div>
        </pc-double-column-layout>
    </noise-filter>
</template>

<script setup lang="ts">
import { onBeforeMount, reactive } from 'vue';
import { marked } from '../../archive';
import { computedAsync } from '@vueuse/core';
import { fetchPart } from '../../utils/io';
import { trimUtf8 } from '../../utils/encode';
import { isEmpty } from 'lodash';
import Utf8 from 'crypto-js/enc-utf8';
import WordArray from 'crypto-js/lib-typedarrays';

declare class ArchiveBoxInfo extends ArchiveInfo {
    link: string;
}

const data = reactive({
    archiveEnd: 10,
    archives: [],
    searchText: "",
} as {
    archiveEnd: number,
    archives: ArchiveBoxInfo[],
    searchText: String,
});

const archives = computedAsync(
    async () => {
        const tasks = data.archives.filter(i => {
            // console.log('filter', i.title);
            if (!isEmpty(data.searchText)) {
                if (isEmpty(i.title)) {
                    return false;
                } else {
                    // @ts-ignore
                    return i.title!.indexOf(data.searchText) >= 0;
                }
            }
            return true;
        }).slice(0, data.archiveEnd).map(async i => {
            if (!i.summary) {
                const bytes = await fetchPart(i.path, 140);
                i.summary = Utf8.stringify(WordArray.create(trimUtf8(bytes).buffer as unknown as number[]));
            }
            return i;
        });

        return await Promise.all(tasks);
    },
);

onBeforeMount(async () => {
    const tasks = __ARICHIVES__.map(async (i): Promise<ArchiveBoxInfo> => {
        return {
            ...i,
            path: `/archives/${i.path}`,
            link: `/pc/archive/${i.path}`,
            summary: i.summary ? await marked.parse(i.summary! + '...') : undefined,
        };
    });

    data.archives = await Promise.all(tasks);
    console.log('load', data.archives);
});

</script>

<style scoped lang="scss">
.pc-index-page {
    .archive-item {
        align-self: stretch;
        margin: 1vw;
        padding: 1vw;
        background-color: white;

        .archive-summary {
            padding: 1vw;
            background-color: #f4f4f4;
        }

        .archive-info {
            display: flex;
            align-items: stretch;
            color: gray;
            font-size: .84vw;

            .archive-info-item {
                padding: 1vw 1vw 0 0;

                a {
                    color: gray;
                }
            }
        }
    }

    .background {
        position: absolute;
        width: 100%;

        &.top {
            top: 0;
            height: 24vh;
            background: #444;
        }

        &.bottom {
            bottom: 0;
            height: 24em;
            background: #4444;
        }
    }
}
</style>
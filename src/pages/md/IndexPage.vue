<template>
    <div class="md-index-page">
        <div v-for="archive in archives" class="archive-item">
            <div v-if="archive.summary" class="archive-summary" v-html="archive.summary">
            </div>
            <router-link v-else :to="archive.link">{{ archive.title }}</router-link>
            <div class="archive-info">
                <div v-if="archive.summary" class="archive-info-link">
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
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, reactive } from 'vue';
import { marked } from '../../archive';
import { computedAsync } from '@vueuse/core';
import { fetchPart } from '../../utils/io';
import { trimUtf8 } from '../../utils/encode';
import { isEmpty, lowerCase } from 'lodash';
import Utf8 from 'crypto-js/enc-utf8';
import WordArray from 'crypto-js/lib-typedarrays';

const data = reactive({
    archiveEnd: 10,
    archives: [],
    searchText: "",
} as {
    archiveEnd: number,
    archives: ArchiveBoxInfo[],
    searchText: string,
});

const archives = computedAsync(
    async () => {
        const tasks = data.archives.filter(i => {
            // console.log('filter', i.title);
            if (!isEmpty(data.searchText)) {
                if (isEmpty(i.title)) {
                    return false;
                } else {
                    return lowerCase(i.title!).indexOf(lowerCase(data.searchText)) >= 0;
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
            link: `/md/archive/${i.path}`,
            summary: i.summary ? await marked.parse(i.summary! + '...') : undefined,
        };
    });

    data.archives = await Promise.all(tasks);
    console.log('load', data.archives);
});
</script>

<style lang="scss" scoped>
.md-index-page {
    display: flex;
    flex-direction: column;

    &::after {
        content: "";
        position: relative;
        z-index: 0;
        height: 200px;
        margin-top: -64px;
        background-color: #4444;
    }
}

.archive-item {
    position: relative;
    z-index: 1;
    margin: 4vw 4vw 0 4vw;
    padding: 4vw;
    background-color: #fff;
    box-shadow: 1vw 1vw 1vw #4444;
    font-size: 14px;

    .archive-info-link {
        a {
            color: gray;
        }
    }
}

.archive-summary {
    font-size: 4vw;

    :deep(h1) {
        font-size: 24px;
    }
    :deep(h2) {
        font-size: 20px;
    }

    :deep(p) {
        font-size: 14px;
        text-indent: 2em;
    }
}
</style>
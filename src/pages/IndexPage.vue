<template>
    <center-part-page class="index-page">
        <div v-for="archive in archives" class="archive-item">
            <div v-if="archive.summary" class="archive-summary" v-html="archive.summary">
            </div>
            <router-link v-else :to="archive.path">{{ archive.title }}</router-link>
            <div class="archive-info">
                <div v-if="archive.summary" class="archive-info-item">
                    <router-link :to="archive.path">查看全文</router-link>
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
    </center-part-page>
</template>

<script setup lang="ts">
import { onBeforeMount, reactive } from 'vue';
import type { _RouteRecordBase } from 'vue-router';
import { marked } from '../archive';
import { computedAsync } from '@vueuse/core';
import { fetchPart } from '../utils/io';
import { trimUtf8 } from '../utils/encode';
import Utf8 from 'crypto-js/enc-utf8';
import WordArray from 'crypto-js/lib-typedarrays';

const data = reactive({
    archiveEnd: 10,
    archives: [],
} as {
    archiveEnd: number,
    archives: ArchiveInfo[],
});

const archives = computedAsync(
    async () => {
        const tasks = data.archives.splice(0, data.archiveEnd).map(async i => {
            if (!i.summary) {
                const bytes = await fetchPart(i.path, 140);
                //@ts-ignore
                i.summary = Utf8.stringify(WordArray.create(trimUtf8(bytes).buffer));
            }
            return i;
        });
        return await Promise.all(tasks);
    },
);

onBeforeMount(async () => {
    const tasks = __ARICHIVES__.map(async i => {
        return {
            ...i,
            path: `/archive/${i.path}`,
            summary: i.summary ? await marked.parse(i.summary! + '...') : undefined,
        };
    });
    data.archives = await Promise.all(tasks);
});

</script>

<style scoped lang="scss">
.index-page {
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
            font-size: .4vw;

            .archive-info-item {
                padding: 1vw 1vw 0 0;

                a {
                    color: gray;
                }
            }
        }
    }
}
</style>
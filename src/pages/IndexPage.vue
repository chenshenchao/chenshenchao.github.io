<template>
    <center-part-page class="index-page">
        <div v-for="archive in archives" class="archive-item">
            <div v-if="archive.summary" class="archive-summary" @click="router.push(archive.path)" v-html="archive.summary">
            </div>
            <router-link v-else :to="archive.path">{{ archive.title }}</router-link>
            <div class="archive-time">
                <span>创建日期：</span>
                <span>{{ archive.createAt }}</span>
                <span>修改日期：</span>
                <span>{{ archive.modifyAt }}</span>
            </div>
        </div>
    </center-part-page>
</template>

<script setup lang="ts">
import { onBeforeMount, reactive } from 'vue';
import { useRouter } from 'vue-router';
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

const router = useRouter();

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
            path: `/archive?path=${i.path}`,
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

        .archive-time {
            display: flex;
            align-items: stretch;
            color: gray;

            &>span {
                font-size: .4vw;
            }
        }
    }
}
</style>
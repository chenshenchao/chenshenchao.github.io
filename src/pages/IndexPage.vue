<template>
    <center-part-page class="index-page">
        <div v-for="route in toolboxRoutes" class="toolbox-item" @click="router.push(route.alias as string)">
            <img :src="(route.meta?.iconUri as string)" />
            <span>{{ route.meta?.iconText }}</span>
        </div>
        <div v-for="archive in data.archives" class="archive-item">
            <div v-if="archive.summary" class="archive-summary" @click="router.push(archive.path)" v-html="archive.summary"></div>
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
import { computed, onBeforeMount, reactive } from 'vue';
import { routes } from '../router';
import { useRouter } from 'vue-router';
import type { _RouteRecordBase } from 'vue-router';
import { marked } from '../archive';

const data = reactive({
    archives: [],
} as {
    archives: ArchiveInfo[],
});

const router = useRouter();

const toolboxRoutes = computed(() => {
    return (routes as _RouteRecordBase[])
        .filter(i => i.meta?.inToolbox == true);
});

onBeforeMount(async () => {
    const tasks = __ARICHIVES__.map(async i => {
        return {
            ...i,
            path: `/archive?path=${i.path}`,
            summary:  await marked.parse(i.summary! + '...'),
        };
    });
    data.archives = await Promise.all(tasks);
});

</script>

<style scoped lang="scss">
.index-page {
    .toolbox-item {
        display: flex;
        flex-direction: column;
        flex-shrink: 1;
        justify-content: center;
        align-items: center;
        margin: 4vw;

        img {
            width: 8vw;
            border-radius: 2vw;
        }

        span {
            margin: 1vw;
            font-size: 1.6vw;
            color: white;
        }
    }

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
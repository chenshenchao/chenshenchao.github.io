<template>
    <center-part-page class="archive-page">
        <div class="archive-info">
            <div class="archive-info-item">
                <span>创建日期：</span>
                <span>{{ info?.createAt }}</span>
            </div>
            <div class="archive-info-item">
                <span>修改日期：</span>
                <span>{{ info?.modifyAt }}</span>
            </div>
        </div>
        <div class="archive-sheet" v-html="data.content"></div>
    </center-part-page>
</template>

<script setup lang="ts">
import { computed, onActivated, reactive } from 'vue';
import { type RouteLocationNormalizedLoaded, onBeforeRouteUpdate, useRoute } from 'vue-router';
import { loadArchive } from '../archive';

const route = useRoute();

const data = reactive({
    content: "",
    path: "",
});

const info = computed(() => {
    return __ARICHIVES__.find(i => i.path == data.path);
});

const load = async (route: RouteLocationNormalizedLoaded) => {
    const path = route.params.path as string;
    const url = `/archives/${path}`;
    if (path != data.path) {
        data.path = path;
        data.content = await loadArchive(url);
    }
};

onActivated(async () => {
    console.log('onActivied');
    await load(route);
});

onBeforeRouteUpdate(async (to, _) => {
    console.log('onBeforeRouteUpdate');
    await load(to);
});
</script>

<style scoped lang="scss">
.archive-page {
    --archive-page-padding: 1vw;

    :deep(.center-part) {
        position: relative;
    }

    .archive-info {
        display: flex;
        position: absolute;
        top: 0;
        right: 0;
        margin: var(--archive-page-padding);
        padding: .4vw;
        font-size: .6vw;
        color: gray;
        background-color: white;

        .archive-info-item {
            margin-left: 1em;
            margin-right: 1em;
        }
    }

    .archive-sheet {
        align-self: stretch;
        margin: var(--archive-page-padding);
        padding: 1vw;
        flex-shrink: 1;
        background-color: white;
    }
}
</style>
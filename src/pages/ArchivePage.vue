<template>
    <center-part-layout class="archive-page">
        <template v-slot:background>
            <div class="background"></div>
        </template>

        <banner/>
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
    </center-part-layout>
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

    .background {
        width: 100%;
        height: 24vh;
        background: #444;
    }
}
</style>
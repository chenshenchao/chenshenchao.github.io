<template>
    <div class="md-archive-page">
        <div class="md-archive-sheet" v-html="data.content"></div>
        <div class="md-archive-info">
            <div class="archive-info-item">
                <span>创建日期：</span>
                <span>{{ info?.createAt }}</span>
            </div>
            <div class="archive-info-item">
                <span>修改日期：</span>
                <span>{{ info?.modifyAt }}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, reactive, onActivated } from 'vue';
import { type RouteLocationNormalizedLoaded, useRoute, onBeforeRouteUpdate } from 'vue-router';
import { getArchiveTitle, loadArchive } from '../../archive';
import { useAppStore } from '../../stores/AppStore';

const route = useRoute();
const appStore = useAppStore();
appStore.$subscribe((_, state) => {
    document.title = state.title;
});

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
        appStore.title = getArchiveTitle(data.content);
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

<style lang="scss" scoped>
.md-archive-page {
    position: relative;
    display: flex;
    flex-direction: column;
}

.md-archive-info {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    position: sticky;
    right: 0;
    bottom: 0;
    padding: 1em;
    background-color: #fff;
}

.md-archive-sheet {
    margin: 1em;
    padding: 1em;
    background: #fff;

    :deep(p) {
        text-indent: 2em;
    }
}
</style>
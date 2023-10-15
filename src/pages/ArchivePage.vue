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
import { computed, onBeforeMount, reactive } from 'vue';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
import { loadArchive } from '../archive';

const route = useRoute();

const data = reactive({
    content: "",
    path: "",
});

const info = computed(() => {
    return __ARICHIVES__.find(i => i.path = data.path);
});

onBeforeMount(async () => {
    const url = `/archives/${route.params.path}`;
    data.path = route.params.path as string;
    data.content = await loadArchive(url);
});

onBeforeRouteUpdate(async (to, _) => {
    const url = `/archives/${to.params.path}`;
    data.path = to.params.path as string;
    data.content = await loadArchive(url);
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
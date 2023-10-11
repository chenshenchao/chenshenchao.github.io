<template>
    <center-part-page class="archive-page">
        <div class="archive-sheet" v-html="data.content"></div>
    </center-part-page>
</template>

<script setup lang="ts">
import { onBeforeMount, reactive } from 'vue';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
import { loadArchive } from '../archive';

const route = useRoute();

const data = reactive({
    content: "",
});


onBeforeMount(async () => {
    data.content = await loadArchive(route.query.path as string);
});

onBeforeRouteUpdate(async (to, _) => {
    data.content = await loadArchive(to.query.path as string);
});
</script>

<style scoped lang="scss">
.archive-page {
    .archive-sheet {
        align-self: stretch;
        margin: 1vw;
        flex-shrink: 1;
        background-color: white;
    }
}
</style>
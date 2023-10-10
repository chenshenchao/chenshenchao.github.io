<template>
    <center-part-page class="archive-page">
        <div class="archive-sheet" v-html="data.content"></div>
    </center-part-page>
</template>

<script setup lang="ts">
import hljs from 'highlight.js';
import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import { onBeforeMount, reactive } from 'vue';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';

const route = useRoute();

const data = reactive({
    content: "",
});

const marked = new Marked(
    markedHighlight({
        langPrefix: 'hljs language-',
        highlight(code, lang) {
            const language = hljs.getLanguage(lang) ? lang : 'plaintext';
            return hljs.highlight(code, { language }).value;
        }
    })
);

const load = async (url: string) => {
    const response = await fetch(url);
    const text = await response.text();
    data.content = await marked.parse(text);
}

onBeforeMount(async () => {
    await load(route.query.path as string);
});

onBeforeRouteUpdate(async (to, _) => {
    await load(to.query.path as string);
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
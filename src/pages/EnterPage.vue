<template>
    <div class="enter-page"></div>
</template>

<script lang="ts" setup>
import { onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onBeforeMount(() => {
    router.replace('/pc/index')
});
</script>
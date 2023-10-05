<template>
    <div class="index-page">
        <div v-for="link in links" @click="router.push(link)">
            <span>{{ link }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { routes } from '../router';
import { useRouter } from 'vue-router';

const router = useRouter();
const links = computed(() => routes.map(r => r.path));

</script>

<style scoped lang="scss">
.index-page {
    display: flex;
    flex-direction: column;
}
</style>
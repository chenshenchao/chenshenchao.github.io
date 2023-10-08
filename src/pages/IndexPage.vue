<template>
    <div class="index-page">
        <div v-for="route in toolboxRoutes" class="toolbox-item" @click="router.push(route.alias as string)">
            <img :src="(route.meta?.iconUri as string)" />
            <span>{{ route.meta?.iconText }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { routes } from '../router';
import { useRouter } from 'vue-router';
import type { _RouteRecordBase } from 'vue-router';

const router = useRouter();

const toolboxRoutes = computed(() => {
    return (routes as _RouteRecordBase[])
        .filter(i => i.meta?.inToolbox == true);
});


</script>

<style scoped lang="scss">
.index-page {
    display: flex;
    justify-content: start;
    align-items: start;
    width: 100%;
    height: 100%;

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
}
</style>
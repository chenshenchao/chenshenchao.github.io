<template>
    <div class="index-page">
        <div class="main-area">
            <div v-for="route in toolboxRoutes" class="toolbox-item" @click="router.push(route.alias as string)">
                <img :src="(route.meta?.iconUri as string)" />
                <span>{{ route.meta?.iconText }}</span>
            </div>
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
    width: 100%;
    height: 100%;

    .main-area {
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
        align-items: start;
        margin: 0 14vw;
        background-color: #1e1e20;
        overflow-y: auto;
        width: 100%;
        height: 100%;
    }

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
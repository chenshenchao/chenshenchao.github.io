<template>
    <center-part-page class="index-page">
        <div v-for="route in toolboxRoutes" class="toolbox-item" @click="router.push(route.alias as string)">
            <img :src="(route.meta?.iconUri as string)" />
            <span>{{ route.meta?.iconText }}</span>
        </div>
        <div v-for="archive in archiveUrls">
            <router-link :to="archive" >{{ archive }}</router-link>
        </div>
    </center-part-page>
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

const archiveUrls = computed(() => {
    return __ARICHIVES__.map(i => `/archive?path=${i}`);
});

</script>

<style scoped lang="scss">
.index-page {
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
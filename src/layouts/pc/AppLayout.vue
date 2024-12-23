<template>
    <router-view v-slot="{ Component }">
        <keep-alive>
            <component :is="Component" />
        </keep-alive>
    </router-view>
    <pc-toolbar />
    <div v-show="appStore.isLoading" ref="loadingElement" class="pc-loading"></div>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { useAppStore } from '../../stores/AppStore';

const appStore = useAppStore();

const loadingElement = ref<HTMLDivElement>();

onMounted(() => {
    document.body.appendChild(loadingElement.value!);
    // appStore.isLoading = true;
});

onBeforeUnmount(() => {
    document.body.removeChild(loadingElement.value!);
});
</script>

<style lang="scss" scoped>
.pc-loading {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100000;
    background-color: #4444;

    &::before {
        content: "";
        position: relative;
        width: 6.4vw;
        height: 6.4vw;
        background-image: radial-gradient(closest-side, #fff, #ebf8e144, #f69d3c44, #fff4);
        box-shadow: 0 0 .4vw .4vw #fff;
        border-radius: 50%;

        transform-origin: bottom left;

        animation: 4s linear infinite running loading-rotate;
    }
}

@keyframes loading-rotate {
    0% {
        background-position: 0 0;
        transform: rotate(0deg);
        box-shadow: 0 0 .4vw .4vw #fff;
    }

    50% {
        background-position: 50% 100%;
        transform: rotate(180deg);
        box-shadow: 0 0 4vw 4vw #fff;
    }

    100% {
        background-position: 0 0;
        transform: rotate(360deg);
        box-shadow: 0 0 .4vw .4vw #fff;
    }
}
</style>
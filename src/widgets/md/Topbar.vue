<template>
    <div class="md-topbar">
        <div v-if="appStore.canBack" class="back-arrow" @click="onClickBack">
            <span>&lt;</span>
        </div>
        <div class="title">
            <span>{{ appStore.title }}</span>
        </div>
        <div class="logo">
            <img src="/wo.png"/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { useAppStore } from '../../stores/AppStore';

const router = useRouter();
const appStore = useAppStore();

const onClickBack = () => {
    if (appStore.canBack) {
        router.back();
    }
}
</script>

<style lang="scss" scoped>
.md-topbar {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
    position: relative;
    width: 100%;
    height: var(--md-topbar-height);
    color: #fff;
    background-color: #444;
    position: sticky;
    top: 0;
    z-index: 1000;

    .back-arrow {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: var(--md-topbar-height);
        height: 100%;
        font-size: calc(var(--md-topbar-height) * 0.75);
        transform: scaleX(64%);
    }

    .title {
        position: relative;
        display: flex;
        flex-grow: 1;
        height: 100%;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
        width: var(--md-topbar-height);
        height: 100%;

        & > img {
            width: 64%;
            height: 64%;
            background-color: transparent;
            filter: contrast(0);
        }
    }
}
</style>
<template>
    <div class="md-topbar">
        <div v-if="appStore.canBack" class="back-arrow">

        </div>
        <div class="title">

        </div>
    </div>
</template>

<script lang="ts" setup>
import { useAppStore } from '../../stores/AppStore';

const appStore = useAppStore();
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

    .back-arrow {
        position: absolute;
        top: 0;
        left: 0;
        width: var(--md-topbar-height);
        height: 100%;
    }

    .title {
        flex-grow: 1;
        height: 100%;
    }
}
</style>
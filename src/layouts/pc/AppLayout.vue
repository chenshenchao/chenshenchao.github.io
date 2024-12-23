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
});

onBeforeUnmount(() => {
    document.body.removeChild(loadingElement.value!);
});
</script>

<style lang="scss" scoped>
.pc-loading {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100000;
    background-color: #4444;
}
</style>
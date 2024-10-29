<template>
    <div class="md-app">
        <md-topbar />
        <div>
            <router-view v-slot="{ Component }">
                <keep-alive>
                    <component :is="Component" />
                </keep-alive>
            </router-view>
        </div>
    </div>
</template>

<script lang="ts" setup>


</script>

<style lang="scss" scoped>
.md-app {
    width: 100%;
    height: 100%;
    overflow: auto;
}
</style>
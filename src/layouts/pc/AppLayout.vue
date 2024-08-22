<template>
    <router-view v-slot="{ Component }">
        <keep-alive>
            <component :is="Component" />
        </keep-alive>
    </router-view>
    <pc-toolbar />
</template>

<script lang="ts" setup>

</script>
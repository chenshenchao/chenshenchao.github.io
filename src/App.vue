<template>
  <div class="app" :style="store.style">
    <router-view v-slot="{Component}">
      <keep-alive>
        <component :is="Component"/>
      </keep-alive>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from './stores/AppStore';

const store = useAppStore();


</script>

<style scoped></style>

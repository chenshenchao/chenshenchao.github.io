<template>
  <div :style="store.style">
    <router-view ref="page"></router-view>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAppStore } from './stores/AppStore';

const store = useAppStore();

const page = ref();

</script>

<style scoped></style>

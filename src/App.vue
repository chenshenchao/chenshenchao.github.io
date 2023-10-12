<template>
  <div class="app" :style="store.style">
    <router-view ref="page"></router-view>
    <toolbar/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAppStore } from './stores/AppStore';

const store = useAppStore();

const page = ref();

</script>

<style scoped></style>

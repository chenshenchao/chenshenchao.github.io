<template>
  <router-view :ref="page"></router-view>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const page = ref();

</script>

<style scoped>
</style>

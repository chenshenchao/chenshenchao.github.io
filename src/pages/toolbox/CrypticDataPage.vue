<template>
    <div class="cryptic-data-page">
        <encode-box />
        <hash-box />
    </div>
</template>

<script setup lang="ts">
import EncodeBox from './cryptic/EncodeBox.vue';
import HashBox from './cryptic/HashBox.vue';
</script>

<style scoped lang="scss">
.cryptic-data-page {}
</style>
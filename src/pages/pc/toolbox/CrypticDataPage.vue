<template>
    <pc-center-part-layout class="pc-cryptic-data-page">
        <pc-encode-box />
        <pc-hash-box />
        <pc-time-box />
    </pc-center-part-layout>
</template>

<script setup lang="ts">
import PcEncodeBox from './cryptic/EncodeBox.vue';
import PcHashBox from './cryptic/HashBox.vue';
import PcTimeBox from './cryptic/TimeBox.vue';
</script>

<style scoped lang="scss">
.pc-cryptic-data-page {}
</style>
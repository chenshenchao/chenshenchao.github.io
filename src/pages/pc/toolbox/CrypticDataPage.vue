<template>
    <pc-center-part-layout class="pc-cryptic-data-page">
        <encode-box />
        <hash-box />
        <time-box/>
    </pc-center-part-layout>
</template>

<script setup lang="ts">
import EncodeBox from './cryptic/EncodeBox.vue';
import HashBox from './cryptic/HashBox.vue';
import TimeBox from './cryptic/TimeBox.vue';
</script>

<style scoped lang="scss">
.pc-cryptic-data-page {
    
}
</style>
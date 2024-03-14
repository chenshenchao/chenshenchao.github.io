<template>
    <div class="sidebar">
        <div class="search-box">
            <search-input @search="emit('search', $event)" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const emit = defineEmits(['search']);
const data = reactive({});
</script>

<style lang="scss" scoped>
.sidebar {
    width: 14em;
    margin-top: 14vh;

    .search-box {
        display: flex;
        flex-direction: column;
        height: 2.4em;
        padding: .2em .4em;
        background-color: #fff;
        box-sizing: border-box;
        border: 1px solid #ddd;
    }
}
</style>
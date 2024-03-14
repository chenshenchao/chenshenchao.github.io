<template>
    <div class="search-input">
        <div class="input">
            <input v-model="value" />
        </div>
        <button @click="emit('search', value)">搜索</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['search']);
const value = ref("");

</script>

<style scoped lang="scss">
.search-input {
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: stretch;
    flex-grow: 1;
    flex-shrink: 1;
    width: 100%;

    &>.input {
        display: flex;
        flex-grow: 1;
        flex-shrink: 1;

        input {
            width: 100%;
            border: 1px solid #ddd;
            outline: none;
        }
    }

    &>button {
        flex-shrink: 0;
        width: 4em;
        margin-left: .4em;
        background-color: #fff;
        border: 1px solid #ddd;

        &:active {
            color: #fff;
            background-color: #eee;
        }
    }
}
</style>
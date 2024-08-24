<template>
    <div class="pc-search-input">
        <div class="pc-input">
            <input v-model="value" @keydown.enter.native="emit('search', value)" />
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
.pc-search-input {
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: stretch;
    flex-grow: 1;
    flex-shrink: 1;
    width: 100%;

    &>.pc-input {
        display: flex;
        flex-grow: 1;
        flex-shrink: 1;

        input {
            width: 100%;
            border: 1px solid #ddd;
            outline: none;

            transition: all .5s;

            &:focus {
                border: 1px solid #49f;
            }
        }
    }

    &>button {
        flex-shrink: 0;
        width: 4em;
        margin-left: .4em;
        background-color: #fff;
        border: 1px solid #ddd;
        cursor: pointer;

        transition: all .5s;

        &:active {
            color: #fff;
            background-color: #eee;
        }

        &:hover {
            color: #49f;
            border: 1px solid #49f;
        }
    }
}
</style>
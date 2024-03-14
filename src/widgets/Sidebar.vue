<template>
    <div class="sidebar">
        <div class="search-box">
            <search-input @search="emit('search', $event)" />
        </div>
        <div class="tools-box">
            <h4>工具栏</h4>
            <div class="tool-list">
                <div v-for="route in toolboxRoutes" class="tool-item" @click="router.push(route.alias as string)">
                    <img :src="(route.meta?.iconUri as string)" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRouter, type _RouteRecordBase } from 'vue-router';
import { routes } from '../router';

const emit = defineEmits(['search']);
const router = useRouter();
const toolboxRoutes = computed(() => {
    return (routes as _RouteRecordBase[])
        .filter(i => i.meta?.inToolbox == true);
});
// const data = reactive({});
</script>

<style lang="scss" scoped>
.sidebar {
    width: 18em;
    margin-top: 14vh;

    h4 {
        text-indent: 1em;
    }

    .search-box {
        display: flex;
        flex-direction: column;
        height: 2.4em;
        padding: .2em .4em;
        background-color: #fff;
        box-sizing: border-box;
        border: 1px solid #ddd;
    }

    .tools-box {
        display: flex;
        flex-direction: column;
        margin-top: .4em;
        background-color: #fff;
        box-sizing: border-box;
        border: 1px solid #ddd;

        .tool-list {
            display: flex;
            flex-wrap: wrap;
            padding: .4em;

            .tool-item {
                display: flex;
                flex-grow: 0;
                flex-basis: 33.33%;
                justify-content: center;
                align-items: center;
                cursor: pointer;

                &>img {
                    width: 90%;
                }
            }
        }
    }
}
</style>
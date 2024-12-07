<template>
    <div class="pc-sidebar">
        <div class="pc-search-box">
            <pc-search-input @search="emit('search', $event)" />
        </div>
        <div class="pc-tools-box">
            <h4>工具栏</h4>
            <div class="pc-tool-list">
                <div v-for="route in toolboxRoutes" class="pc-tool-item" @click="router.push(route.alias as string)">
                    <img :src="(route.meta?.iconUri as string)" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRouter, type _RouteRecordBase } from 'vue-router';
import { pcRoutes } from '../../router';

const emit = defineEmits(['search']);
const router = useRouter();
const toolboxRoutes = computed(() => {
    return (pcRoutes as _RouteRecordBase[])
        .filter(i => i.meta?.inToolbox == true);
});
</script>

<style lang="scss" scoped>
.pc-sidebar {
    width: 18em;
    margin-top: 14vh;

    h4 {
        text-indent: 1em;
    }

    .pc-search-box {
        display: flex;
        flex-direction: column;
        height: 2.4em;
        padding: .2em .4em;
        background-color: #fff;
        box-sizing: border-box;
        border: 1px solid #ddd;
    }

    .pc-tools-box {
        display: flex;
        flex-direction: column;
        margin-top: .4em;
        background-color: #fff;
        box-sizing: border-box;
        border: 1px solid #ddd;

        .pc-tool-list {
            display: flex;
            flex-wrap: wrap;
            padding: .4em;

            .pc-tool-item {
                display: flex;
                flex-grow: 0;
                flex-basis: 33.33%;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                aspect-ratio: 1;

                &>img {
                    width: 90%;
                }
            }
        }
    }
}
</style>
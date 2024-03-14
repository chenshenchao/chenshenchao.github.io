<template>
    <div ref="$el" class="center-part-layout">
        <div class="center-part">
            <slot></slot>
        </div>
        <div class="background">
            <slot name="background"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { type Ref, ref } from 'vue';

const $el: Ref<HTMLElement|undefined> = ref();

defineExpose({$el});
</script>

<style scoped lang="scss">
.center-part-layout {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: stretch;
    overflow-y: auto;

    .center-part {
        display: flex;
        position: relative;
        z-index: 1;
        flex-grow: 1;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        margin: 0 14vw;
    }

    .background {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 0;
    }
}
</style>
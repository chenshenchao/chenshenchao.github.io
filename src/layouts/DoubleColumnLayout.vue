<template>
    <div class="double-column-layout">
        <div class="major">
            <slot></slot>
        </div>
        <div class="minor">
            <slot name="minor"></slot>
        </div>
        <div class="background">
            <slot name="background"></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.double-column-layout {
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;
    height: 100%;
    overflow-y: auto;

    .major {
        flex-grow: 1;
        z-index: 1;
        padding-left: 14vw;
    }

    .minor {
        z-index: 1;
        padding-right: 14vw;
    }

    .background {
        z-index: 0;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
    }
}
</style>
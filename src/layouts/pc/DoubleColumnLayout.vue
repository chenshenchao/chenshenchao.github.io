<template>
    <div class="pc-double-column-layout">
        <div class="content">
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
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.pc-double-column-layout {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 100%;
    overflow-y: auto;

    .content {
        display: flex;
        flex-direction: row;
        position: relative;

        .major {
            z-index: 1;
            flex-grow: 1;
            padding-left: 14vw;
        }

        .minor {
            z-index: 1;
            padding-right: 14vw;
        }

    }

    .background {
        z-index: 0;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
    }
}
</style>
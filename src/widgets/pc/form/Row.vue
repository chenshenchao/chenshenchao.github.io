<template>
    <div class="pc-form-row">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.pc-form-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: .4vw;

    :deep(.form-text-input) {
        flex-grow: 1;
    }
}
</style>
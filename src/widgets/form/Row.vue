<template>
    <div class="form-row">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.form-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: .4vw;
}
</style>
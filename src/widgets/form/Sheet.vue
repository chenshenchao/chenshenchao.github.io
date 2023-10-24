<template>
    <form class="form-sheet" v-bind="$attrs">
        <slot></slot>
    </form>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.form-sheet {
    display: flex;
    flex-direction: column;
}
</style>
<template>
    <div class="pc-center-part-box">
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
.pc-center-part-box {
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
    margin: 1vw;
    padding: 1vw;
    align-self: stretch;
    background-color: white;

    :deep(h2) {
        color: #444444;
        font-size: 1.4vw;
    }
}
</style>
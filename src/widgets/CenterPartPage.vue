<template>
    <div class="center-part-page">
        <div class="center-part">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped lang="scss">
.center-part-page {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: stretch;

    .center-part {
        display: flex;
        flex-wrap: wrap;
        flex-grow: 1;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        margin: 0 14vw;
        background-color: #1e1e20;
        overflow-y: auto;
    }
}
</style>
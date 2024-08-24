<template>
    <div class="pc-banner">
        <div class="pc-logo">
            <img alt="logo" src="/wo.png" />
        </div>
        <div class="pc-navbar">
            <div class="pc-nav-item" @click="router.push('/pc/index')">
                <span>主页</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<style lang="scss" scoped>
.pc-banner {
    display: flex;
    align-items: self-end;
    margin: var(--pc-banner-margin);

    .pc-logo {
        display: flex;
        align-items: center;
        justify-content: center;
        width: var(--pc-logo-size);
        height: var(--pc-logo-size);
        margin: var(--pc-logo-margin);
        border: 1px solid #fff;

        transition: all 1s;

        &>img {
            --size: calc(var(--pc-logo-size) - 10%);
            width: var(--size);
            height: var(--size);
            background-color: #fff;
            user-select: none;
            filter: contrast(1);

            transition: all 1s;

            &:hover {
                filter: contrast(4);
            }
        }

        &:hover {
            border: 1px solid #49f;
        }
    }

    .pc-navbar {
        user-select: none;

        .pc-nav-item {
            color: #fff;
            cursor: pointer;
            padding: .5em 1em;

            &:hover {
                color: #444;
                background-color: #fff;
            }
        }
    }
}
</style>
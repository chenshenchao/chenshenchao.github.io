<template>
    <div class="pc-banner">
        <div class="pc-navbar">
            <div class="pc-nav-item" @click="router.push('/')">
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
    margin: 4em 4em 1em 4em;

    .pc-navbar {
        .pc-nav-item {
            color: #fff;
            cursor: pointer;
        }
    }
}
</style>
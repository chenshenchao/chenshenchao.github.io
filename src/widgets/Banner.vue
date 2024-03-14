<template>
    <div class="banner">
        <div class="navbar">
            <div class="nav-item" @click="router.push('/')">
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
.banner {
    margin: 4em 4em 1em 4em;

    .navbar {
        .nav-item {
            color: #fff;
            cursor: pointer;
        }
    }
}
</style>
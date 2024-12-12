<template>
    <transition>
        <div v-if="store.state.visible" class="pc-toolbar">
            <div v-for="route in toolboxRoutes" class="pc-toolbox-item" @click="router.push(route.alias as string)">
                <img :src="(route.meta?.iconUri as string)" />
                <span>{{ route.meta?.iconText }}</span>
            </div>
        </div>
    </transition>
    <div class="pc-toolbar-minor" @click="onClickMinor"></div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter, type _RouteRecordBase } from 'vue-router';
import { pcRoutes } from '../../router';
import { useToolStore } from '../../stores/ToolStore';

const router = useRouter();
const store = useToolStore();

const toolboxRoutes = computed(() => {
    return (pcRoutes as _RouteRecordBase[])
        .filter(i => i.meta?.inToolbox == true);
});

const onClickMinor = () => {
    store.state.visible = !store.state.visible;
};
</script>

<style scoped lang="scss">
.pc-toolbar {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    overflow: hidden;
    left: 50%;
    bottom: 1.4vw;
    z-index: 4444;
    width: 40vw;
    height: 6.4vw;
    background-color: #4444;
    transform: translate(-50%, 0);
    border-radius: 1.4vw;
    box-shadow: 0 .1vw .4vw #fff4, 0 .1vw .4vw #fff4 inset;
    backdrop-filter: blur(.14vw);
    transition: box-shadow 0.4s ease-in-out;

    &:hover {
        animation-name: toolbar-frame-glint;
        animation-duration: 4s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
    }

    .pc-toolbox-item {
        display: flex;
        flex-direction: column;
        flex-shrink: 1;
        justify-content: center;
        align-items: stretch;
        margin: .4vw;
        cursor: pointer;

        filter: drop-shadow(1px 1px 1px hsla(0, 0%, 43%, 0.267));

        img {
            width: 3.4vw;
            border: .24vw solid #ddd;
            border-radius: 1vw;
            user-select: none;
        }

        span {
            text-align: center;
            margin-top: .4vw;
            padding: .2vw .4vw;
            font-size: .6vw;
            color: white;
            border-radius: .8vw;
            box-shadow: 0 .1vw .1vw #fff4;
            user-select: none;
        }
    }

    &.v-enter-active,
    &.v-leave-active {
        transition: opacity .4s ease-in-out, width .4s ease-in-out, height 1.4s ease-in-out;
    }

    &.v-enter-from,
    &.v-leave-to {
        width: 0;
        height: 0;
        opacity: 0;
    }
}

.pc-toolbar-minor {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 50%;
    bottom: .2vw;
    z-index: 4444;
    height: .4vw;
    width: 24vw;
    background-color: #4444;
    backdrop-filter: blur(4px);
    transform: translate(-50%, 0);
    border-radius: 1.4vw;
    box-shadow: 0 .1vw .4vw #fff4, 0 .1vw .4vw #fff4 inset;
    cursor: pointer;

    &:hover {
        animation-name: pc-toolbar-frame-glint;
        animation-duration: 1.4s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
    }
}

@keyframes pc-toolbar-frame-glint {
    0% {
        box-shadow: 0 .1vw .4vw #fff4, 0 .1vw .4vw #fff4 inset;
    }

    50% {
        box-shadow: 0 .1vw .4vw #fff4, .1vw .1vw .4vw #fff4 inset;
    }

    75% {
        box-shadow: 0 .1vw .4vw #fff4, .1vw 0 .4vw #fff4 inset;
    }

    100% {
        box-shadow: 0 .1vw .4vw #fff4, 0 .1vw .4vw #fff4 inset;
    }
}
</style>
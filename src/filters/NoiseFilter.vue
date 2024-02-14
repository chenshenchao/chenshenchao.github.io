<template>
    <div class="noise-filter" :style="style">
        <svg style="display: none;">
            <defs>
                <filter id="filter-noise" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox"
                    primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB">
                    <feTurbulence type="turbulence" :baseFrequency="baseFrequency" numOctaves="2" seed="2" stitchTiles="stitch"
                        x="0%" y="0%" width="100%" height="100%" result="turbulence" />
                    <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="20" xChannelSelector="R"
                        yChannelSelector="B" x="0%" y="0%" width="100%" height="100%" result="displacementMap" />
                </filter>
            </defs>
        </svg>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive } from 'vue';
import gsap from 'gsap';

const style = reactive({
    filter: 'url(#filter-noise)'
});

const tl = gsap.timeline({
    paused: true,
    onComplete: () => {
        style.filter = '';
    }
});

const data = reactive({
    baseFrequencyX: 0,
    baseFrequencyY: 0,
});

tl.to(data, {
    duration: 0.14,
    baseFrequencyX: 0.14,
    baseFrequencyY: 0.014,
});

tl.to(data, {
    duration: 0.14,
    baseFrequencyX: 0.0,
    baseFrequencyY: 0.0,
});

const baseFrequency = computed(() => {
    return `${data.baseFrequencyX} ${data.baseFrequencyY}`;
});

onMounted(() => {
    tl.play();
});
</script>

<style scoped lang="scss">
.noise-filter {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}
</style>
<template>
    <div class="more-tip">
        <div ref="tipElement">加载更多</div>
    </div>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

const emit = defineEmits(['intersect']);

const tipElement = ref<HTMLDivElement>();
const intersectionObserver = new IntersectionObserver((entries => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            emit('intersect', entry);
            // console.log('intersect', tipElement);
            break;
        }
    }
}), { threshold: 1 });

onMounted(() => {
    // console.log('tip', tipElement);
    intersectionObserver.observe(tipElement.value!);
});

onBeforeUnmount(() => {
    intersectionObserver.unobserve(tipElement.value!);
});
</script>

<style lang="scss" scoped>
.more-tip {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 1em;
}
</style>
<template>
    <div class="pc-form-textarea">
        <textarea ref="textarea" v-model="value" v-bind="$attrs" :style="style"></textarea>
    </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, reactive, ref } from 'vue';

const textarea = ref();

const style = reactive({
    height: 'auto',
});

const pxStringToFloat = (pxString: string): number => {
    return parseFloat(pxString.substring(0, pxString.length - 2));
};

const resizeObserver = new ResizeObserver((entires) => {
    for (const entry of entires) {
        if (entry.target == textarea.value) {
            // TODO 没有达到整数倍控制的效果。
            const s = getComputedStyle(entry.target);
            const lineHeight = pxStringToFloat(s.getPropertyValue('line-height'));
            const height = pxStringToFloat(s.getPropertyValue('height'));
            const factor = Math.ceil(height / lineHeight);
            console.log('onResize', lineHeight, height, factor);
            style.height = `${lineHeight * factor}px`;
        }
    }
});

const props = defineProps<{
    modelValue: string,
}>();
const emit = defineEmits(['update:modelValue']);

const value = computed({
    get: () => props.modelValue,
    set: (v) => emit('update:modelValue', v),
});

onMounted(() => {
    resizeObserver.observe(textarea.value);
});

onBeforeUnmount(() => {
    resizeObserver.unobserve(textarea.value);
});
</script>

<style scoped lang="scss">
.pc-form-textarea {
    display: flex;
    padding: .2em .4em;
    border: 1px solid #dfdfdf;
    border-radius: .2em;
    flex-shrink: 1;

    &>textarea {
        border: none;
        outline: none;
        flex-grow: 1;
    }
}
</style>
<template>
    <div v-show="visible" class="popup" ref="$el" :style="style">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { type Ref, computed, ref, onMounted, onBeforeUnmount, reactive, watch } from 'vue';
import { getPosition } from '../utils/dom';

const $el: Ref<HTMLElement | undefined> = ref();

const props = defineProps<{
    visible?: boolean,
    anchor?: HTMLElement,
}>();
const emit = defineEmits(['update:visible']);

const style = reactive({
    transform: 'translate(0px, 0px)',
});

const visible = computed({
    get: () => props.visible,
    set: (v) => emit('update:visible', v),
});

onMounted(() => {
    document.body.appendChild($el.value as HTMLElement);
});

onBeforeUnmount(() => {
    document.body.removeChild($el.value as HTMLElement);
});

watch(() => props.visible, (_, __) => {
    if (props.anchor) {
        const p = getPosition(props.anchor);
        const y = p.y + $el!.value!.offsetHeight;
        style.transform = `translate(${p.x}px, ${y}px)`;
    }
});
</script>

<style scoped lang="scss">
.popup {
    transition: 'transform .1s';
}
</style>
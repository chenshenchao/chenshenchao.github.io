<template>
    <div v-show="visible" class="popup" :data-popup-id="id" ref="$el" :style="style">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { type Ref, computed, ref, onMounted, onBeforeUnmount, reactive, watch } from 'vue';
import { getPosition } from '../utils/dom';

const $el: Ref<HTMLElement | undefined> = ref();

const id = new Date().getTime().toString();

const props = defineProps<{
    visible?: boolean,
    anchor?: HTMLElement,
}>();
const emit = defineEmits(['update:visible', 'hold']);

const style = reactive({
    transform: 'translate(0px, 0px)',
});

const visible = computed({
    get: () => props.visible,
    set: (v) => emit('update:visible', v),
});

const findSelf = (node: HTMLElement): boolean => {
    if (node.dataset['popup-id'] == id) {
        return true;
    }

    if (node.parentElement) {
        return findSelf(node.parentElement);
    }

    return false;
}

const onMouseDown = (e: MouseEvent) => {
    const hold = findSelf(e.target as HTMLElement);
    emit('hold', hold);
};

onMounted(() => {
    document.body.appendChild($el.value as HTMLElement);
    document.body.addEventListener('mousedown', onMouseDown);
});

onBeforeUnmount(() => {
    document.body.removeEventListener('mousedown', onMouseDown);
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
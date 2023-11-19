<template>
    <form ref="$el" class="form-sheet" v-bind="$attrs">
        <slot></slot>
    </form>
</template>

<script setup lang="ts">
import { Ref, onMounted, ref, watch } from 'vue';

const $el: Ref<HTMLFormElement | undefined> = ref();
const props = withDefaults(defineProps<{
    labelWidth?: string,
}>(), {
    labelWidth: '4em',
});

onMounted(() => {
    $el.value?.style.setProperty('--label-width', props.labelWidth);
});

watch(() => props.labelWidth, (v) => {
    console.log(v);
    $el.value?.style.setProperty('--label-width', v);
});

</script>

<style scoped lang="scss">
.form-sheet {
    --label-width: 4em;

    display: flex;
    flex-direction: column;

    :deep(label) {
        width: var(--label-width);
        text-indent: .4em;
    }
}
</style>
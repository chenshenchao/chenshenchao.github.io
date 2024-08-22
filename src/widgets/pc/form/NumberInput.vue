<template>
    <div class="pc-form-number-input">
        <input :value="data.value" @input="onInput" @blur="onBlur" />
    </div>
</template>

<script setup lang="ts">
import { isEmpty } from 'lodash';
import { computed, onBeforeMount, reactive } from 'vue';

const INTERGER_PATTERN = /^-?\d+$/;
const NUMBER_PATTERN = /^-?\d+?\.?\d+?$/;

const emit = defineEmits(['update:modelValue']);
const props = withDefaults(defineProps<{
    modelValue: number,
    precision?: number,
    min?: number,
    max?: number,
    default?: number,
}>(), {
    precision: 0,
    min: -Infinity,
    max: Infinity,
});

const data = reactive({
    value: "",
});

const pattern = computed(() => props.precision == 0 ? INTERGER_PATTERN : NUMBER_PATTERN);

onBeforeMount(() => {
    data.value = props.modelValue.toFixed(props.precision);
});

const onInput = (e: Event) => {
    const i = e.target as HTMLInputElement;
    const text = i.value ?? "";
    if (isEmpty(text) || pattern.value.test(text)) {
        data.value = text;
    } else {
        const start = i.selectionStart ?? 1;
        const end = i.selectionEnd ?? 1;
        i.value = data.value;
        i.selectionStart = start - 1;
        i.selectionEnd = end - 1;
    }
};

const onBlur = () => {
    const v = parseFloat(data.value) ?? props.default;
    if (v) {
        data.value = v.toFixed(props.precision);
        emit('update:modelValue', v);
    }
};


</script>

<style scoped lang="scss">
.pc-form-number-input {
    padding: .2em .4em;
    border: 1px solid #dfdfdf;
    border-radius: .2em;

    &>input {
        border: none;
        outline: none;
    }
}
</style>
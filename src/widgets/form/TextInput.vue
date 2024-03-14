<template>
    <div class="form-text-input">
        <span v-if="props.readonly">{{ value }}</span>
        <input v-else v-model="value" />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const emit = defineEmits(['update:modelValue']);
const props = withDefaults(defineProps<{
    modelValue: string,
    readonly?: boolean,
}>(), {
    readonly: false,
});

const value = computed({
    get: () => props.modelValue,
    set: (v) => emit('update:modelValue', v),
});

</script>

<style scoped lang="scss">
.form-text-input {
    display: flex;
    align-items: center;
    padding: .2em .4em;
    border: 1px solid #dfdfdf;
    border-radius: .2em;
    height: 1.4em;

    &>input {
        flex-grow: 1;
        flex-shrink: 1;
        border: none;
        outline: none;
    }
}
</style>
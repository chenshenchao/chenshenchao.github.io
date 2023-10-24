<template>
    <div class="form-text-input">
        <input v-model="value" v-bind="$attrs"/>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';


const props = defineProps<{
    modelValue: string,
}>();
const emit = defineEmits(['update:modelValue']);

const value = computed({
    get: () => props.modelValue,
    set: (v) => emit('update:modelValue', v),
});

</script>

<style scoped lang="scss">
.form-text-input {
    padding: .2em .4em;
    border: 1px solid #dfdfdf;
    border-radius: .2em;

    &>input {
        border: none;
        outline: none;
    }
}
</style>
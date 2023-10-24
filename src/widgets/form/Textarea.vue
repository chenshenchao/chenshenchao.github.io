<template>
    <div class="form-textarea">
        <textarea v-model="value" v-bind="$attrs"></textarea>
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
.form-textarea {
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
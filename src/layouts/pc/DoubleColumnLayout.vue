<template>
    <div ref="selfRef" @scroll="onScroll" class="pc-double-column-layout">
        <div class="content">
            <div class="major">
                <slot></slot>
            </div>
            <div class="minor">
                <slot name="minor"></slot>
            </div>
            <div class="background">
                <slot name="background"></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onActivated, ref, watch } from 'vue';

type Props = {
    scrollTop: number;
};

const props = withDefaults(defineProps<Props>(), {
    scrollTop: 0,
});

const emit = defineEmits(['scroll']);
const onScroll = (e: Event) => {
    emit('scroll', e);
};

const selfRef = ref<HTMLDivElement>();
watch(() => props.scrollTop, async () => {
    // console.log('watch', props.scrollTop, selfRef.value, !selfRef.value);
    selfRef.value?.scrollTo({ top: props.scrollTop });
});

onActivated(() => {
    // console.log('dcl onActivated', props.scrollTop, selfRef.value, !selfRef.value);
    selfRef.value?.scrollTo({ top: props.scrollTop });
});
</script>

<style lang="scss" scoped>
.pc-double-column-layout {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 100%;
    overflow-y: auto;

    .content {
        display: flex;
        flex-direction: row;
        flex-grow: 1;
        position: relative;

        .major {
            z-index: 1;
            flex-grow: 1;
            padding-left: 14vw;
        }

        .minor {
            z-index: 1;
            padding-right: 14vw;
        }

    }

    .background {
        z-index: 0;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
    }
}
</style>
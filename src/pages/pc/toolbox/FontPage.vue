<template>
    <pc-center-part-layout class="pc-toolbox-font-page">
        <pc-center-part-box class="text-box">
            <h2>默认字体</h2>
            <pc-form-textarea v-model="originText" rows="14"></pc-form-textarea>
        </pc-center-part-box>
        <pc-center-part-box class="text-box font-ebas927">
            <h2><span>小篆</span><span class="download-link" @click="onClickDownload(fontEbas927!.family)">下载</span></h2>
            <pc-form-textarea v-model="originText" rows="4"></pc-form-textarea>
        </pc-center-part-box>
    </pc-center-part-layout>
</template>

<script lang="ts" setup>
import { computedAsync } from '@vueuse/core';
import { ref } from 'vue';
import { loadFont } from '../../../utils/font';
import { useAppStore } from '../../../stores/AppStore';

const appStore = useAppStore();

const originText = ref("天若有情天亦老，道是無情道亦公。");
const fontEbas927 = computedAsync(async (onCancel) => {
    appStore.isLoading = true;
    onCancel(() => appStore.isLoading = false);
    const f = await loadFont('ebas927', '/fonts/ebas927.ttf');
    appStore.isLoading = false;
    return f;
}, null);

const drawText = async (fontFamily: string): Promise<Blob | null> => {
    const canvas = document.createElement('canvas');
    canvas.height = 200;
    const context = canvas.getContext('2d');
    context!.font = `4vw ${fontFamily}`;
    const textMetrics = context!.measureText(originText.value);
    // canvas.width = textMetrics.actualBoundingBoxRight + textMetrics.actualBoundingBoxLeft;
    canvas.width = textMetrics.width;
    context!.font = `4vw ${fontFamily}`; // 宽度重置后要再设置字体。
    console.log('textMetrics', textMetrics);
    const textHeight = canvas.height - textMetrics.actualBoundingBoxAscent - textMetrics.actualBoundingBoxDescent;
    context!.fillText(originText.value, 0, canvas.height - textHeight / 2, canvas.width);
    return new Promise<Blob | null>((resolve) => {
        canvas.toBlob(resolve, "image/png");
    });
};

const onClickDownload = async (fontFamily: string) => {
    const blob = await drawText(fontFamily);
    const url = URL.createObjectURL(blob!);
    const a = document.createElement('a');
    a.href = url;
    a.onload = () => URL.revokeObjectURL(url);
    a.download = `${fontFamily}.png`;
    a.click();
};

</script>

<style lang="scss" scoped>
.pc-toolbox-font-page {
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    :deep(.text-box) {
        background: white;
    }

    :deep(.font-ebas927) {
        font-size: 4vw;
        font-weight: bold;
    }

    .download-link {
        font-size: 0.5em;
        color: #777;
        cursor: pointer;
    }
}
</style>
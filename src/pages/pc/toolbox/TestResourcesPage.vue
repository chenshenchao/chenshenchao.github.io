<template>
    <pc-center-part-layout class="pc-toolbox-test-resources-page">
        <div>
            <button @click="onClickDownloadTestZip">test.zip</button>
        </div>
        <div class="image-area">
            <div v-for="url in IMAGE_URLS" class="image-box">
                <img :alt="url" :src="url" />
            </div>
        </div>
    </pc-center-part-layout>
</template>

<script lang="ts" setup>
import JSZip from 'jszip';

const IMAGE_URLS = [
    "/images/test.bmp",
    "/images/test.1.bmp",
    "/images/test.16.bmp",
    "/images/test.256.bmp",
    "/images/test.gif",
    "/images/test.jpg",
    "/images/test.png",
];

const downloadFile = async (url: string): Promise<Blob> => {
    const response = await fetch(url);
    return await response.blob();
};

const onClickDownloadTestZip = async () => {
    const zip = new JSZip();
    for (let url of IMAGE_URLS) {
        const b = await downloadFile(url);
        const n = url.split('/').pop();
        zip.file(n!, b);
    }
    const content = await zip.generateAsync({ type: 'blob' });
    console.log('content', content);
    const downloadUrl = URL.createObjectURL(content);
    const a = document.createElement('a');
    a.href = downloadUrl;
    a.download = 'test.zip';
    a.onload = () => {
        console.log('onload');
    };
    a.click();
}
</script>

<style lang="scss" scoped>
.pc-toolbox-test-resources-page {
    display: flex;
    .image-area {
        display: flex;
        flex-shrink: 1;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
    }

    .image-box {
        display: flex;
        overflow: hidden;
        width: 14vw;
        padding: 1em;

        & >img {
            width: 100%;
        }
    }
}
</style>
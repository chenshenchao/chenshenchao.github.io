<template>
    <center-part-box class="toolbox-cryptic-hash-box">
        <h2>散列</h2>
        <textarea v-model="data.originText" rows="4"></textarea>
        <label>MD5 (Hex)</label>
        <p>{{ md5HexText }}</p>
        <label>MD5 (Base64)</label>
        <p>{{ md5Base64Text }}</p>
    </center-part-box>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue';
import Utf8 from 'crypto-js/enc-utf8';
import Hex from 'crypto-js/enc-hex';
import Base64 from 'crypto-js/enc-base64';
import md5 from 'crypto-js/md5';

const data = reactive({
    originText: "",
});

const md5HexText = computed(() => {
    const bytes = Utf8.parse(data.originText);
    return Hex.stringify(md5(bytes));
});

const md5Base64Text = computed(() => {
    const bytes = Utf8.parse(data.originText);
    return Base64.stringify(md5(bytes));
});
</script>

<style scoped lang="scss">
.toolbox-cryptic-hash-box {
    background-color: white;
}
</style>
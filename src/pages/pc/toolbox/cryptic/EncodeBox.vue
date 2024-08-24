<template>
    <pc-center-part-box class="pc-toolbox-cryptic-encode-box">
        <h2>编码与解码</h2>
        <pc-form-textarea v-model="data.originText" rows="4"></pc-form-textarea>
        <label>Hex 编码：</label>
        <p>{{ encodeHexText }}</p>
        <label>Base64 编码：</label>
        <p>{{ encodeBase64Text }}</p>
    </pc-center-part-box>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue';
import Utf8 from 'crypto-js/enc-utf8';
import Hex from 'crypto-js/enc-hex';
import Base64 from 'crypto-js/enc-base64';

const data = reactive({
    originText: "",
});

const encodeHexText = computed(() => {
    const bytes = Utf8.parse(data.originText);
    return Hex.stringify(bytes);
});

const encodeBase64Text = computed(() => {
    const bytes = Utf8.parse(data.originText);
    return Base64.stringify(bytes);
});

</script>

<style scoped lang="scss">
.pc-toolbox-cryptic-encode-box {
    background-color: white;
}
</style>
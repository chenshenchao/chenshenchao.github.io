<template>
    <div class="toolbox-cryptic-encode-box">
        <h2>编码与解码</h2>
        <textarea v-model="data.originText" rows="4"></textarea>
        <label>Hex 编码：</label>
        <label>Base64 编码：</label>

    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const data = reactive({
    originText: "",
});

</script>

<style scoped lang="scss">
.toolbox-cryptic-encode-box {
    display: flex;
    flex-direction: column;
    flex-shrink: 1;

    background-color: #4499ff;

    h2 {
        color: #4499ff;
        font-size: 2vw;
    }
}
</style>
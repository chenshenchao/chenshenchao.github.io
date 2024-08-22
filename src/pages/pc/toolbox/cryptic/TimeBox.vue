<template>
    <center-part-box class="pc-toolbox-cryptic-time-box">
        <h2>时间</h2>
        <form-sheet label-width="8em">
            <form-row>
                <label>时间戳值：</label>
                <form-text-input v-model="data.timestampText"/>
            </form-row>
            <form-row>
                <label>时间格式：</label>
                <form-text-input v-model="store.time.timestampFormat"/>
            </form-row>
            <form-row>
                <label>时间戳文本：</label>
                <form-text-input v-model="timestampResult" readonly/>
            </form-row>
            <form-row>
                <label>日期文本：</label>
                <form-text-input v-model="data.dateText"/>
            </form-row>
            <form-row>
                <label>日期时间戳值：</label>
                <form-text-input v-model="dateResult" readonly/>
            </form-row>
        </form-sheet>
    </center-part-box>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue';
import { useToolStore } from '../../../../stores/ToolStore';
import { format } from 'date-fns';


const store = useToolStore();

const data = reactive({
    timestampText: new Date().getTime().toString(),
    dateText: new Date().toUTCString(),
});

const timestampResult = computed(() => {
    const date = new Date();
    if (/^\d{10}$/.test(data.timestampText)) {
        date.setTime(Number(`${data.timestampText}000`));
        return format(date, store.time.timestampFormat);
    }
    if (/^\d{13}$/.test(data.timestampText)) {
        date.setTime(Number(data.timestampText));
        return format(date, store.time.timestampFormat);
    }
    return "不是有效时间戳";
});

const dateResult = computed(() => {
    return Date.parse(data.dateText).toString();
});
</script>

<style scoped lang="scss">

.pc-toolbox-cryptic-time-box {
    background-color: white;
}
</style>
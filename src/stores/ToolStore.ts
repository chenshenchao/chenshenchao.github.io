import { defineStore } from "pinia";
import { reactive } from "vue";
import { deserialize, serialize } from "../utils/serial";

export const useToolStore = defineStore('tool', () => {
    const state = reactive({
        visible: true,
    });
    const time = reactive({
        timestampFormat: 'yyyy-MM-dd HH:mm:ss.SSS',
        timestampForamts: new Set(['yyyy-MM-dd HH:mm:ss.SSS']),
    });
    const imageGird = reactive<{
        rowCount: number,
        columnCount: number,
        imageWidth: number,
        imageHeight: number,
    }>({
        rowCount: 4,
        columnCount: 4,
        imageWidth: 64,
        imageHeight: 64,
    });
    return {
        state,
        time,
        imageGird,
    };
}, {
    persist: {
        serializer: {
            deserialize: deserialize,
            serialize: serialize,
        },
    },
});
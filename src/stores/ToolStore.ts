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
    return {
        state,
        time,
    };
}, {
    persist: {
        serializer: {
            deserialize: deserialize,
            serialize: serialize,
        },
    },
});
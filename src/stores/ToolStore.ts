import { defineStore } from "pinia";
import { reactive } from "vue";

export const useToolStore = defineStore('tool', () => {
    const state = reactive({
        visible: true,
    });
    return {
        state,
    };
}, {
    persist: true,
});
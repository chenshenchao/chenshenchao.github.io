import { defineStore } from "pinia";
import { reactive } from "vue";

export const useAppStore = defineStore('app', () => {
    const style = reactive({
        width: '100%',
        height: '100%',
        background: '#161618'
    });
    return {
        style,
    };
}, {
    persist: true,
});
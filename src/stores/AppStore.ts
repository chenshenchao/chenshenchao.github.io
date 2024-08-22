import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore('app', () => {
    const style = ref({
        width: '100%',
        height: '100%',
        // background: '#161618',
        background: '#ededed',
    });
    const hasBack = ref(false);
    return {
        style,
        hasBack,
    };
}, {
    persist: true,
});
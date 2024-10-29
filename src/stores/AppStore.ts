import { defineStore } from "pinia";
import { ref } from "vue";
import { getMediaType } from "../utils/media";

export const useAppStore = defineStore('app', () => {
    const style = ref({
        width: '100%',
        height: '100%',
        // background: '#161618',
        background: '#ededed',
    });
    const canBack = ref(false);
    const mediaType = ref(getMediaType());
    const title = ref(document.title);
    
    return {
        style,
        canBack,
        mediaType,
        title,
    };
}, {
    persist: true,
});
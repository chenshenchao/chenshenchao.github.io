<template>
  <div ref="app" class="app" :style="appStore.style">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAppStore } from './stores/AppStore';
import { useResizeObserver } from '@vueuse/core';
import { getMediaType } from './utils/media';
import { useRoute, useRouter } from 'vue-router';
import { swapMedia } from './router';
import { delay } from './utils/time';

const app = ref();
const appStore = useAppStore();
const route = useRoute();
const router = useRouter();

useResizeObserver(app, async () => {
  await delay(44);
  appStore.mediaType = getMediaType();
  const mediaAction = swapMedia(route);
  console.log('media', appStore.mediaType, mediaAction, navigator.userAgent);
  if (mediaAction) {
    router.replace(mediaAction);
  }
});

</script>

<style scoped></style>

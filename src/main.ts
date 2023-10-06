import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createPersistedState } from 'pinia-plugin-persistedstate';
import './style.scss';
import App from './App.vue';
import { router } from './router';

const state = createPersistedState({
    storage: localStorage,
    key: i => `__persisted__${i}`,
});
const pinia = createPinia();
const app = createApp(App);

pinia.use(state);
app.use(pinia);
app.use(router);
app.mount('#app');

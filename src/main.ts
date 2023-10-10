import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createPersistedState } from 'pinia-plugin-persistedstate';
import { router } from './router';
import { createWidgetLoader } from './loader';
import './style.scss';
import 'highlight.js/styles/github.css';
import App from './App.vue';

const state = createPersistedState({
    storage: localStorage,
    key: i => `__persisted__${i}`,
});
const pinia = createPinia();
const loader = createWidgetLoader();
const app = createApp(App);

pinia.use(state);
app.use(pinia);
app.use(router);
app.use(loader);
app.mount('#app');

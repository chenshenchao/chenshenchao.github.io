import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createPersistedState } from 'pinia-plugin-persistedstate';
import { createPageRouter } from './router';
import { createWidgetLoader } from './loader';
import 'highlight.js/styles/github.css';
import 'normalize.css';
import './style.scss';
import './theme-pc.scss';
import App from './App.vue';

const state = createPersistedState({
    storage: localStorage,
    key: i => `__persisted__${i}`,
});
const pinia = createPinia();
const router = createPageRouter();
const loader = createWidgetLoader();
const app = createApp(App);

pinia.use(state);
app.use(pinia);
app.use(router);
app.use(loader);
app.mount('#app');

import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';

const pinia = createPinia();

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('./views/Home.vue') },
    { path: '/sell', component: () => import('./views/Sell.vue') },
    { path: '/purchase', component: () => import('./views/Purchase.vue') },
  ],
});

const app = createApp(App);
app.use(pinia);
app.use(router);

app.mount('#app');

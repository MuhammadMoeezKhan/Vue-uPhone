import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Sell from '../views/Sell.vue';
import Purchase from '../views/Purchase.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/sell', component: Sell },
  { path: '/purchase', component: Purchase },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
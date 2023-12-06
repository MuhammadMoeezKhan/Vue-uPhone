import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';
import '../firebase.js'
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: () => import('./views/Home.vue') },
    { path: '/sell', component: () => import('./views/Sell.vue') },
    { path: '/purchase', component: () => import('./views/Purchase.vue') },
    { path: '/login', component: () => import('./views/Login.vue') },
  ],
});

const app = createApp(App);
app.use(createPinia());
app.use(router);

onAuthStateChanged(getAuth(), (user) => {
  if (user) {
    router.push('/home'); // Redirect to home if user is signed in
  } else {
    if (router.currentRoute.value.path !== '/login') {
      router.push('/login'); // Redirect to login if not currently on login page and no user is signed in
    }
  }
});

app.mount('#app');

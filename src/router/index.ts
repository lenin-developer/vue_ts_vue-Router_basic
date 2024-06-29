import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: Home },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue'),
  },
  {
    path: '/articulos:id',
    name: 'articulos',
    component: () => import('@/views/Articulos.vue'),
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

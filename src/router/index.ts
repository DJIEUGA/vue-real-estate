import { createRouter, createWebHistory } from 'vue-router';
import PropertyList from '../components/PropertyList.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PropertyList
    }
  ]
});

export default router;
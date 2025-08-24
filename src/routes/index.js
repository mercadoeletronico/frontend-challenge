import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/index.vue'

const routes = [
  { path: '/', component: HomePage },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.afterEach(() => {
  document.title = `Mercado Eletrônico`;
});

export default router;

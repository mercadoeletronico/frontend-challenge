import { createMemoryHistory, createRouter } from 'vue-router'
import PageHome from '../pages/PageHome.vue'



const routes = [
    { path: '/', name: 'home', component: PageHome, meta: { title: 'Order Details' } },

]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})


router.afterEach((to) => {
  document.title = `Mercado Eletronico | ${to.meta.title}`
})

export default router;

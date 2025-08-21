import { createMemoryHistory, createRouter } from 'vue-router'
import PageHome from '../pages/PageHome.vue'



const routes = [
    { path: '/', name: 'home', component: PageHome },

]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router;
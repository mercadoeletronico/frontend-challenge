import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'
import { createPinia } from 'pinia'
import Popper from "vue3-popper";

const pinia = createPinia()

createApp(App).component('Popper', Popper)
.use(pinia).use(router).mount('#app')

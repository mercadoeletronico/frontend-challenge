import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'

import './plugins/bootstrap-vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


new Vue({
  render: h => h(App),
}).$mount('#app')

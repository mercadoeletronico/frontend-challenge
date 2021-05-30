import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'

import { BootstrapVueIcons } from 'bootstrap-vue'
import VueCurrencyFilter from 'vue-currency-filter'


Vue.config.productionTip = false
Vue.use(BootstrapVueIcons)
Vue.use(VueCurrencyFilter,{
  symbol : '',
  thousandsSeparator: ',',
  fractionCount: 2,
  fractionSeparator: '.',
  symbolPosition: 'front',
  symbolSpacing: true,
  avoidEmptyDecimals: undefined,
})

var filter = function(text, length, clamp){
  clamp = clamp || '...';
  var node = document.createElement('div');
  node.innerHTML = text;
  var content = node.textContent;
  return content.length > length ? content.slice(0, length) + clamp : content;
};

Vue.filter('truncate', filter);


new Vue({
  render: h => h(App),
}).$mount('#app')

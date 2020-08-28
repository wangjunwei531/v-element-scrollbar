import Vue from 'vue'
import App from './App'
import vElementScrollbar from './vElementScrollbar';
Vue.config.productionTip = false
console.log(vElementScrollbar)

Vue.use(vElementScrollbar)
new Vue({
  el: '#app',
  render: h => h(App)
})

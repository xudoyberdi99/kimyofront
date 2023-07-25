import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueCarousel from 'vue-carousel';

Vue.config.productionTip = false
Vue.use(element)
Vue.use(VueCarousel)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

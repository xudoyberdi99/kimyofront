import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutUsView from "@/views/AboutUsView.vue";
import NewsDayView from "@/views/NewsDayView.vue";
import InteractiveServiceView from "@/views/InteractiveServiceView.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutUsView
  },
  {
    path: '/newsday',
    name: 'newsday',
    component: NewsDayView
  },
  {
    path: '/services',
    name: 'services',
    component: InteractiveServiceView
  },

]

const router = new VueRouter({
  routes
})

export default router

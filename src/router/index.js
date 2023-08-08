import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutUsView from "@/views/AboutUsView.vue";
import NewsDayView from "@/views/NewsDayView.vue";
import InteractiveServiceView from "@/views/InteractiveServiceView.vue";
import LastNewsView from "@/views/LastNewsView.vue";
import AnnouncementView from "@/views/AnnouncementView.vue";
import ConferencesView from "@/views/ConferencesView.vue";

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
    {
        path: '/lastnews',
        name: 'lastnews',
        component: LastNewsView
    },
    {
        path: '/announcementView',
        name: 'announcementView',
        component: AnnouncementView
    },
    {
        path: '/confrences',
        name: 'confrences',
        component: ConferencesView
    },

]

const router = new VueRouter({
    routes
})

export default router

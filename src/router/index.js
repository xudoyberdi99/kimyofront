import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutUsView from "@/views/AboutUsView.vue";
import NewsDayView from "@/views/NewsDayView.vue";
import InteractiveServiceView from "@/views/InteractiveServiceView.vue";
import LastNewsView from "@/views/LastNewsView.vue";
import AnnouncementView from "@/views/AnnouncementView.vue";
import ConferencesView from "@/views/ConferencesView.vue";
import FacultysView from "@/views/FacultysView.vue";
import ActiveStudentsView from "@/views/ActiveStudentsView.vue";
import NewsDetailView from "@/views/NewsDetailView.vue";
import AnnouncementDetailView from "@/views/AnnouncementDetailView.vue";
import ConferencesDetailView from "@/views/ConferencesDetailView.vue";
import BachelorsView from "@/views/BachelorsView.vue";
import PassingPointsView from "@/views/PassingPointsView.vue";
import AdmissionQuotasView from "@/views/AdmissionQuotasView.vue";
import ParttimeUndergraduatesView from "@/views/ParttimeUndergraduatesView.vue";
import MastersView from "@/views/MastersView.vue";
import ClassSchedulesView from "@/views/ClassSchedulesView.vue";

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
        path: '/news-detail/:id',
        name: 'news-detail',
        component: NewsDetailView
    },
    {
        path: '/announcementView',
        name: 'announcementView',
        component: AnnouncementView
    },
    {
        path: '/announcement-detail/:id',
        name: 'announcement-detail',
        component: AnnouncementDetailView
    },
    {
        path: '/confrences',
        name: 'confrences',
        component: ConferencesView
    },
    {
        path: '/confrences-detail/:id',
        name: 'confrences-detail',
        component: ConferencesDetailView
    },
    {
        path: '/allFacultys',
        name: 'allFacultys',
        component: FacultysView
    },
    {
        path: '/activeStudents',
        name: 'activeStudents',
        component: ActiveStudentsView
    },
    {
        path: '/bachelors',
        name: 'bachelors',
        component: BachelorsView
    },
    {
        path: '/passingpoints',
        name: 'passingpoints',
        component: PassingPointsView
    },
    {
        path: '/admissionQuotas',
        name: 'admissionQuotas',
        component: AdmissionQuotasView
    },
    {
        path: '/parttimeUndergraduates',
        name: 'parttimeUndergraduates',
        component: ParttimeUndergraduatesView
    },
    {
        path: '/masters',
        name: 'masters',
        component: MastersView
    },
    {
        path: '/classSchedules',
        name: 'classSchedules',
        component: ClassSchedulesView
    },


]

const router = new VueRouter({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        return {x: 0, y: 0};
    },
    routes,
})

export default router

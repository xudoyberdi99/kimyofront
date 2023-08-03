<template>
  <div class=" p-0">
    <NewsDay></NewsDay>
    <InteractiveService></InteractiveService>
    <AboutInstitut></AboutInstitut>
    <LastNews></LastNews>
    <Notifications></Notifications>
    <Services></Services>
    <Facultys></Facultys>
    <Statistika></Statistika>
    <ActivStudents></ActivStudents>
    <Partners></Partners>
  </div>
</template>

<script>
import NewsDay from '@/components/main/NewsDay.vue'
import InteractiveService from '@/components/main/InteractiveServices.vue'
import AboutInstitut from '@/components/main/AboutInstituti.vue'
import LastNews from '@/components/main/LastNews.vue'
import Notifications from '@/components/main/Notification.vue'
import Services from '@/components/main/Services.vue'
import Facultys from '@/components/main/Facultys.vue'
import ActivStudents from '@/components/main/ActivStudents.vue'
import Partners from "@/components/main/Partners.vue";
import Statistika from "@/components/main/Statistika.vue"

export default {
  name: 'HomeView',
  components: {
    NewsDay,
    InteractiveService,
    AboutInstitut,
    LastNews,
    Notifications,
    Services,
    Facultys,
    ActivStudents,
    Partners,
    Statistika
  }
}
</script>

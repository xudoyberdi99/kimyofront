<template>
  <div class="container">
      <NewsDay></NewsDay>
      <InteractiveService></InteractiveService>
      <AboutInstitut></AboutInstitut>
      <LastNews></LastNews>
      <Notifications></Notifications>
      <Services></Services>
      <Facultys></Facultys>
      <ActivStudents></ActivStudents>
      <Partners></Partners>
  </div>
</template>

<script>
import NewsDay from '@/components/NewsDay.vue'
import InteractiveService from '@/components/InteractiveServices.vue'
import  AboutInstitut from '@/components/AboutInstituti.vue'
import LastNews from '@/components/LastNews.vue'
import  Notifications from '@/components/Notification.vue'
import Services from '@/components/Services.vue'
import Facultys from '@/components/Facultys.vue'
import  ActivStudents from '@/components/ActivStudents.vue'
import Partners from "@/components/Partners.vue";
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
      Partners
  }
}
</script>

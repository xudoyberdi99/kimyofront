<template>
  <div class="container pt-5">
    <div class="row">
      <div class="col-md-9">
          <AboutUs></AboutUs>
      </div>
      <div class="col-md-3">
          <Aside></Aside>
      </div>
    </div>
  </div>
</template>
<script>
import AboutUs from "@/components/AboutUs.vue";
import Aside from "@/layout/Aside.vue"
export default {
  name:'AboutView',
  components:{
    AboutUs,
    Aside
  }

}
</script>
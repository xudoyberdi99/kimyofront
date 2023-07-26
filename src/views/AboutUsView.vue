<template>
  <div class="container">
    <div class="row">
      <div class="col-md-9">
          <AboutUs></AboutUs>
      </div>
      <div class="col-md-3">

      </div>
    </div>
  </div>
</template>
<script>
import AboutUs from "@/components/AboutUs.vue";
export default {
  name:'AboutView',
  components:{
    AboutUs,
  }

}
</script>
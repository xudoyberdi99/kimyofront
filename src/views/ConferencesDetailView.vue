<template>
  <div class="container pt-5">
    <div class="row">
      <div class="col-md-9">
        <ConferenceDetail></ConferenceDetail>
      </div>
      <div class="col-md-3">
        <Aside></Aside>
      </div>
    </div>
  </div>
</template>
<script>
import Aside from "@/layout/Aside.vue";
import ConferenceDetail from "@/components/Conference-Detail.vue";

export default {
  components: {
    Aside, ConferenceDetail
  }
}
</script>
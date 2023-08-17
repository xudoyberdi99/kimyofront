<template>
  <div class="container pt-5">
    <div class="row">
      <div class="col-md-9">
        <ConferenceDetail></ConferenceDetail>
        <SimilarPages></SimilarPages>
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
import SimilarPages from "@/layout/SimilarPages.vue";

export default {
  components: {
    SimilarPages,
    Aside, ConferenceDetail
  }
}
</script>
<template>
  <div class="container pt-5">
    <div class="row">
      <div class="col-md-9">
        <NewsDetail></NewsDetail>
        <SimilarPages></SimilarPages>
      </div>
      <div class="col-md-3">
        <Aside></Aside>
      </div>
    </div>
  </div>
</template>
<script>
import NewsDetail from "@/components/NewsDetail.vue";
import SimilarPages from "@/layout/SimilarPages.vue";
import Aside from "@/layout/Aside.vue";

export default {
  components: {SimilarPages, Aside, NewsDetail}
}
</script>
<style>

</style>
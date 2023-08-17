<template>
  <div class="container pt-5">
    <div class="row">
      <div class="col-md-9">
        <AnnouncementDetail></AnnouncementDetail>
        <SimilarPages></SimilarPages>
      </div>
      <div class="col-md-3">
        <Aside></Aside>
      </div>
    </div>
  </div>
</template>
<script>
import AnnouncementDetail from "@/components/Announcement-Detail.vue";
import SimilarPages from "@/layout/SimilarPages.vue";
import Aside from "@/layout/Aside.vue";

export default {
  components: {SimilarPages, AnnouncementDetail, Aside}

}
</script>

<style scoped>

</style>
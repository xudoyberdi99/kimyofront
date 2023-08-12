<template>
  <div class="container pt-5">
    <div class="row">
      <div class="col-md-9">
        <AnnouncementDetail></AnnouncementDetail>
      </div>
      <div class="col-md-3">
        <Aside></Aside>
      </div>
    </div>
  </div>
</template>
<script>
import AnnouncementDetail from "@/components/Announcement-Detail.vue";
import Aside from "@/layout/Aside.vue";

export default {
  components: {AnnouncementDetail, Aside}

}
</script>

<style scoped>

</style>
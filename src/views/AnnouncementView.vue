<template>
  <div class="container pt-5">
    <div class="row">
      <div class="col-md-9">
        <Announcement></Announcement>
      </div>
      <div class="col-md-3">
        <Aside></Aside>
      </div>
    </div>
  </div>
</template>

<script>
import Announcement from "@/components/Announcement.vue";
import Aside from "@/layout/Aside.vue";

export default {
  name: 'AnnouncementView',
  components: {Aside, Announcement}
}
</script>

<style scoped>

</style>
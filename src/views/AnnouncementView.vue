<template>
  <div class="container pt-5">
    <div class="row">
      <div class="col-md-9">
        <Announcements></Announcements>
      </div>
      <div class="col-md-3">
        <Aside></Aside>
      </div>
    </div>
  </div>
</template>

<script>
import Announcements from "@/components/Announcements.vue";
import Aside from "@/layout/Aside.vue";

export default {
  name: 'AnnouncementView',
  components: {Aside, Announcements}
}
</script>

<style scoped>

</style>
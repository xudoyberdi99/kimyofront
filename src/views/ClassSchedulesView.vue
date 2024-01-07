<template>
  <div class="container pt-5">
    <div class="row">
      <div class="col-md-9">
        <ClassSchedules></ClassSchedules>
      </div>
      <div class="col-md-3">
        <Aside></Aside>
      </div>
    </div>
  </div>
</template>
<script>
import ClassSchedules from "@/components/ClassSchedules.vue";
import Aside from "@/layout/Aside.vue";
export default {
  components: { Aside, ClassSchedules}
}
</script>
<style>

</style>
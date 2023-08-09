<template>
  <div class="container pt-5">
    <div class="row">
      <div class="col-md-9">
        <ActiveStudents></ActiveStudents>
      </div>
      <div class="col-md-3">
        <Aside></Aside>
      </div>
    </div>
  </div>
</template>
<script>
import Aside from "@/layout/Aside.vue";
import ActiveStudents from "@/components/ActiveStudents.vue";

export default {
  components: {ActiveStudents, Aside}
}
</script>

<style scoped>

</style>
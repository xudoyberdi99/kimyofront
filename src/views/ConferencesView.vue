<template>
  <div class="container pt-5">
    <div class="row">
      <div class="col-md-9">
        <Conferences></Conferences>
      </div>
      <div class="col-md-3">
        <Aside></Aside>
      </div>
    </div>
  </div>
</template>

<script>
import Conferences from "@/components/Conferences.vue";
import Aside from "@/layout/Aside.vue";

export default {
  components: {Aside, Conferences}

}
</script>

<style scoped>

</style>
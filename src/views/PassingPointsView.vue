<template>
  <div class="container pt-5">
    <div class="row">
      <div class="col-md-9">
        <PassingPoints></PassingPoints>
      </div>
      <div class="col-md-3">
        <Aside></Aside>
      </div>
    </div>
  </div>
</template>
<script>
import PassingPoints from "@/components/PassingPoints.vue";
import Aside from "@/layout/Aside.vue";
export default {
  components: { Aside, PassingPoints}
}
</script>
<style>

</style>
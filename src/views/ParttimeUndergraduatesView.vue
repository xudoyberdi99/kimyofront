<template>
  <div class="container pt-5">
    <div class="row">
      <div class="col-md-9">
        <ParttimeUndergraduates></ParttimeUndergraduates>
      </div>
      <div class="col-md-3">
        <Aside></Aside>
      </div>
    </div>
  </div>
</template>
<script>
import ParttimeUndergraduates from "@/components/ParttimeUndergraduates.vue";
import Aside from "@/layout/Aside.vue";
export default {
  components: { Aside, ParttimeUndergraduates}
}
</script>
<style>

</style>
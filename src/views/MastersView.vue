<template>
  <div class="container pt-5">
    <div class="row">
      <div class="col-md-9">
        <Masters></Masters>
      </div>
      <div class="col-md-3">
        <Aside></Aside>
      </div>
    </div>
  </div>
</template>
<script>
import Masters from "@/components/Masters.vue";
import Aside from "@/layout/Aside.vue";
export default {
  components: { Aside, Masters}
}
</script>
<style>

</style>
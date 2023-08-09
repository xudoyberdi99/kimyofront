<template>
  <div class="container">
    <div class="row">
      <div class="col-md-9">
        <Facultys></Facultys>
      </div>
      <div class="col-md-3">
        <Aside></Aside>
      </div>
    </div>
  </div>
</template>
<script>
import Aside from "@/layout/Aside.vue";
import Facultys from "@/components/Facultys.vue";

export default {
  components: {Facultys, Aside}
}
</script>

<style scoped>

</style>
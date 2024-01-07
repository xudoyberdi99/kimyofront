<template>
  <div class="container pt-5">
    <div class="row">
      <div class="col-md-9">
        <AdmissionQuotas></AdmissionQuotas>
      </div>
      <div class="col-md-3">
        <Aside></Aside>
      </div>
    </div>
  </div>
</template>
<script>
import AdmissionQuotas from "@/components/AdmissionQuotas.vue";
import Aside from "@/layout/Aside.vue";
export default {
  components: { Aside, AdmissionQuotas}
}
</script>
<style>

</style>
<template>
    <div class="container pt-5">
        <div class="row">
            <div class="col-md-9">
                <InteractiveService></InteractiveService>
            </div>
            <div class="col-md-3">
                <Aside></Aside>
            </div>
        </div>
    </div>
</template>
<script>
import InteractiveService from "@/components/InteractiveService.vue";
import Aside from "@/layout/Aside.vue"
export default {
    name:'InteractiveServiceView',
    components:{
        InteractiveService,
        Aside
    }

}
</script>
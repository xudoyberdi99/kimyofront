<template>
    <div class="container pt-5">
        <div class="row">
            <div class="col-md-9">
                <NewsDay></NewsDay>
            </div>
            <div class="col-md-3">
                <Aside></Aside>
            </div>
        </div>
    </div>
</template>
<script>
import NewsDay from "@/components/NewsDay.vue";
import Aside from "@/layout/Aside.vue"
export default {
    name:'NewsDayView',
    components:{
        NewsDay,
        Aside
    }

}
</script>
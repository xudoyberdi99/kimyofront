<template>
  <div class="container mb-5">
      <div class="row text-center mb-5">
          <div class="col-md-12" style="width: 400px; margin: auto;">
              <h3 class="fw-bold">Bizning institutimi xush kelibsiz!</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ex
                  nobis odit quam sapiente totam.
              Lorem ipsum dolor sit amet.</p>
                  <button style="background-color: #FDC800;
                  color: black; width: 100px; border-radius: 5px;
                  border:none;margin-top: 10px;" class="btn btn-success fw-bold">Batafsil</button>
          </div>
      </div>
      <div class="row mt-3">
          <div class="col-md-12" style="text-align: center; width: 900px; height: 600px; background-color: #ccc; margin: auto;">
              <el-carousel indicator-position="outside">
                  <el-carousel-item v-for="item in slideItems" :key="item.id">
                      <img :src=" require('@/assets/'+ item.url)" alt="jewnf">
                  </el-carousel-item>
              </el-carousel>
          </div>
      </div>
  </div>
</template>

<script >
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    components: {
        VueSlickCarousel,
    },
    data(){
        return {
            slideItems:[
                {id:1,url:'11.jpg'},
                {id:2,url:'22.jpg'},
                {id:2,url:'33.jpg'},
                {id:2,url:'44.jpg'}
            ]
        }
    }
}
</script>
<style scoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>
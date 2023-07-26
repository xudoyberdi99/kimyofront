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
      <div class="row">
          <div class="col-md-12">
              <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-inner" style="height: 600px;">
                      <div class="carousel-item active">
                          <div class="row">
                              <div class="col-12">
                                  <el-card class="card-item">
<!--                                      <img src="../assets/11.jpg" class="image">-->
                                      <video width = "1200" height = "200" controls>
                                          <source src = "../../assets/vedio2.mp4" type = "video/mp4">
                                      </video>
                                  </el-card>
                              </div>
                          </div>
                      </div>

                      <div class="carousel-item">
                          <div class="row">
                              <div class="col-12">
                                  <el-card class="card-item">
                                      <img src="../../assets/22.jpg" class="image">
                                  </el-card>
                              </div>
                          </div>
                      </div>

                      <div class="carousel-item">
                          <div class="row">
                              <div class="col-12">
                                  <el-card class="card-item">
                                      <img src="../../assets/33.jpg" class="image">
                                  </el-card>
                              </div>
                          </div>
                      </div>

                  </div>

                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                  </button>
              </div>
          </div>
      </div>
  </div>
</template>

<script >
export default {
    data(){
        return {
        }
    }
}
</script>
<style scoped>
.image {
    width: 100%;
    display: block;
    border-radius: 20px;
    height: 500px;
}
.card-item{
    background-color: #F6F9F8;
    border-radius: 10px;
}
</style>
<template>
  <div class="container mb-5">
      <div class="row text-center mb-5">
          <div class="col-md-12" style="width: 400px; margin: auto;">
              <h3 class="fw-bold">Bizning institutimi xush kelibsiz!</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ex
                  nobis odit quam sapiente totam.
              Lorem ipsum dolor sit amet.</p>
                  <button @click="$router.push('about')" style="background-color: #FDC800;
                  color: black; width: 150px; border-radius: 5px;
                  border:none;margin-top: 10px; padding: 12px 20px;" class="btn btn-success fw-bold">Batafsil</button>
          </div>
      </div>
      <div class="row">
          <div class="col-md-12">
              <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-inner" style="height: 600px; margin-bottom: 50px">

                      <div class="carousel-item active">
                          <div class="row">
                              <div class="col-12">
                                      <img src="../../assets/22.jpg" class="image">
                              </div>
                          </div>
                      </div>

                      <div class="carousel-item">
                          <div class="row">
                              <div class="col-12">
                                      <img src="../../assets/33.jpg" class="image">
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
    //border-radius: 20px;
    height: 600px;
}

</style>
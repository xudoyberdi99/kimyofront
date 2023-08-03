<template>
  <div class="container-fluid py-5" style="background-color: #f6f9f8; padding: 200px 0px;">
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="3000">
          <div class="container">
            <div class="row d-flex align-items-center">
              <div class="col-md-6">
                <h1 class="fw-bold">Koreya Respublikasining O'zbekistondagi elchisi tashrif buyurdi!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A culpa id neque officiis perspiciatis,
                  quasi suscipit tempora tenetur. Autem dicta incidunt sapiente similique voluptate. Cupiditate deleniti
                </p>

                <button @click="$router.push('newsday')" style="background-color: #FDC800;
                  color: black; width: 150px; border-radius: 5px;
                  border:none;margin-top: 10px; padding: 12px 20px;" class="btn btn-success fw-bold">Batafsil
                </button>
              </div>
              <div class="col-md-6">
                <img src="@/assets/istockphoto-1366724877-612x612.jpg" alt="kun rasmi" class="images">
              </div>
            </div>

          </div>
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <div class="container">
            <div class="row d-flex align-items-center">
              <div class="col-md-6">
                <h1 class="fw-bold">Koreya Respublikasining O'zbekistondagi elchisi tashrif buyurdi!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A culpa id neque officiis perspiciatis,
                  quasi suscipit tempora tenetur. Autem dicta incidunt sapiente similique voluptate. Cupiditate deleniti
                </p>

                <button @click="$router.push('newsday')" style="background-color: #FDC800;
                  color: black; width: 150px; border-radius: 5px;
                  border:none;margin-top: 10px; padding: 12px 20px;" class="btn btn-success fw-bold">Batafsil
                </button>
              </div>
              <div class="col-md-6">
                <img src="@/assets/istockphoto-1366724877-612x612.jpg" alt="kun rasmi" class="images">
              </div>
            </div>

          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev">
        <span class="carousel-control-prev-icon icons" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
              data-bs-slide="next">
        <span class="carousel-control-next-icon icons" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>

</template>
<script>

</script>
<style scoped>
.images {
  width: 100%;
  display: block;
  border-radius: 20px;
}


.carousel-control-prev-icon {
  width: 20px;
  height: 20px;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23c593d8' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e");
}

.carousel-control-next-icon {
  width: 20px;
  height: 20px;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23c593d8' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e");
}
</style>
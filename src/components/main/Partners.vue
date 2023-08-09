<template>
  <div class="container mt-5 mb-5">
    <div class="row">
      <div class="col-4">
        <h2 class="fw-bold">Hamkorlarimiz</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Doloremque ducimus optio quidem rem voluptas. A aliquam corporis dolore dolores,
          ducimus explicabo in labore necessitatibus quasi qui tempore vero?
        </p>
      </div>
      <div class="col-8">
        <div id="carouselExampleControls1" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner" style="height: 300px;">
            <div class="carousel-item active ">
              <div class="row d-flex" style="justify-content: space-around;">
                <div class="col-6 box">
                  <img class="logo-lg" src="@/assets/logo.svg" alt="UniversalBank">
                </div>
                <div class="col-6 box">
                  <img class="logo-lg" src="@/assets/logo.svg"
                       alt="UniversalBank">
                </div>
                <div class="col-6 box">
                  <img class="logo-lg" src="@/assets/logo.svg"
                       alt="UniversalBank">
                </div>
                <div class="col-6 box">
                  <img class="logo-lg" src="@/assets/logo.svg"
                       alt="UniversalBank">
                </div>
              </div>
            </div>
            <div class="carousel-item ">
              <div class="row d-flex" style="justify-content: space-around;">
                <div class="col-6 box">
                  <img class="logo-lg" src="@/assets/logo.svg"
                       alt="UniversalBank">
                </div>
                <div class="col-6 box">
                  <img class="logo-lg" src="@/assets/logo.svg"
                       alt="UniversalBank">
                </div>
                <div class="col-6 box">
                  <img class="logo-lg" src="@/assets/logo.svg"
                       alt="UniversalBank">
                </div>
                <div class="col-6 box">
                  <img class="logo-lg" src="@/assets/logo.svg"
                       alt="UniversalBank">
                </div>
              </div>
            </div>
            <div class="carousel-item ">
              <div class="row d-flex" style="justify-content: space-around;">
                <div class="col-6 box">
                  <img class="logo-lg" src="@/assets/logo.svg"
                       alt="UniversalBank">
                </div>
                <div class="col-6 box">
                  <img class="logo-lg" src="@/assets/logo.svg"
                       alt="UniversalBank">
                </div>
                <div class="col-6 box">
                  <img class="logo-lg" src="@/assets/logo.svg"
                       alt="UniversalBank">
                </div>
                <div class="col-6 box">
                  <img class="logo-lg" src="@/assets/logo.svg"
                       alt="UniversalBank">
                </div>
              </div>
            </div>
          </div>

          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls1"
                  data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls1"
                  data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.logo-lg {
  text-align: center;
  display: block;
  width: 70%;
  height: 130px;
  margin: 0 auto;
}

.box {
  width: 350px;
  height: 130px;
  border-radius: 20px;
  margin-bottom: 15px;
  background-color: #f6f9f8;
}

</style>
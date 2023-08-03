<template>
  <div class="container">
      <div class="row d-flex align-items-center">
          <div class="col-md-6">
              <h1 class="fw-bold">Koreya Respublikasining O'zbekistondagi elchisi tashrif buyurdi!</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A culpa id neque officiis perspiciatis,
                  quasi suscipit tempora tenetur. Autem dicta incidunt sapiente similique voluptate. Cupiditate deleniti
              </p>

              <button @click="$router.push('newsday')" style="background-color: #FDC800;
                  color: black; width: 150px; border-radius: 5px;
                  border:none;margin-top: 10px; padding: 12px 20px;" class="btn btn-success fw-bold">Batafsil</button>
          </div>
          <div class="col-md-6">
              <img src="@/assets/istockphoto-1366724877-612x612.jpg" alt="kun rasmi" class="images">
          </div>
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
</style>
<template>
  <div class="container-fluid" style="background-color: #f6f9f8;">
    <div class="container py-5">
      <div class="row d-flex align-items-center">
        <div class="col-md-5">
          <h1 class="fw-bold">Bizning Institutimizga Xush kelibsiz</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A culpa id
            neque officiis perspiciatis, quasi suscipit tempora tenetur. Autem
            dicta incidunt sapiente similique voluptate. Cupiditate deleniti
          </p>

          <button
              @click="$router.push('newsday')"
              style="
              background-color: #fdc800;
              color: black;
              width: 150px;
              border-radius: 5px;
              border: none;
              margin-top: 10px;
              padding: 12px 20px;
            "
              class="btn btn-success fw-bold"
          >
            Batafsil
          </button>
        </div>
        <div class="col-md-7">
          <img
              src="https://tktiyf.uz/wp-content/uploads/2023/02/cropped-cropped-fon.jpg"
              alt="kun rasmi"
              class="images"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
.images {
  width: 100%;
  display: block;
  border-radius: 15px;
  height: 500px !important;
//border-radius: 20px; height: 600px;
}
</style>
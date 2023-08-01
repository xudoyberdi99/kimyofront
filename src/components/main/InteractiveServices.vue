<template>
  <div class="container mt-5 mb-5">
      <div class="row">
          <div class="col-md-4 groups-item">
              <h4 class="fw-bold">Bizning interaktiv xizmatlardan foydalaning</h4>
              <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam distinctio dolores eum neque nihil numquam sed sit suscipit tenetur voluptatibus.</p>
              <div style="width: 180px;">
                  <button style="background-color: #FDC800; color: black; border-radius: 5px; border:none;margin-top: 10px; padding: 10px;" class="btn btn-success">Barcha Xizmatlar</button>
              </div>

          </div>
          <div class="col-md-8">
                <div class="row groups">
                    <div class="col-md-4 groups-item">
                        <i class="fa fa-user fa-2x" aria-hidden="true"></i>
                        <p class="title">HEMIS-O'qituvchi</p>
                        <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, porro!</p>
                        <a class="links" href="#">Kirish <span><i class="fa fa-arrow-right" aria-hidden="true"></i></span></a>
                    </div>
                    <div class="col-md-4 groups-item">
                        <i class="fa-solid fa-user-graduate fa-2x"></i>
                        <p class="title">HEMIS-Talaba</p>
                        <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, porro!</p>
                        <a class="links" href="#">Kirish <span><i class="fa fa-arrow-right" aria-hidden="true"></i></span></a>
                    </div>
                    <div  class="col-md-4 groups-item">
                        <i class="fa fa-table fa-2x" aria-hidden="true"></i>
                        <p class="title">Dars Jadvali</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, porro!</p>
                        <a class="links" href="#">Kirish <span><i class="fa fa-arrow-right" aria-hidden="true"></i></span></a>
                    </div>
                </div>
          </div>
      </div>
  </div>
</template>

<script>

</script>

<style scoped>
.text{
    color:#6A7584;
}
.groups {

}
.groups-item {
    padding: 30px;
    .links {
        text-decoration: none;
        color:black;
        font-weight: bold;
    }
}
.groups-item:hover{
    background-color: rgb(0,33,71);
    border-radius: 20px;
    color: white;
    .links{
        color: #FDC800;
    }
}
.title {
    margin: 15px 0px;
    font-weight: bold;
}
.btn {
    font-weight: bold;
}
.btn:hover{
    color: #FDC800;
}
</style>
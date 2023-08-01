<template>
  <div class="container mb-5">
      <div class="row">
          <div class="col-md-12">
              <div class="title mb-5 mt-5">
                 <h3 class="fw-bold">Faol Talabalar</h3>
                 <p>Lorem ipsum dolor sit  consectetur adipisicing elit. Ab adipisci, beatae delectus ea itaque, nobis non, omnis pariatur perspiciatis placeat quaerat quos rerum saepe.</p>
                  <button style="background-color: #FDC800;
                  color: black; width: 150px; border-radius: 5px;
                  border:none;margin-top: 10px; padding: 12px 20px;" class="btn btn-success fw-bold">Batafsil</button>
              </div>
          </div>
      </div>
  <div class="row">
    <div class="col-12">
            <div class="row">
              <div class="col-3">
                <el-card class="card-item" :body-style="{ padding: '0px' }">
                  <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                  <div style="padding: 14px;">
                    <h5>Ism Familya</h5>
                    <p>siz doim etiborimizdasiz aziz bolajonlar</p>
                  </div>
                </el-card>
              </div>
              <div class="col-3">
                <el-card class="card-item" :body-style="{ padding: '0px' }">
                  <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                  <div style="padding: 14px;">
                    <h5>Ism Familya</h5>
                    <p>siz doim etiborimizdasiz aziz bolajonlar</p>
                  </div>
                </el-card>
              </div>
              <div class="col-3">
                <el-card class="card-item" :body-style="{ padding: '0px' }">
                  <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                  <div style="padding: 14px;">
                    <h5>Ism Familya</h5>
                    <p>siz doim etiborimizdasiz aziz bolajonlar</p>
                  </div>
                </el-card>
              </div>
              <div class="col-3">
                <el-card class="card-item" :body-style="{ padding: '0px' }">
                  <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                  <div style="padding: 14px;">
                    <h5>Ism Familya</h5>
                    <p>siz doim etiborimizdasiz aziz bolajonlar</p>
                  </div>
                </el-card>
              </div>
            </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
    data(){
        return {

        }
    }
}
</script>

<style scoped>
.title {
    width: 400px;
    text-align: center;
    margin: auto;
}
.image {
  width: 100%;
  display: block;
  border-radius: 20px;
  height: 250px;
  padding: 10px;
}
.card-item{
  background-color: #F6F9F8;
  border-radius: 20px;
}
</style>
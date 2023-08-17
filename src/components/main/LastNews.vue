<template>
  <div class="container mt-5 mb-5">
    <div class="row">
      <div class="col-md-4">
        <h4 class="fw-bold">So'nggi yangiliklar</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugiat necessitatibus nostrum vitae?</p>
        <div style="width: 180px;">
          <button @click="$router.push('lastnews')"
                  style="background-color: #FDC800; color: black; border-radius: 5px; border:none;margin-top: 10px;"
                  class="btn btn-success p-3 fw-bold">Barcha Yangiliklar
          </button>
        </div>
      </div>
      <div class="col-md-8">
        <div class="row mb-5">
          <div class="col-md-6">
            <el-card class="card-item" :body-style="{ padding: '0px' }">
              <img src="@/assets/priscilla-du-preez-XkKCui44iM0-unsplash.jpg" class="image">
              <div style="padding: 14px;">
                <button @click="$router.push('news-detail/1')" class="buttons"><p class="fw-bold">siz doim
                  etiborimizdasiz
                  aziz bolajonlar</p></button>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, dolorum!</p>
                <div class="bottom clearfix">
                  <button @click="$router.push('news-detail/1')" class="buttons">To'liq o'qish <span class="time"><i
                      class="fa fa-arrow-right fa-sm"
                      aria-hidden="true"></i></span></button>
                  <div class="px-2">
                    <i class="fas fa-share"></i>
                    <span><time class="times">123</time></span>
                  </div>
                  <div>
                    <i class="fa-solid fa-calendar"></i>
                    <span><time class="times">{{ currentDate }}.{{ currentMonth }}.{{ currentYear }}</time></span>
                  </div>
                </div>
              </div>
            </el-card>
          </div>
          <div class="col-md-6">
            <el-card class="card-item" :body-style="{ padding: '0px' }">
              <img src="@/assets/istockphoto-1430133287-1024x1024.jpg"
                   class="image">
              <div style="padding: 14px;">
                <button @click="$router.push('news-detail/1')" class="buttons"><p class="fw-bold">siz doim
                  etiborimizdasiz
                  aziz bolajonlar</p></button>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, dolorum!</p>
                <div class="bottom clearfix">
                  <button @click="$router.push('news-detail/1')" class="buttons">To'liq o'qish <span class="time"><i
                      class="fa fa-arrow-right fa-sm"
                      aria-hidden="true"></i></span></button>
                  <div class="px-2">
                    <i class="fas fa-share"></i>
                    <span><time class="times">123</time></span>
                  </div>
                  <div>
                    <i class="fa-solid fa-calendar"></i>
                    <span><time class="times">{{ currentDate }}.{{ currentMonth }}.{{ currentYear }}</time></span>
                  </div>
                </div>
              </div>
            </el-card>
          </div>
          <div class="col-md-6">
            <el-card class="card-item" :body-style="{ padding: '0px' }">
              <img src="@/assets/priscilla-du-preez-XkKCui44iM0-unsplash.jpg" class="image">
              <div style="padding: 14px;">
                <button @click="$router.push('news-detail/1')" class="buttons"><p class="fw-bold">siz doim
                  etiborimizdasiz
                  aziz bolajonlar</p></button>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, dolorum!</p>
                <div class="bottom clearfix">
                  <button @click="$router.push('news-detail/1')" class="buttons">To'liq o'qish <span class="time"><i
                      class="fa fa-arrow-right fa-sm"
                      aria-hidden="true"></i></span></button>
                  <div class="px-2">
                    <i class="fas fa-share"></i>
                    <span><time class="times">123</time></span>
                  </div>
                  <div>
                    <i class="fa-solid fa-calendar"></i>
                    <span><time class="times">{{ currentDate }}.{{ currentMonth }}.{{ currentYear }}</time></span>
                  </div>
                </div>
              </div>
            </el-card>
          </div>
          <div class="col-md-6">
            <el-card class="card-item" :body-style="{ padding: '0px' }">
              <img src="@/assets/istockphoto-1430133287-1024x1024.jpg"
                   class="image">
              <div style="padding: 14px;">
                <button @click="$router.push('news-detail/1')" class="buttons"><p class="fw-bold">siz doim
                  etiborimizdasiz
                  aziz bolajonlar</p></button>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, dolorum!</p>
                <div class="bottom clearfix">
                  <button @click="$router.push('news-detail/1')" class="buttons">To'liq o'qish <span class="time"><i
                      class="fa fa-arrow-right fa-sm"
                      aria-hidden="true"></i></span></button>
                  <div class="px-2">
                    <i class="fas fa-share"></i>
                    <span><time class="times">123</time></span>
                  </div>
                  <div>
                    <i class="fa-solid fa-calendar"></i>
                    <span><time class="times">{{ currentDate }}.{{ currentMonth }}.{{ currentYear }}</time></span>
                  </div>
                </div>
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
  data() {
    return {
      currentDate: new Date().getDate(),
      currentMonth: new Date().getMonth() + 1,
      currentYear: new Date().getFullYear()
    };
  }
}
</script>
<style scoped>
.time {
  font-size: 16px;
  color: black;
  font-weight: bold;
}

.times {
  margin-left: 5px;
}

.bottom {
  margin-top: 13px;
  line-height: 14px;
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
}

.buttons {
  border: none;
  font-size: 18px;
  margin-right: auto;
  background-color: transparent;
  font-weight: bold;
}

.buttons:hover {
  color: #FDC800;
}

.image {
  width: 100%;
  display: block;
  border-radius: 20px;
  height: 250px;
  padding: 10px;
}


.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.card-item {
  background-color: #F6F9F8;
  border-radius: 20px;
  margin-bottom: 30px;
}
</style>
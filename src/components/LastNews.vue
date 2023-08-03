<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <el-card class="card-item" :body-style="{ padding: '0px' }">
          <img src="@/assets/priscilla-du-preez-XkKCui44iM0-unsplash.jpg" class="image">
          <div style="padding: 14px;">
            <p class="fw-bold">siz doim etiborimizdasiz aziz bolajonlar</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, dolorum!</p>
            <div class="bottom clearfix">
              <button class="buttons">To'liq o'qish <span class="time"><i class="fa fa-arrow-right fa-sm"
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
            <p class="fw-bold">siz doim etiborimizdasiz aziz bolajonlar</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, dolorum!</p>
            <div class="bottom clearfix">
              <button class="buttons">To'liq o'qish <span class="time"><i class="fa fa-arrow-right fa-sm"
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
            <p class="fw-bold">siz doim etiborimizdasiz aziz bolajonlar</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, dolorum!</p>
            <div class="bottom clearfix">
              <button class="buttons">To'liq o'qish <span class="time"><i class="fa fa-arrow-right fa-sm"
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
            <p class="fw-bold">siz doim etiborimizdasiz aziz bolajonlar</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, dolorum!</p>
            <div class="bottom clearfix">
              <button class="buttons">To'liq o'qish <span class="time"><i class="fa fa-arrow-right fa-sm"
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
            <p class="fw-bold">siz doim etiborimizdasiz aziz bolajonlar</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, dolorum!</p>
            <div class="bottom clearfix">
              <button class="buttons">To'liq o'qish <span class="time"><i class="fa fa-arrow-right fa-sm"
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
            <p class="fw-bold">siz doim etiborimizdasiz aziz bolajonlar</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, dolorum!</p>
            <div class="bottom clearfix">
              <button class="buttons">To'liq o'qish <span class="time"><i class="fa fa-arrow-right fa-sm"
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
.times {
  margin-left: 5px;
}

.time {
  font-size: 16px;
  color: black;
  font-weight: bold;
}

.bottom {
  margin-top: 13px;
  line-height: 14px;
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
}

.card-item {
  background-color: #F6F9F8;
  border-radius: 20px;
  width: 400px;
  margin-bottom: 30px;
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
</style>
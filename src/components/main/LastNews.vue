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
              <img src="https://tktiyf.uz/wp-content/uploads/2023/11/photo_2023-07-26_10-27-42-1200x480.jpg" class="image">
              <div style="padding: 14px;">
                <button @click="$router.push('news-detail/1')" class="buttons"><p class="fw-bold butlines">Qonunchilikdagi so‘nggi yangiliklar</p></button>
                <p class="lines">Respublika ijro etuvchi hokimiyat organlarining yaxlit tizimi shakllantirilishi munosabati
                  bilan O’zbekiston Respublikasining ayrim qonun hujjatlariga o’zgartirishlar kiritish to’g’risida</p>
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
              <img src="https://tktiyf.uz/wp-content/uploads/2023/12/IMG_0394-1200x480.jpg"
                   class="image">
              <div style="padding: 14px;">
                  <button @click="$router.push('news-detail/1')" class="buttons"><p class="fw-bold butlines">TKTI Yangiyer filialida “TECHNO WAYS” texnologik rivojlanish marafoniga start</p></button>

                <p class="lines">Ushbu marafon ilmiy va innovatsion g‘oya va loyihalarni saralab olish, yoshlarni qo‘llab-quvvatlash, talabalarning ilmiy va innovatsion salohiyatini namoyon etish, mazkur sohadagi istiqbolli loyihalarni dastlabki bosqichda
                  aniqlash va ularni har tomonlama qo‘llab-quvvatlash, tijoratlashtirish
                  darajasiga olib chiqish maqsadida tashkil etildi.</p>
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
              <img src="https://tktiyf.uz/wp-content/uploads/2023/12/DSC09980-1200x480.jpg" class="image">
              <div style="padding: 14px;">
                <button @click="$router.push('news-detail/1')" class="buttons"><p class="fw-bold butlines">TKTI Yangiyer filialida sayyor sud majlisi bo’lib o’tdi</p></button>
                <p class="lines">2023-yil 15-dekabr kuni TKTI Yangiyer filialida Yangiyer shahar sud raisi Sh.Eshimov raisligida sayyor sud majlisi boʻlib oʻtdi.</p>
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
              <img src="https://tktiyf.uz/wp-content/uploads/2023/12/DSC00858-1200x480.jpg"
                   class="image">
              <div style="padding: 14px;">
                <button @click="$router.push('news-detail/1')" class="buttons"><p class="fw-bold butlines">TKTI Yangiyer filialida “Xalqaro inson huquqlari” kuni munosabati bilan davra suhbati</p></button>
                <p class="lines">“10-dekabr – Xalqaro inson huquqlari” kuni munosabati bilan bugun Toshkent kimyo-texnologiya instituti Yangiyer filiali talabalari bilan davra suhbati tashkil etildi. Tadbirda</p>
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
.lines {
  -webkit-line-clamp: 2!important;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis!important;
}
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
.butlines {
  -webkit-line-clamp: 1!important;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis!important;
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
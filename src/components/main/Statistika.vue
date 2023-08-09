<template>
  <div class="container-fluid statistics" style="background-color: #002147;">

    <div class="container">
      <div class="row">
        <div class="col-12 text-center inner">
          <div class="d-flex justify-content-center">
            <div></div>
            <div class="d-flex univ-title">
              <img
                  style="width: 50px; height: 50px;"
                  src="@/assets/logo-kimyo-tex.png"
                  alt="logo"
              />
              <h1>
                Toshkent Kimyo-texnalogiyalari instituti yangiyer filiali
              </h1>
            </div>
          </div>
          <div>
            <div class="row text-center mb-5">
              <div class="col-md-12" style="width: 400px; margin: auto;">
                <!--                <h3 class="fw-bold">Bizning institutimi xush kelibsiz!</h3>-->
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ex
                  nobis odit quam sapiente totam.
                  Lorem ipsum dolor sit amet.</p>
                <!--                <button @click="$router.push('about')" style="background-color: #FDC800;-->
                <!--                  color: black; width: 150px; border-radius: 5px;-->
                <!--                  border:none;margin-top: 10px; padding: 12px 20px;" class="btn btn-success fw-bold">Batafsil-->
                <!--                </button>-->
              </div>
            </div>
            <!--            <p>-->
            <!--              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam animi aperiam asperiores autem-->
            <!--              dolores eligendi error et explicabo facere illum ipsa iusto labore laudantium maxime minima modi nobis-->
            <!--              officia officiis porro quo sed, tenetur ullam ut vel veniam voluptatibus.-->
            <!--            </p>-->

          </div>
        </div>
      </div>
    </div>
    <div class="container pb-5">
      <div class="row">
        <div class="col-12 col-md-4 col-lg-3">
          <div class="numbers">
            <img

                src="https://tsue.uz/media/statistic/students_hJglotP.png"
                alt=""
                class="numbers__icon"
            />
            <p class="numbers__title">Talabalar soni</p>
            <h1 class="numbers__counter counter">
              <span>21240</span>
            </h1>
          </div>
        </div>
        <div class="col-12 col-md-4 col-lg-3">
          <div class="numbers">
            <img

                src="https://tsue.uz/media/statistic/professor.svg"
                alt=""
                class="numbers__icon"
            />
            <p class="numbers__title">
              Professor-o‘qituvchilar
            </p>
            <h1 class="numbers__counter counter">
              <span>123</span>
            </h1>
          </div>
        </div>
        <div class="col-12 col-md-4 col-lg-3">
          <div class="numbers">
            <img
                src="https://tsue.uz/media/statistic/student_1.png"
                alt=""
                class="numbers__icon"
            />
            <p class="numbers__title">Doktorantlar soni</p>
            <h1 class="numbers__counter counter">
              <span>143</span>
            </h1>
          </div>
        </div>
        <div class="col-12 col-md-4 col-lg-3">
          <div class="numbers">
            <img
                src="https://tsue.uz/media/statistic/research_1.png"
                alt=""
                class="numbers__icon"
            />
            <p class="numbers__title">
              Mustaqil tadqiqotchilar
            </p>
            <h1 class="numbers__counter counter">
              <span>383</span>
            </h1>
          </div>
        </div>
        <div class="col-12 col-md-4 col-lg-3">
          <div class="numbers">
            <img
                src="https://tsue.uz/media/statistic/conference_1_zhCbcON.png"
                alt=""
                class="numbers__icon"
            />
            <p class="numbers__title">Auditoriyalar soni</p>
            <h1 class="numbers__counter counter">
              <span>209</span>
            </h1>
          </div>
        </div>
        <div class="col-12 col-md-4 col-lg-3">
          <div class="numbers">
            <img
                src="https://tsue.uz/media/statistic/mortarboard_1_R8Z2IBj.png"
                alt=""
                class="numbers__icon"
            />
            <p class="numbers__title">
              Qo‘shma taʼlim dasturlari
            </p>
            <h1 class="numbers__counter counter">
              <span>9</span>
            </h1>
          </div>
        </div>
        <div class="col-12 col-md-4 col-lg-3">
          <div class="numbers">
            <img
                src="https://tsue.uz/media/statistic/address_1_dhzNPO0.png"
                alt=""
                class="numbers__icon"
            />
            <p class="numbers__title">
              Taʼlim yo‘nalishlari
            </p>
            <h1 class="numbers__counter counter">
              <span>36</span>
            </h1>
          </div>
        </div>
        <div class="col-12 col-md-4 col-lg-3">
          <div class="numbers">
            <img

                src="https://tsue.uz/media/statistic/Group.png"
                alt=""
                class="numbers__icon"
            />
            <p class="numbers__title">Fakultetlar soni</p>
            <h1 class="numbers__counter counter">
              <span>11</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped>

.statistics {
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 20px;
}

.statistics .inner .univ-title {
  padding-top: 80px;
}

.statistics .inner .univ-title h1 {
  font-style: normal;
  font-weight: 500;
  font-size: 1.8125rem;
  line-height: 130%;
  color: #fff;
  margin-left: 17px;
  margin-top: 3px;
}

.statistics .inner p {
  padding-top: 24px;
  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 24px;
  text-align: center;
  color: #fff;
}

.statistics .numbers {
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 35px;
  background: hsla(0, 0%, 100%, 0.09);
  border-radius: 4px;
  margin-bottom: 28px;
  align-items: center;
  max-height: 200px;
}

.statistics .numbers__counter {
  margin-top: 8px;
  font-weight: 700;
  font-size: 2.0625rem;
  text-transform: uppercase;
  color: #fff;
}

.statistics .numbers__counter,
.statistics .numbers__title {
  font-style: normal;
  line-height: 100%;
  text-align: center;
}

.statistics .numbers__counter,
.statistics .numbers__title {
  font-style: normal;
  line-height: 100%;
  text-align: center;
}

.statistics .numbers__title {
  font-weight: 500;
  font-size: 0.875rem;
  color: hsla(0, 0%, 100%, 0.5);
  margin-top: 20px;
}
</style>

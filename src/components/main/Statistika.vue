<template>
  <div class="container-fluid statistics pb-5" style="background-color: #002147;">
    <!--       style="background-image: url('https://tsue.uz/media/statistic/Frame_19853.jpg');"-->

    <div class="container">
      <div class="row">
        <div class="col-12 text-center position-relative">
          <!--          <div class="animation-play">-->
          <!--            <svg-->
          <!--                width="102"-->
          <!--                height="102"-->
          <!--                viewBox="0 0 102 102"-->
          <!--                fill="none"-->
          <!--                xmlns="http://www.w3.org/2000/svg"-->
          <!--                class="animate-play"-->
          <!--            >-->
          <!--              <rect-->
          <!--                  width="102"-->
          <!--                  height="102"-->
          <!--                  rx="51"-->
          <!--                  fill="white"-->
          <!--              ></rect>-->
          <!--              <path-->
          <!--                  d="M39.9727 32.8094C39.9727 31.187 41.8026 30.2397 43.1273 31.1764L68.051 48.7992C69.1599 49.5833 69.1816 51.221 68.0937 52.0341L43.1701 70.6639C41.8512 71.6498 39.9727 70.7086 39.9727 69.062V32.8094Z"-->
          <!--                  fill="#024DA5"-->
          <!--              ></path>-->
          <!--            </svg>-->
          <!--            <span class="animate-2nd"></span>-->
          <!--            <span class="animate-1st"></span>-->
          <!--          </div>-->

          <div>
            <div class="cirle-anim"></div>
            <button @click="change" class="play-button">
              <i class="fas fa-play"></i>
            </button>
            <div v-if="visible" class="vedio1">
              <div>
                <iframe width="600" height="400" src="https://www.youtube.com/embed/iYWpNexfFXI?autoplay=1&mute=0"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>
                </iframe>
              </div>
              <button @click="visible=!visible" class="delete-play">
                <i class="fas fa-delete-left fa-2x text-success"></i>
              </button>
            </div>
          </div>
          <!---->
        </div>
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
    <div class="container">
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
    return {
      visible: false,
    }
  },
  methods: {
    change() {
      this.visible = true
    },
  },
}
</script>

<style scoped>

.cirle-anim {
  position: absolute;
  background-color: white;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: none;
  right: 646px;
  bottom: -45px;
  animation-name: animat;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  transition: 0.3s all ease-in-out;
}

.vedio1 {
  position: relative;
  z-index: 1111;
}

.delete-play {
  position: absolute;
  top: 0;
  right: -400px;
  top: -30px;
}

.play-button {
  position: absolute;
  background-color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  right: 650px;
  bottom: -40px;
}

.statistics {
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 200px;
  margin-top: 20px;
}

@keyframes animat {
  from {
    transform: scale(.5, .5);
    opacity: 1;
  }
  to {
    transform: scale(1.5);
    opacity: 0.1;
  }
}

.animate-2nd {
  background: hsla(0, 0%, 100%, 0.41);
  width: 158px;
  height: 158px;
  margin-left: -81px;
  top: -27px;
  z-index: 3;
}

.animate-2nd {
  border-radius: 50%;
  position: absolute;
  left: 50%;
  -webkit-animation: pulse 2s infinite;
  animation: pulse 2s infinite;
}

.animate-1st {
  border-radius: 50%;
  position: absolute;
  left: 50%;
  -webkit-animation: pulse 2s infinite;
  animation: pulse 2s infinite;
}

.animate-2nd {
  border-radius: 50%;
  position: absolute;
  left: 50%;
  -webkit-animation: pulse 2s infinite;
  animation: pulse 2s infinite;
}

.statistics .inner .univ-title {
  padding-top: 148px;
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
//margin-bottom: 64px;
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

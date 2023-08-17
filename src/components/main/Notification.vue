<template>
  <div class="container mb-5">
    <div class="row">
      <div class="col-md-6">
        <h3 class="fw-bold mb-4">E'lonlar</h3>
        <div class="cards">
          <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="../../assets/istockphoto-1386452720-612x612.jpg" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <router-link class="custom-link" to="/announcement-detail/1"><h5 class="card-title fw-bold">Lorem
                    ipsum
                    dolor
                    sit amet, consectetur adipisicing.</h5></router-link>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.</p>
                  <div class="card-footers">
                    <div class="eyes">
                      <i class="fa-solid fa-eye"></i><span class="times"> 109</span>
                    </div>
                    <div>
                      <i class="fa-solid fa-calendar"></i>
                      <span><time class="times"> {{ currentDate }}.{{ currentMonth }}.{{ currentYear }}</time></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr>
          <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="../../assets/istockphoto-1366724877-612x612.jpg" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <router-link class="custom-link" to="/announcement-detail/1"><h5 class="card-title fw-bold">Lorem
                    ipsum
                    dolor
                    sit amet, consectetur adipisicing.</h5></router-link>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.</p>
                  <div class="card-footers">
                    <div class="eyes">
                      <i class="fa-solid fa-eye"></i><span class="times"> 109</span>
                    </div>
                    <div>
                      <i class="fa-solid fa-calendar"></i>
                      <span><time class="times"> {{ currentDate }}.{{ currentMonth }}.{{ currentYear }}</time></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr>
          <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="../../assets/istockphoto-1447889494-612x612.jpg" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <router-link class="custom-link" to="/announcement-detail/1"><h5 class="card-title fw-bold">Lorem
                    ipsum
                    dolor
                    sit amet, consectetur adipisicing.</h5></router-link>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.</p>
                  <div class="card-footers">
                    <div class="eyes">
                      <i class="fa-solid fa-eye"></i><span class="times"> 109</span>
                    </div>
                    <div>
                      <i class="fa-solid fa-calendar"></i>
                      <span><time class="times"> {{ currentDate }}.{{ currentMonth }}.{{ currentYear }}</time></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr>
        </div>
        <div class="text-center mt-4">
          <button @click="$router.push('announcementView')" style="background-color: #FDC800;
                  color: black; width: 150px; border-radius: 5px;
                  border:none;margin-top: 10px; padding: 12px 20px;" class="btn btn-success fw-bold">Batafsil
          </button>
        </div>

      </div>
      <div class="col-md-6">
        <h3 class="fw-bold mb-4">Konferinsiyalar</h3>

        <div class="card mb-3 card2" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-md-3">
              <div class="card-box">
                <span class="dot spot1"></span>
                <span class="dot spot2"></span>
                <h5 class="fw-bold dayss">14</h5>
                <p>yanvar</p>
              </div>
            </div>
            <div class="col-md-9">
              <div class="card-body">
                <router-link class="custom-link" to="/confrences-detail/1">
                  <h5 class="card-title">Card title</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, libero?</p>
                </router-link>
                <div class="card-footers">
                  <div class="eyes">
                    <i class="fa-solid fa-eye"></i><span class="times"> 109</span>
                  </div>
                  <div>
                    <i class="fa-solid fa-calendar"></i>
                    <span><time class="times"> {{ currentDate }}.{{ currentMonth }}.{{ currentYear }}</time></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3 card2" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-md-3">
              <div class="card-box">
                <span class="dot spot1"></span>
                <span class="dot spot2"></span>
                <h5 class="fw-bold dayss">14</h5>
                <p>yanvar</p>
              </div>
            </div>
            <div class="col-md-9">
              <div class="card-body">
                <router-link class="custom-link" to="/confrences-detail/1">
                  <h5 class="card-title">Card title</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, libero?</p>
                </router-link>
                <div class="card-footers">
                  <div class="eyes">
                    <i class="fa-solid fa-eye"></i><span class="times"> 109</span>
                  </div>
                  <div>
                    <i class="fa-solid fa-calendar"></i>
                    <span><time class="times"> {{ currentDate }}.{{ currentMonth }}.{{ currentYear }}</time></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3 card2" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-md-3">
              <div class="card-box">
                <span class="dot spot1"></span>
                <span class="dot spot2"></span>
                <h5 class="fw-bold dayss">14</h5>
                <p>yanvar</p>
              </div>
            </div>
            <div class="col-md-9">
              <div class="card-body">
                <router-link class="custom-link" to="/confrences-detail/1">
                  <h5 class="card-title">Card title</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, libero?</p>
                </router-link>
                <div class="card-footers">
                  <div class="eyes">
                    <i class="fa-solid fa-eye"></i><span class="times"> 109</span>
                  </div>
                  <div>
                    <i class="fa-solid fa-calendar"></i>
                    <span><time class="times"> {{ currentDate }}.{{ currentMonth }}.{{ currentYear }}</time></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3 card2" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-md-3">
              <div class="card-box">
                <span class="dot spot1"></span>
                <span class="dot spot2"></span>
                <h5 class="fw-bold dayss">14</h5>
                <p>yanvar</p>
              </div>
            </div>
            <div class="col-md-9">
              <div class="card-body">
                <router-link class="custom-link" to="/confrences-detail/1">
                  <h5 class="card-title">Card title</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, libero?</p>
                </router-link>
                <div class="card-footers">
                  <div class="eyes">
                    <i class="fa-solid fa-eye"></i><span class="times"> 109</span>
                  </div>
                  <div>
                    <i class="fa-solid fa-calendar"></i>
                    <span><time class="times"> {{ currentDate }}.{{ currentMonth }}.{{ currentYear }}</time></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-4">
          <button @click="$router.push('confrences')" style="background-color: #FDC800;
                  color: black; width: 150px; border-radius: 5px;
                  border:none;margin-top: 10px; padding: 12px 20px;" class="btn btn-success fw-bold">Batafsil
          </button>
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
.cards {
  background-color: #F6F9F8;
  border-radius: 15px;
  padding: 25px;
}

.card {
  background-color: transparent;
  border: none;
}

.card-body {
  padding: 0px 20px;
}

.card-footers {
  display: flex;
}

.eyes {
  margin-right: 20px;
}

.img-fluid {
  height: 192px;
  border-radius: 5px;
  display: block;
  width: 100%;
}

.buttons {
  background-color: #002147;
  color: white;
  padding: 12px 40px;
  font-weight: bold;
  border-radius: 10px;
}

.buttons:hover {
  background-color: blue;
  color: #FDC800;
}


.card2 {
  padding: 25px;
  background-color: #F6F9F8;
  border-radius: 15px;
}

.card-box {
  background-color: #FDC800;
  width: 120px;
  height: 120px;
  text-align: center;
  position: absolute;
  border-radius: 10px;
}

.dot {
  height: 10px;
  width: 10px;
  background-color: white;
  border-radius: 50%;
  display: inline-block;
}

.spot1 {
  position: relative;
  left: -30px;
  top: 0px;
}

.spot2 {
  position: relative;
  left: 30px;
  top: 0px;
}

.dayss {
  margin-bottom: 0px;
  margin-top: 15px;
}

.custom-link {
  color: black;
  text-decoration: none;
  transition: color 0.3s;
}

.custom-link:hover {
  color: #0056b3;
}
</style>
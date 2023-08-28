<template>
  <div class="col-md-12">
    <h3 class="fw-bold mb-5 text-center">Konferensiyalar</h3>
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-2" style="height: 120px;">
          <div class="card-box">
            <span class="dot spot1"></span>
            <span class="dot spot2"></span>
            <h5 class="fw-bold dayss">14</h5>
            <p>yanvar</p>
          </div>
        </div>
        <div class="col-md-10">
          <div class="card-body">
            <router-link class="custom-link" to="/confrences-detail/1">
              <h5 class="card-title">Card title</h5>
              <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dolore est
                fugit harum minima
                molestiae nostrum obcaecati perferendis temporibus? Distinctio!</p>
            </router-link>
            <div class="card-footers pb-3 pt-0">
                <div class="d-flex">
                    <div class="px-2">
                        <i class="fas fa-share"></i>
                        <span><time class="times">123</time></span>
                    </div>
                    <div>
                        <i class="fa-solid fa-calendar"></i>
                        <span><time class="times"> {{ currentDate }}.{{ currentMonth }}.{{ currentYear }}</time></span>
                    </div>
                </div>
                <div>
                    <button @click="$router.push('/confrences-detail/1')" style="background-color: #FDC800;
                  color: black; width: 110px; border-radius: 5px;
                  border:none; padding: 8px;" class="btn btn-success fw-bold">Batafsil</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div class="card mb-3">
          <div class="row g-0">
              <div class="col-md-2" style="height: 120px;">
                  <div class="card-box">
                      <span class="dot spot1"></span>
                      <span class="dot spot2"></span>
                      <h5 class="fw-bold dayss">14</h5>
                      <p>yanvar</p>
                  </div>
              </div>
              <div class="col-md-10">
                  <div class="card-body">
                      <router-link class="custom-link" to="/confrences-detail/1">
                          <h5 class="card-title">Card title</h5>
                          <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dolore est
                              fugit harum minima
                              molestiae nostrum obcaecati perferendis temporibus? Distinctio!</p>
                      </router-link>
                      <div class="card-footers pb-3 pt-0">
                          <div class="d-flex">
                              <div class="px-2">
                                  <i class="fas fa-share"></i>
                                  <span><time class="times">123</time></span>
                              </div>
                              <div>
                                  <i class="fa-solid fa-calendar"></i>
                                  <span><time class="times"> {{ currentDate }}.{{ currentMonth }}.{{ currentYear }}</time></span>
                              </div>
                          </div>
                          <div>
                              <button @click="$router.push('/confrences-detail/1')" style="background-color: #FDC800;
                  color: black; width: 110px; border-radius: 5px;
                  border:none; padding: 8px;" class="btn btn-success fw-bold">Batafsil</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="card mb-3">
          <div class="row g-0">
              <div class="col-md-2" style="height: 120px;">
                  <div class="card-box">
                      <span class="dot spot1"></span>
                      <span class="dot spot2"></span>
                      <h5 class="fw-bold dayss">14</h5>
                      <p>yanvar</p>
                  </div>
              </div>
              <div class="col-md-10">
                  <div class="card-body">
                      <router-link class="custom-link" to="/confrences-detail/1">
                          <h5 class="card-title">Card title</h5>
                          <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dolore est
                              fugit harum minima
                              molestiae nostrum obcaecati perferendis temporibus? Distinctio!</p>
                      </router-link>
                      <div class="card-footers pb-3 pt-0">
                          <div class="d-flex">
                              <div class="px-2">
                                  <i class="fas fa-share"></i>
                                  <span><time class="times">123</time></span>
                              </div>
                              <div>
                                  <i class="fa-solid fa-calendar"></i>
                                  <span><time class="times"> {{ currentDate }}.{{ currentMonth }}.{{ currentYear }}</time></span>
                              </div>
                          </div>
                          <div>
                              <button @click="$router.push('/confrences-detail/1')" style="background-color: #FDC800;
                  color: black; width: 110px; border-radius: 5px;
                  border:none; padding: 8px;" class="btn btn-success fw-bold">Batafsil</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="card mb-3">
          <div class="row g-0">
              <div class="col-md-2" style="height: 120px;">
                  <div class="card-box">
                      <span class="dot spot1"></span>
                      <span class="dot spot2"></span>
                      <h5 class="fw-bold dayss">14</h5>
                      <p>yanvar</p>
                  </div>
              </div>
              <div class="col-md-10">
                  <div class="card-body">
                      <router-link class="custom-link" to="/confrences-detail/1">
                          <h5 class="card-title">Card title</h5>
                          <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dolore est
                              fugit harum minima
                              molestiae nostrum obcaecati perferendis temporibus? Distinctio!</p>
                      </router-link>
                      <div class="card-footers pb-3 pt-0">
                          <div class="d-flex">
                              <div class="px-2">
                                  <i class="fas fa-share"></i>
                                  <span><time class="times">123</time></span>
                              </div>
                              <div>
                                  <i class="fa-solid fa-calendar"></i>
                                  <span><time class="times"> {{ currentDate }}.{{ currentMonth }}.{{ currentYear }}</time></span>
                              </div>
                          </div>
                          <div>
                              <button @click="$router.push('/confrences-detail/1')" style="background-color: #FDC800;
                  color: black; width: 110px; border-radius: 5px;
                  border:none; padding: 8px;" class="btn btn-success fw-bold">Batafsil</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="card mb-3">
          <div class="row g-0">
              <div class="col-md-2" style="height: 120px;">
                  <div class="card-box">
                      <span class="dot spot1"></span>
                      <span class="dot spot2"></span>
                      <h5 class="fw-bold dayss">14</h5>
                      <p>yanvar</p>
                  </div>
              </div>
              <div class="col-md-10">
                  <div class="card-body">
                      <router-link class="custom-link" to="/confrences-detail/1">
                          <h5 class="card-title">Card title</h5>
                          <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dolore est
                              fugit harum minima
                              molestiae nostrum obcaecati perferendis temporibus? Distinctio!</p>
                      </router-link>
                      <div class="card-footers pb-3 pt-0">
                          <div class="d-flex">
                              <div class="px-2">
                                  <i class="fas fa-share"></i>
                                  <span><time class="times">123</time></span>
                              </div>
                              <div>
                                  <i class="fa-solid fa-calendar"></i>
                                  <span><time class="times"> {{ currentDate }}.{{ currentMonth }}.{{ currentYear }}</time></span>
                              </div>
                          </div>
                          <div>
                              <button @click="$router.push('/confrences-detail/1')" style="background-color: #FDC800;
                  color: black; width: 110px; border-radius: 5px;
                  border:none; padding: 8px;" class="btn btn-success fw-bold">Batafsil</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="card mb-3">
          <div class="row g-0">
              <div class="col-md-2" style="height: 120px;">
                  <div class="card-box">
                      <span class="dot spot1"></span>
                      <span class="dot spot2"></span>
                      <h5 class="fw-bold dayss">14</h5>
                      <p>yanvar</p>
                  </div>
              </div>
              <div class="col-md-10">
                  <div class="card-body">
                      <router-link class="custom-link" to="/confrences-detail/1">
                          <h5 class="card-title">Card title</h5>
                          <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dolore est
                              fugit harum minima
                              molestiae nostrum obcaecati perferendis temporibus? Distinctio!</p>
                      </router-link>
                      <div class="card-footers pb-3 pt-0">
                          <div class="d-flex">
                              <div class="px-2">
                                  <i class="fas fa-share"></i>
                                  <span><time class="times">123</time></span>
                              </div>
                              <div>
                                  <i class="fa-solid fa-calendar"></i>
                                  <span><time class="times"> {{ currentDate }}.{{ currentMonth }}.{{ currentYear }}</time></span>
                              </div>
                          </div>
                          <div>
                              <button @click="$router.push('/confrences-detail/1')" style="background-color: #FDC800;
                  color: black; width: 110px; border-radius: 5px;
                  border:none; padding: 8px;" class="btn btn-success fw-bold">Batafsil</button>
                          </div>
                      </div>
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
.custom-link {
  color: black;
  text-decoration: none;
  transition: color 0.3s;
}

.custom-link:hover {
  color: #0056b3;
}

.card {
  border: none;
  padding: 20px;
  background-color: #F6F9F8;
  border-radius: 15px;
  height: 170px;
}

.card-body {
  padding: 0px 20px;
}

.card-footers {
  display: flex;
    justify-content: space-between;
    align-items:center;
}

.eyes {
  margin-right: 20px;
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
</style>
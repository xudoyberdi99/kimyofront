<template>
<!--    <section v-show="visible" id="navbar" class="sticky-menu sticky" v-on:scroll="handleScroll">-->

        <div class="container menu">
            <hr>
            <div class="row">
                <div class="col-md-4 d-flex align-items-center p-0">
                    <a class="navbar-brand p-0" href="/">
                        <img src="@/assets/logo-kimyo-tex.png" alt="" width="80" height="80">
                    </a>
                    <span class="fw-bold text-uppercase mr-auto"> Toshkent kimyo-texnalogiyalari instituti yangiyer filiali</span>
                </div>
                <div class="col-md-8 p-0">
                    <div class="d-flex justify-content-end mt-3">
<!--                        <ul class="nav menu-nav">-->
<!--                            <li class="nav-item active"><RouterLink class="nav-link" :to="{name:'home'}">Bosh sahifa</RouterLink></li>-->
<!--                            <li class="nav-item dropdown"><RouterLink class="nav-link" :to="{name:'home'}">-->
<!--                              <a class="dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">-->
<!--                                Institut tuzilmasi-->
<!--                              </a>-->
<!--                              <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">-->
<!--                                <li><a class="dropdown-item" href="#">Institut haqida</a></li>-->
<!--                                <li><a class="dropdown-item" href="#">Matbuot bo’limi</a></li>-->
<!--                                <li><a class="dropdown-item" href="#">Institut kengashi</a></li>-->
<!--                                <li><a class="dropdown-item" href="#">Kuzatuv kengashi</a></li>-->
<!--                                <li><a class="dropdown-item" href="#">Ilmiy jurnallar</a></li>-->
<!--                                <li><a class="dropdown-item" href="#">Me'yoriy hujjatlar</a></li>-->
<!--                              </ul>-->
<!--                            </RouterLink></li>-->
<!--                            <li class=" nav-item "><RouterLink class="nav-link" :to="{name:'about'}">Tuzilma</RouterLink></li>-->
<!--                            <li class=" nav-item "><RouterLink class="nav-link" :to="{name:'about'}">Faoliyat</RouterLink></li>-->
<!--                            <li class=" nav-item "><RouterLink class="nav-link" :to="{name:'about'}">Talaba</RouterLink></li>-->
<!--                            <li class=" nav-item "><RouterLink class="nav-link" :to="{name:'about'}">Abiturient</RouterLink></li>-->
<!--                        </ul>-->
                      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                      <el-menu-item index="1">Bosh sahifa</el-menu-item>
                        <el-submenu index="2">
                        <template slot="title">Institut tuzilmasi</template>
                        <el-submenu index="2-1">
                          <template slot="title">Institut haqida</template>
                          <el-menu-item index="2-1-1">Umumiy ma’lumot</el-menu-item>
                          <el-menu-item index="2-1-2">Institut nizomi</el-menu-item>
                          <el-menu-item index="2-1-3">Institut sertifikatlari</el-menu-item>
                          <el-menu-item index="2-1-4">Ichki tartib qoidalar</el-menu-item>
                          <el-menu-item index="2-1-5">O’quv binolari</el-menu-item>
                          <el-menu-item index="2-1-6">Muzey</el-menu-item>
                          <el-menu-item index="2-1-7">Talabalar turar joylari</el-menu-item>
                        </el-submenu>
                        <el-submenu index="2-2">
                          <template slot="title">Matbuot bo’limi</template>
                          <el-menu-item index="2-2-1">Yangiliklar</el-menu-item>
                          <el-menu-item index="2-2-2">E’lonlar</el-menu-item>
                          <el-menu-item index="2-2-4">Fotogalereya</el-menu-item>
                          <el-menu-item index="2-2-5">Videogalereya</el-menu-item>
                        </el-submenu>
                        <el-submenu index="2-3">
                          <template slot="title">Institut kengashi</template>
                          <el-menu-item index="2-3-1">Ilmiy kengash to'g'risida nizom</el-menu-item>
                          <el-menu-item index="2-3-2">Ilmiy kengash tarkibi</el-menu-item>
                          <el-menu-item index="2-3-4">Ilmiy kengash kun tartibi</el-menu-item>
                          <el-menu-item index="2-3-5">Ilmiy kengash tarqatma materiallari</el-menu-item>
                          <el-menu-item index="2-3-6">Ilmiy kengash qarorlari</el-menu-item>
                        </el-submenu>

                        <el-submenu index="2-4">
                          <template slot="title">Institut kengashi</template>
                          <el-menu-item index="2-4-1">Ilmiy kengash to'g'risida nizom</el-menu-item>
                          <el-menu-item index="2-4-2">Ilmiy kengash tarkibi</el-menu-item>
                          <el-menu-item index="2-4-4">Ilmiy kengash kun tartibi</el-menu-item>
                          <el-menu-item index="2-4-5">Ilmiy kengash tarqatma materiallari</el-menu-item>
                          <el-menu-item index="2-4-6">Ilmiy kengash qarorlari</el-menu-item>
                        </el-submenu>
                        <el-submenu index="2-5">
                          <template slot="title">Kuzatuv kengashi</template>
                          <el-menu-item index="2-5-1">Kuzatuv kengashi nizomi</el-menu-item>
                          <el-menu-item index="2-5-2">Kuzatuv kengashi tarkibi</el-menu-item>
                          <el-menu-item index="2-5-4">Kuzatuv kengashi kun tartibi</el-menu-item>
                          <el-menu-item index="2-5-5">Kuzatuv kengashi tarqatma materiallari</el-menu-item>
                          <el-menu-item index="2-5-6">Kuzatuv kengashi qarorlari</el-menu-item>
                        </el-submenu>
                      </el-submenu>
                        <el-menu-item index="3">AboutUs</el-menu-item>
                      </el-menu>

                    </div>
                </div>
            </div>
        </div>
<!--    </section>-->
</template>

<script>
export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.menu {
    height: 130px;
}
.item {
    font-size: 12px;
    font-weight:600;
    text-transform: uppercase;
}
.nav-link {
    color: black;
}
.nav-link:hover{
    color:green;

}
.sticky-menu {
    display: none;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    z-index: 11;
    animation: 300ms ease-in-out 0s 1 normal none running fadeInDown;
    background: rgb(255, 255, 255);
    height: 120px;
    padding-top: 18px;
    box-shadow: rgb(34 34 34) 0px 0px 20px -10px;
}
.sticky {
    display: block;
}
</style>
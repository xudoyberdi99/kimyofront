<template>
  <!--    <section v-show="visible" id="navbar" class="sticky-menu sticky" v-on:scroll="handleScroll">-->

  <div class="container menu">
    <hr>
    <div class="row">
      <div class="col-md-3 d-flex align-items-center p-0">
        <a class="navbar-brand p-0" href="/">
          <img src="@/assets/logo-kimyo-tex.png" alt="" width="100" height="90">
        </a>
        <span class="fw-bold text-uppercase mr-auto"> Toshkent kimyo-texnalogiyalari instituti yangiyer filiali</span>
      </div>
      <div class="col-md-9 p-0">
        <div class="d-flex justify-content-end mt-3">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <!--                      <el-menu-item index="1">Bosh sahifa</el-menu-item>-->

            <el-submenu index="2">
              <template slot="title">Yangiliklar</template>
              <el-menu-item index="2-1">E’lonlar</el-menu-item>
              <el-menu-item index="2-2">Tadbirlar</el-menu-item>
              <el-menu-item index="2-3">Videoroliklar</el-menu-item>
              <el-menu-item index="2-4">Ijtimoiy tarmoqlardagi sahifalarimiz</el-menu-item>
            </el-submenu>

            <el-submenu index="3">
              <template slot="title">Umumiy ma’lumotlar</template>
              <el-menu-item index="3-1">Filial haqida</el-menu-item>
              <el-menu-item index="3-2">Filial nizomi</el-menu-item>
              <el-menu-item index="3-3">Tuzilma</el-menu-item>
              <el-menu-item index="3-4">Me’yoriy hujjatlar</el-menu-item>
              <el-menu-item index="3-5">Rekvizitlar</el-menu-item>
              <el-menu-item index="3-5">Direktor virtual qabulxonasi</el-menu-item>
              <el-menu-item index="3-6">Ochiq ma’lumotlar</el-menu-item>
              <el-menu-item index="3-7">Bo‘sh ish o‘rinlari</el-menu-item>
              <el-menu-item index="3-8">Korrupsiyaga qarshi kurashish</el-menu-item>
              <el-menu-item index="3-9">Manzilimiz</el-menu-item>
              <el-menu-item index="3-10">Qayta aloqa</el-menu-item>
            </el-submenu>

            <el-submenu index="4">
              <template slot="title">Tuzilma</template>
              <el-menu-item index="4-1">Rahbariyat</el-menu-item>
              <el-submenu index="4-2">
                <template slot="title">Markaz, bo‘lim va boshqarmalar</template>
                <el-menu-item index="4-2-1">Raqamli texnologiyalar markazi</el-menu-item>
                <el-menu-item index="4-2-2">Axborot-resurs markazi</el-menu-item>
                <el-menu-item index="4-2-3">Matbuot xizmati</el-menu-item>
                <el-menu-item index="4-2-4">O‘quv-uslubiy bo‘lim</el-menu-item>
                <el-menu-item index="4-2-5">Sirtqi bo‘lim</el-menu-item>
                <el-menu-item index="4-2-6">Jismoniy va yuridik shaxslarning murojaatlari bilan ishlash, nazorat va
                  monitoring bo‘limi
                </el-menu-item>
                <el-menu-item index="4-2-7">Devonxona va arxiv</el-menu-item>
                <el-menu-item index="4-2-8">Ta’lim sifatini nazorat qilish bo‘limi</el-menu-item>
                <el-menu-item index="4-2-9">Yoshlar bilan ishlash, ma’naviyat va ma‘rifat bo‘limi</el-menu-item>
                <el-menu-item index="4-2-10">Yoshlar ittifoqi</el-menu-item>
                <el-menu-item index="4-2-11">Reja moliya bo‘limi</el-menu-item>
                <el-menu-item index="4-2-12">Buxgalteriya</el-menu-item>
                <el-menu-item index="4-2-13">Xalqaro hamkorlik bo‘limi</el-menu-item>
                <el-menu-item index="4-2-14">Marketing va talabalar amaliyoti bo‘limi</el-menu-item>
                <el-menu-item index="4-2-15">Xodimlar bo‘limi</el-menu-item>
                <el-menu-item index="4-2-16">Psixolog</el-menu-item>
                <el-menu-item index="4-2-17">Talabalarni turar joy bilan ta‘minlash ishlarini muvofiqlashtiruvchi
                  bo‘limi
                </el-menu-item>
                <el-menu-item index="4-2-18">Ilmiy tadqiqot, ilmiy-pedagog kadrlar tayyorlash sektori</el-menu-item>
                <el-menu-item index="4-2-19">Iqtidorli talabalarning ilmiy-tadqiqot faoliyatini tashkil etish sektori
                </el-menu-item>
                <el-menu-item index="4-2-20">Ilmiy-innovatsion ishlanmalarni tijoratlashtirish bo‘limi</el-menu-item>
                <el-menu-item index="4-2-21">Ishlar boshqarmasi</el-menu-item>
                <el-menu-item index="4-2-22">Texnik foydalanish va xo‘jalik bo‘limi</el-menu-item>
                <el-menu-item index="4-2-23">O‘qitishning texnik vositalari bo‘limi</el-menu-item>
                <el-menu-item index="4-2-24">Fuqaro va mehnat muhofazasi bo‘limi</el-menu-item>
                <el-menu-item index="4-2-25">Bosh auditor</el-menu-item>
                <el-menu-item index="4-2-26">Yuristkonsult</el-menu-item>
                <el-menu-item index="4-2-27">Birinchi va ikkinchi bo‘lim</el-menu-item>
              </el-submenu>
              <el-menu-item index="4-3">Filial kengashi</el-menu-item>
              <el-menu-item index="4-4">Vasiylik kengashi</el-menu-item>
              <el-submenu index="4-5">
                <template slot="title">Fakultetlar</template>
                <el-menu-item index="4-5-1">Noorganik moddalar kimyoviy texnologiyasi fakulteti</el-menu-item>
              </el-submenu>
              <el-submenu index="4-6">
                <template slot="title">Kafedralar</template>
                <el-menu-item index="4-6-1">Umumiy fanlar kafedrasi</el-menu-item>
                <el-menu-item index="4-6-2">Avtomatika va texnologik jarayonlar kafedrasi</el-menu-item>
                <el-menu-item index="4-6-3">Kimyoviy texnologiya kafedrasi</el-menu-item>
                <el-menu-item index="4-6-4">Oziq-ovqat texnologiyalari kafedrasi</el-menu-item>
              </el-submenu>
            </el-submenu>

            <el-submenu index="5">
              <template slot="title">Faoliyat</template>
              <el-submenu index="5-1">
                <template slot="title">O‘quv faoliyati</template>
                <el-menu-item index="5-1-1">O‘quv grafigi</el-menu-item>
                <el-menu-item index="5-1-2">O‘quv rejalari</el-menu-item>
                <el-menu-item index="5-1-3">O‘quv qoidalari</el-menu-item>
              </el-submenu>
              <el-submenu index="5-2">
                <template slot="title">Ilmiy faoliyat</template>
                <el-menu-item index="5-2-1">Ilmiy va innovatsion faoliyatni tartibga soluvchi asosiy huquqiy-me’yoriy
                  hujjatlar
                </el-menu-item>
                <el-menu-item index="5-2-2">Ilmiy kengash</el-menu-item>
                <el-menu-item index="5-2-3">Konferensiya va seminarlar</el-menu-item>
                <el-menu-item index="5-2-4">Ilmiy jurnallar</el-menu-item>
                <el-menu-item index="5-2-5">Dissertatsiyalar himoyasi va avtoreferatlari</el-menu-item>
                <el-menu-item index="5-2-6">Iqtidorli talabalar va nomdor stipendiatlar</el-menu-item>
              </el-submenu>
              <el-submenu index="5-3">
                <template slot="title">Moliyaviy faoliyat</template>
                <el-menu-item index="5-3-1">Byudjet mablag‘lari</el-menu-item>
                <el-menu-item index="5-3-2">Davlat haridlari to‘g‘risida ma’lumot</el-menu-item>
                <el-menu-item index="5-3-3">Shartnomalar</el-menu-item>
                <el-menu-item index="5-3-4">Moliyaviy ko‘rsatkichlar</el-menu-item>
                <el-menu-item index="5-3-5">To‘lov-kontrakt asosidagi ta‘lim mablag‘lari</el-menu-item>
              </el-submenu>
              <el-menu-item index="5-4">Kasaba uyushmasi</el-menu-item>
              <el-menu-item index="5-5">Yoshlar ittifoqi</el-menu-item>
              <el-menu-item index="5-6">Xalqaro faoliyat</el-menu-item>
            </el-submenu>
            <el-submenu index="6">
              <template slot="title">Talabalarga</template>
              <el-menu-item index="6-1">Dars jadvali</el-menu-item>
              <el-menu-item index="6-2">Iqtidorli talabalar</el-menu-item>
              <el-menu-item index="6-3">To‘garaklar</el-menu-item>
              <el-menu-item index="6-4">Talabalik haqida ma’lumotnoma olish</el-menu-item>
              <el-menu-item index="6-4">Elektron kutubxona</el-menu-item>
            </el-submenu>
            <el-submenu index="7">
              <template slot="title">Abituriyentlarga</template>
              <el-menu-item index="7-1">Bakalavriat</el-menu-item>
              <el-menu-item index="7-2">O’tish ballari</el-menu-item>
              <el-menu-item index="7-3">Qabul kvotalari</el-menu-item>
              <el-menu-item index="7-4">Sirtqi bakalavriat</el-menu-item>
              <el-menu-item index="7-5">Magistratura</el-menu-item>
              <el-menu-item index="7-6">Call markazi</el-menu-item>
              <el-menu-item index="7-7">Qo‘shma ta‘lim dasturlari</el-menu-item>
            </el-submenu>
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
  font-weight: 600;
  text-transform: uppercase;
}

.nav-link {
  color: black;
}

.nav-link:hover {
  color: green;

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
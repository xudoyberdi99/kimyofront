<template>
  <div class="container menu">
    <hr>
    <div class="row menu-main__wrapper">
      <div class="col-md-3 d-flex align-items-center p-0 logos">
        <a class="navbar-brand p-0" href="/">
          <img src="@/assets/logo-kimyo-tex.png" alt="" width="100" height="90">
        </a>
        <span class="fw-bold text-uppercase mr-auto"> Toshkent kimyo-texnalogiyalari instituti yangiyer filiali</span>
      </div>
      <div class="col-md-9 p-0 menus">
        <div class="d-flex justify-content-end mt-3">
          <el-menu  :default-active="activeIndex" class="el-menu-demo menuheader" mode="horizontal" @select="handleSelect">
            <el-submenu index="2">
              <template slot="title">Yangiliklar</template>
              <el-menu-item index="2-1">E’lonlar</el-menu-item>
              <el-menu-item index="2-2">So'ngi Yangiliklar
              </el-menu-item>
              <el-menu-item index="2-3">FotoGaleriya</el-menu-item>
            </el-submenu>

            <el-submenu  index="3">
              <template slot="title">Umumiy ma’lumotlar</template>
              <el-menu-item index="3-1">Filial haqida</el-menu-item>
              <el-menu-item index="3-2">Filial nizomi</el-menu-item>
              <el-menu-item index="3-4">Me’yoriy hujjatlar</el-menu-item>
              <el-menu-item index="3-5">Rekvizitlar</el-menu-item>
              <el-menu-item index="3-5">Direktor virtual qabulxonasi</el-menu-item>
              <el-menu-item index="3-6">Ochiq ma’lumotlar</el-menu-item>
              <el-menu-item index="3-7">Bo‘sh ish o‘rinlari</el-menu-item>
              <el-menu-item index="3-8">Korrupsiyaga qarshi kurashish</el-menu-item>
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
                <el-menu-item index="5-2-3">Konferensiyalar</el-menu-item>
                <el-menu-item index="5-2-4">Ilmiy jurnallar</el-menu-item>
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
              <el-menu-item index="6-4">Elektron kutubxona</el-menu-item>
              <el-menu-item index="6-4">Bitirgan Faxriylar</el-menu-item>
            </el-submenu>
            <el-submenu index="7">
              <template slot="title">Abituriyentlarga</template>
              <el-menu-item index="7-1">Bakalavriat</el-menu-item>
              <el-menu-item index="7-2">O’tish ballari</el-menu-item>
              <el-menu-item index="7-3">Qabul kvotalari</el-menu-item>
              <el-menu-item index="7-4">Sirtqi bakalavriat</el-menu-item>
              <el-menu-item index="7-5">Magistratura</el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
      </div>
    </div>
  </div>
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


@media only screen and (max-width:1200px){
  .logos {
    width: 300px;
  }
  .menuheader{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .menu{
    margin-bottom: 50px;
  }
  .menus {
    max-width: 60%;
  }
  .menu-main__wrapper{
    display: flex;
   align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
  }

}
@media only screen and (max-width:790px){
  .logos{
    width: 100%;
  }

.menu-main__wrapper{
  flex-direction: column;
}
  .menus {
    max-width: 100%;
  }
}
@media only screen and (max-width:576px){
.menu , .logos{
  width: 90%;
}

}
</style>
<template>
  <div id="app">
      <el-container>
          <el-header>
              <Headers></Headers>
          </el-header>
              <Sitenav></Sitenav>
          <el-main>
            <RouterView></RouterView>
          </el-main>
          <el-footer>
              <Footers></Footers>
          </el-footer>
      </el-container>
  </div>
</template>

<script>
import Headers from "@/layout/Headers.vue";
import Footers from "@/layout/Footers.vue";
import Sitenav from '@/layout/Sitenav.vue';
import HomeView from "@/views/HomeView.vue";
export default {
  components :{
      HomeView,
      Headers,
      Footers,
      Sitenav,
  }
}
</script>

<style>
*{
    box-sizing: border-box;
    margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

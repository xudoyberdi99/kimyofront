<template>
  <div id="app">
      <el-container>
          <el-header>
              <Headers></Headers>
          </el-header>

          <el-main>
              <p>wpingleromigfk</p>
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
export default {
  components :{
      Headers,
      Footers
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
  text-align: center;
  color: #2c3e50;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
}
.el-header {
    background-color: white;
    color: #333;
    text-align: center;
    line-height: 60px;
}
.el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
}
</style>

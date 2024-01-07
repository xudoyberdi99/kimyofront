<template>
  <div class="nor-hujjat">
    <div class="file-title">Dars Jadvallari</div>
    <div class="content">
      <div class="file-content">
        <p class="text mb-0">Fan texnika faoliyati Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore</p>
        <div class="link">
          <a  href="https://lex.uz/uz/search/ext?okoz=7341" target="_blank">
            <img class="buttons" style="padding: 10px" src="../assets/download-pdf.png">
          </a>
        </div>
      </div>
      <div class="file-content">
        <p class="text mb-0">Fan texnika faoliyati Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore</p>
        <div class="link">
          <a  href="https://lex.uz/uz/search/ext?okoz=7341" target="_blank">
            <img class="buttons" style="padding: 10px" src="../assets/download-pdf.png">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.file-title {
  text-align: center;
  font-size: 34px;
  font-weight: 700;
  margin-bottom: 20px;
  font-family: sans-serif;
}
.content {
  margin-top: 20px;
  font-family: serif;
}
.file-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  margin-top: 25px;
  background-color: #f6f9f8;
  border: 2px solid #dbd8d8;
  width: 90%;
  box-sizing: border-box;
  padding: 10px 20px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

}
.file-content:hover {
  transition: all 0.8s ease-out;
  transform: translateY(-5px);
}
.text {
  font-size: 22px;
  font-weight: normal;
}
.link {
  margin-left: 20px;
}
.buttons:hover {
  transition: all 0.5s ease-out;
  transform: scale(1.5);
}
</style>
<script setup>
</script>
<template>
    <div class="header-menu container">
          <div class="address-style">
              <span class="address"><i class="fa-solid fa-map"></i>  Amir temur ko'chasi 103-uy</span>

              <span class="address"><i class="fa fa-envelope iconssty" aria-hidden="true"></i> tktiyf_info@mail.ru, info@tktiyf.uz</span>
            <span class="phoneNumber"><i class="el-icon-phone">+998-95-511-58-56</i></span>

        </div>
        <div >
            <el-select class="langu" v-model="value" placeholder="Select">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
        </div>
    </div>
</template>

<script>
export default {
name:'Headers',
    data() {
        return {
            options: [{
                value: 'Option1',
                label: 'English'
            }, {
                value: 'Option2',
                label: 'Uzbek'
            }, {
                value: 'Option3',
                label: 'Russian'
            }],
            value: 'Uzbek'
        }
    }
}
</script>

<style scoped>
.header-menu{
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}
.iconssty {
    margin-right: 5px;
    margin-left: 15px;
}
.el-icon-phone {
    margin-left: 15px;
}
.langu-menu {
    position: absolute;
}
.lan-icon{
    position: relative;
    top: 10px;
    left: -50px;
}

@media only screen and (max-width:1000px){
  .address {
    display: none;
  }
}
@media only screen and (max-width:500px){
  .langu {
    width: 100px;
  }
}
</style>
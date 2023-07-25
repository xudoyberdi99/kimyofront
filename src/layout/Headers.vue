<template>
    <div class="header-menu container">
          <div class="address-style">
              <i class="fa-solid fa-map"></i><span> Amir temur ko'chasi 103-uy</span>
              <i class="fa fa-envelope iconssty" aria-hidden="true"></i>
              <span> test@gmail.com</span>
              <i class="el-icon-phone"> (998)939044444</i>
        </div>
        <div >
           <span class="langu-menu"> <i class="fa fa-language fa-2x lan-icon" aria-hidden="true"></i></span>
            <el-select v-model="value" placeholder="Select">
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
</style>
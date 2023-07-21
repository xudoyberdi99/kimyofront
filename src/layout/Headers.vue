<template>
    <div class="footer-menu">
          <div class="address-style">
              <i class="el-icon-map-location">Amir temur ko'chasi 103-uy</i>
              <i class="fa fa-envelope iconssty" aria-hidden="true"></i>
              <span class="ndnd">test@gmail.com</span>
              <i class="el-icon-phone">(998)939044444</i>
        </div>
        <div>
                <i class="fa fa-language fa-2x" aria-hidden="true"></i>
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
                label: 'Option1'
            }, {
                value: 'Option2',
                label: 'Option2'
            }, {
                value: 'Option3',
                label: 'Option3'
            }],
            value: ''
        }
    }
}
</script>

<style scoped>
.footer-menu{
    display: flex;
    justify-content: space-between;
}
.iconssty {
    margin-right: 5px;
    margin-left: 15px;
}
.el-icon-phone {
    margin-left: 15px;
}

</style>
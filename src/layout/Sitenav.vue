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
                        <ul class="nav menu-nav">
                            <li class=" nav-item active"><RouterLink class="nav-link" :to="{name:'home'}">Institut tuzilmasi</RouterLink></li>
                            <li class=" nav-item "><RouterLink class="nav-link" :to="{name:'about'}">Tuzilma</RouterLink></li>
                            <li class=" nav-item "><RouterLink class="nav-link" :to="{name:'about'}">Faoliyat</RouterLink></li>
                            <li class=" nav-item "><RouterLink class="nav-link" :to="{name:'about'}">Talaba</RouterLink></li>
                            <li class=" nav-item "><RouterLink class="nav-link" :to="{name:'about'}">Abiturient</RouterLink></li>
                        </ul>
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
            visible: false
        }
    },
    methods: {
        Home(){
            return this.$router.push('/')
        },
        handleScroll (event){
            this.visible = window.scrollY > 250 ? true : false
        },

    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
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
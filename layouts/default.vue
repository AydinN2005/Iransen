<template>
  <div>
    <div>
    <div class="c__container">
      <menu-comp @showPopup="openMenu"/>
    </div>
      <div :class="menuToggle ? 'animate_menu_container_open' : 'animate_menu_container_close'" class="menu_mobile">
        <div :class="menuToggle ? 'animate_menu_overlay_open' : 'animate_menu_overlay_close'" class="bk_overlay"></div>
        <div :class="menuToggle ? 'animate_menu_items_open' :  'animate_menu_items_close'" class="list_menu">
          <ul class="d-flex flex-column align-items-end padding_right_20 gap-30">
            <li class="d-flex justify_beetwen_important align-items-center width_100_percent">
              <v-btn class="login_btn" @click="goLogin">
                <span class="irandyekanM c__color-blue">ورود و ثبت‌نام</span>
              </v-btn>
              <svg @click="closeMenu" class="close_icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6L18 18" stroke="#020226" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18 6L6 18" stroke="#020226" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </li>
            <li v-for="(item , i) in categories" :key="i" @click="closeMenu">
              <router-link  exact :to="item.link" class="mobile_menu_link irandyekanM" active-class="active_link">
                {{item.title}}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    <nuxt/>
    <footer-comp/>
    </div>
  </div>
</template>
<script lang="ts">
import MenuComp from "~/components/menuComp.vue";
import {Component , Vue} from "nuxt-property-decorator";
@Component
export default class Default extends Vue{
  menuToggle : boolean = false
  categories : any = [
    {
      id : 0 ,
      title : 'صفحه اصلی' ,
      link : '/'
    } ,
    {
      id : 1 ,
      title : 'قرار داد هوشمند' ,
      link : 'smartContract'
    } ,
    {
      id : 2 ,
      title : 'بیمه کنندگان' ,
      link : 'insurers'
    } ,
    {
      id : 3 ,
      title : 'درباره‌ما' ,
      link : 'aboutUs'
    } ,
    {
      id : 4 ,
      title : 'تماس‌باما' ,
      link : 'contactUs'
    } ,
  ]
  openMenu(){
    this.menuToggle = true
    console.log('clicked on popup')
  }
  closeMenu(){
    this.menuToggle = false
  }
  goLogin(){
    this.$router.push({path : '/loginorRegister'})
  }
}
</script>
<style scoped>
.c__container {
  max-width: 1110px !important;
  margin: 0 auto;
  z-index: 1 !important;
}
.menu_mobile{
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  transform: translateY(-2000px);
}
.bk_overlay{
  display: block;
  width: 100%;
  height: 100vh;
  background-color: #000;
  opacity: 0.6;
  transform: translateY(-2000px);
}
.list_menu{
  display: block;
  width: 100%;
  border-radius: 0 0 10px 10px;
  background-color: #fff;
  position: absolute;
  top: 0;
  right: 0;
  padding: 20px 10px;
  /*transform: translateY(-200px);*/
}
.animate_menu_overlay_open{
  transform: translateY(0);
  transition: 0.5s;
}
.animate_menu_container_open{
  transform: translateY(0);
  transition: 0.5s;
}
.animate_menu_overlay_close{
  transform: translateY(-2000);
  transition: 1s;
}
.animate_menu_container_close{
  transform: translateY(-2000);
  transition: 1s;
}
.padding_right_20{
  padding-right: 20px;
}
.mobile_menu_link:hover{
  text-decoration: none !important;
}
.active_link{
  color: #2424B2 !important;
  position: relative;
  right: -20px;
}
.active_link:after{
  content: "";
  height: 2px;
  width: 16px;
  background-color: var(--hoverPurple);
  display: inline-block;
  position: relative;
  top: 10px;
  right: 20px;
}
.close_icon:hover{
  cursor: pointer;
}
.login__btn{
  background-color: unset !important;
  box-shadow: unset;
  color: var(--hoverPurple) !important;
  font-family: iranYekan;
  font-size: 14px;
}
.width_100_percent{
  width: 100%;
}
.justify_beetwen_important{
  justify-content: space-between !important;
}
</style>

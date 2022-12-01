<template>
<v-container>
  <h1 class="h1 c__h1 pr-5 irandyekanBB"> همکاران ما</h1>
  <carousel class="custom_slider" :responsive="{0 :{items : 1} , 370 : {items : 2} ,  959 : {items : 5}}" autoplay>
    <img v-for="img in images" :key="img.id"  :src="img.img" alt="" class="c__image">
  </carousel>
</v-container>
</template>

<script lang="ts">
import {Component , Vue} from "nuxt-property-decorator";
@Component
export default class Partners extends Vue{
  images : any = [
    {
      id : 0 ,
      img : require('../assets/List/Home Page/Company Logo-1.png')
    } ,
    {
      id : 1 ,
      img : require('../assets/List/Home Page/Company Logo-2.png')
    } ,
    {
      id : 2 ,
      img : require('../assets/List/Home Page/Company Logo-4.png')
    } ,
    {
      id : 3 ,
      img : require('../assets/List/Home Page/Company Logo-5.png')
    } ,
    {
      id : 4 ,
      img : require('../assets/List/Home Page/Company Logo-4.png')
    } ,
    {
      id : 5 ,
      img : require('../assets/List/Home Page/Company Logo-5.png')
    } ,
    {
      id : 6 ,
      img : require('../assets/List/Home Page/Company Logo-5.png')
    } ,
  ]
}
</script>

<style>
.custom_slider .owl-carousel{
  direction: ltr !important;
  display: flex !important;
  flex-direction: column-reverse !important;
}
.custom_slider .owl-dots{
  display: none;
}
.custom_slider .owl-nav{
  display: flex;
  justify-content: flex-start;
  padding-bottom: 20px;
}
.custom_slider .owl-prev , .owl-next {
  width: 40px;
  height: 40px;
  border-radius: 50% !important;
  border: 1px solid #D3D3F0 !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
}
.custom_slider .owl-prev span , .custom_slider .owl-next span{
  display: none;
}
.custom_slider .owl-prev::before{
  content: url("./assets/images/arrowleft.png");
}
.custom_slider .owl-next::before{
  content: url("./assets/images/arrowright.png");
}
.c__image{
  /*width: 100px !important;*/
  /*height: 72px !important;*/
  margin: 0 20px;
  filter: grayscale(1);
  transition: 0.3s;
  cursor: default;
}
.c__image:hover{
  filter: grayscale(0);
}
@media screen and (max-width: 767px) {
  .custom_slider .owl-nav{
    display: none !important;
  }
  .custom_slider{
    margin: 70px auto;
    margin-bottom: 0px !important;
  }
}
</style>

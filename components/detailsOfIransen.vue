<template>
  <v-container class="c__container">
    <h1 class="h1 c__h1 mt-15 pr-5 irandyekanBB">
      برخی ویژگی‌های ایراسن
    </h1>
    <v-container class="d-flex flex-wrap p-0 pt-5">
      <v-col class="visible_desktop" cols="4" :elevation="0" v-for="items in detailsData" :key="items.id">
        <v-card outlined class="d-flex flex-column c__rounded-padding">
          <div class="d-flex pr-5 align-items-center gap-10">
            <img :src="items.img" alt="">
            <h3 class="irandyekanBB16">{{items.title}}</h3>
          </div>
          <p class="text-right irandyekanMLine-1-8 irandyekanM w_80" >{{items.description}}</p>
        </v-card>
      </v-col>

      <v-col class="visible_mobile" cols="6" :elevation="0" v-for="items in detailsData" :key="items.id">
        <v-card outlined class="d-flex flex-column c__rounded-padding">
          <div class="d-flex pr-5 align-items-center gap-10">
            <img :src="items.img" alt="">
            <h3 class="irandyekanBB16">{{items.title}}</h3>
          </div>
          <p class="text-right irandyekanMLine-1-8 irandyekanM w_80" >{{items.description}}</p>
        </v-card>
      </v-col>

      <v-col class="visible_mobile__v_sm" cols="12" :elevation="0" v-for="items in detailsData" :key="items.id">
        <v-card outlined class="d-flex flex-column c__rounded-padding">
          <div class="d-flex pr-5 align-items-center gap-10">
            <img :src="items.img" alt="">
            <h3 class="irandyekanBB16">{{items.title}}</h3>
          </div>
          <p class="text-right irandyekanMLine-1-8 irandyekanM w_80" >{{items.description}}</p>
        </v-card>
      </v-col>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import {Component , Vue} from 'nuxt-property-decorator'
@Component
export default class DetailsOfIransen extends Vue{
  detailsData : any = [
    {
      id : 0 ,
      img : require('../assets/images/Shield.png') ,
      title : 'امنیت' ,
      description : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ' ,
    } ,
    {
      id : 1 ,
      img : require('../assets/images/typebime.png') ,
      title : 'تنوع بیمه' ,
      description : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ' ,
    } ,
    {
      id : 2 ,
      img :  require('../assets/images/jobran.png') ,
      title : 'جبران خسارت' ,
      description : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ' ,
    } ,
    {
      id : 3 ,
      img :  require('../assets/images/Lamp.png') ,
      title : 'تکنولوژی بروز' ,
      description : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ' ,
    } ,
    {
      id : 4 ,
      img :  require('../assets/images/shafaf.png') ,
      title : 'قرارداد شفاف' ,
      description : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ' ,
    } ,
    {
      id : 5 ,
      img :  require('../assets/images/Support.png') ,
      title : 'پشتیبانی' ,
      description : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ' ,
    } ,
  ]
}
</script>

<style>
.c__rounded-padding{
  border-radius: 8px !important;
  padding-top: 25px;
}
.w_80{
  width: 90% !important;
  margin: 20px auto 24px;
}
.c__h1{
  text-align: right;
}
.visible_mobile__v_sm{
  display: none;
}
@media screen and (max-width: 959px) {
  .c__h1{
    text-align: center !important;
  }
}
.visible_mobile{
  display: none;
}
@media screen and (max-width: 767px) {
  .visible_desktop{
    display: none;
  }
  .visible_mobile{
    display: block;
  }
}
@media screen and (max-width: 549px) {
  .visible_mobile{
    display: none;
  }
  .visible_mobile__v_sm{
    display: block;
  }
}
</style>

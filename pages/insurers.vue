<template>
  <div>
  <div class="container-fluid bg__color">
    <v-container class="py-5 c__container">
    <span class="irandyekanM t-color_light d-block text-right mb-3">مشخصات و آمار</span>
    <h1 class="h1 irandyekanBB-24 text-right">شرکت های بیمه کننده</h1>
  </v-container>
  </div>
    <v-container class="c__container mobile_table">
      <v-simple-table class="c__margin_top_48">
        <template v-slot:default>
          <thead class="text-right">
          <tr>
            <th>
              <span class="irandyekanM c__insures_t_color">مجموع خسارت پرداختی <span class="irandyekanM-12 c__caption_color ml-3">  |   تومان</span></span>
            </th>
            <th>
              <span class="irandyekanM c__insures_t_color">تعداد  پرداخت خسارت</span>
            </th>
            <th>
              <span class="irandyekanM c__insures_t_color">تعداد بیمه شونده</span>
            </th>
            <th>
              <span class="irandyekanM c__insures_t_color">مجموع دارایی در ایراسن<span class="irandyekanM-12 c__caption_color">  |   تومان</span></span>
            </th>
            <th>
              <span class="irandyekanM c__insures_t_color mr-3"> نام شرکت بیمه کننده &nbsp; &nbsp;<span class="irandyekanM c__caption_color">#</span></span>
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in insuresData" :key="item.id">
            <td class="irandyekanM text-right d_b_m_16">
              {{item.totalPrice}}
            </td>
            <td class="irandyekanM text-right padding-right">
              {{item.countOfPay}}
            </td>
            <td class="irandyekanM text-right padding-right">
              {{item.countOfInsures}}
            </td>
              <td class="irandyekanM text-right padding-right">
                {{item.totalInIrasen}}
              </td>
              <td class="irandyekanM text-right padding-right">
                <div class="d-flex align-items-center gap-10 justify-content-end">
                  <span class="irandyekanM">{{item.title}}</span>
                  <img :src="item.image" alt="">
                </div>
              </td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
    <v-container class="insurers_on_mobile">
      <v-card v-for="(item , i) in insuresData" class="box_shadow_none"  :key="i">
        <div class="d-flex justify_c flex-row-reverse align-items-center">
            <span class="irandyekanM">
              شرکت بیمه کننده
            </span>
          <div class="d-flex align-items-center justify-content-center gap-10">
            <img :src="item.image" alt="">
            <span class="irandyekanM">
              {{item.title}}
            </span>
          </div>
        </div>
        <div class="divider"></div>
        <div class="d-flex justify_c flex-row-reverse align-items-center margin_8">
            <span class="irandyekanM">
              مجموعه دارایی در ایراسن
            </span>
          <div>
            <span class="irandyekanM">
              {{item.totalInIrasen}}
            </span>
          </div>
        </div>
        <div class="divider"></div>
        <div class="d-flex justify_c flex-row-reverse align-items-center margin_8">
            <span class="irandyekanM">
              تعداد بیمه شونده
            </span>
          <div>
            <span class="irandyekanM">
              {{item.countOfInsures}}
            </span>
          </div>
        </div>
        <div class="divider"></div>
        <div class="d-flex justify_c flex-row-reverse align-items-center margin_8">
            <span class="irandyekanM">
              تعداد  پرداخت خسارت
            </span>
          <div>
            <span class="irandyekanM">
              {{item.countOfPay}}
            </span>
          </div>
        </div>
        <div class="divider"></div>
        <div class="d-flex justify_c flex-row-reverse align-items-center margin_b_8">
            <span class="irandyekanM">
              مجموع خسارت پرداختی
            </span>
          <div>
            <span class="irandyekanM">
              {{item.totalPrice}}
            </span>
          </div>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import {Component , Vue} from "nuxt-property-decorator";
export default class ListOfInsurers extends Vue{
  insuresData : any = [
    {
      id : 0 ,
      image : require('../assets/images/atilesazan.png') ,
      header : 'شرکت های بیمه کننده' ,
      title : 'آتیله سازان حافظ' ,
      totalInIrasen : '۵۶۰,۰۰۰,۰۰۰' ,
      countOfInsures : '۱۶۷' ,
      countOfPay : '۲۷' ,
      totalPrice : '۴۷,۲۳۵,۰۰۰' ,
    } ,
    {
      id : 1 ,
      image : require('../assets/images/asia.png') ,
      header: 'مجموع دارایی در ایراسن' ,
      title : 'بیمه آسیا' ,
      totalInIrasen : '۳۰۰,۰۰۰,۰۰۰' ,
      countOfInsures : '79' ,
      countOfPay : '11' ,
      totalPrice : '۲۳,۱۱۷,۰۰۰' ,
    } ,
    {
      id : 2 ,
      image : require('../assets/images/alborz.png') ,
      header: 'تعداد بیمه شونده' ,
      title : 'بیمه البرز' ,
      totalInIrasen : '۵۶۰,۰۰۰,۰۰۰' ,
      countOfInsures : '۱۶۷' ,
      countOfPay : '۲۷' ,
      totalPrice : '۴۷,۲۳۵,۰۰۰' ,
    } ,
    {
      id : 3 ,
      image : require('../assets/images/iranBimee.png') ,
      header: 'تعداد  پرداخت خسارت' ,
      title : 'بیمه ایران' ,
      totalInIrasen : '۳۰۰,۰۰۰,۰۰۰' ,
      countOfInsures : '79' ,
      countOfPay : '11' ,
      totalPrice : '۲۳,۱۱۷,۰۰۰' ,
    } ,
    {
      id : 4 ,
      image : require('../assets/images/parsian.png') ,
      header: 'مجموع خسارت پرداختی' ,
      title : 'بیمه پارسیان' ,
      totalInIrasen : '۵۶۰,۰۰۰,۰۰۰' ,
      countOfInsures : '۱۶۷' ,
      countOfPay : '۲۷' ,
      totalPrice : '۴۷,۲۳۵,۰۰۰' ,
    } ,
  ]
}
</script>

<style>
.bg__color{
  background-color: #F6F6FC;
}
.t-color_light{
  color: #4E4E68 !important ;
}
.c__insures_t_color{
  color: #4E4E68 !important;
}
.c__caption_color{
  color: #B4B4BE !important;
}
.color__container > span{
  color: #4E4E68 !important;
}
.d_b_m_16{
  display: block;
  margin-top: 16px !important;
}
.padding-right{
  padding-right: 18px !important;
}
.c__margin_top_48{
  margin-top: 48px !important;
}
.insurers_on_mobile{
  display: none !important;
}
@media screen and (max-width: 618px) {
  .mobile_table{
    display: none;
  }
  .justify_c{
    justify-content: space-between !important;
  }
  .box_shadow_none{
    box-shadow: unset !important;
    border: 1px solid  #EAEAF8 !important;
    border-radius: 8px !important;
    padding: 16px 16px !important;
    margin-top: 16px;
  }
  .margin_8{
    margin-top: 24px !important;
  }
  .divider{
    height: 1px;
    width: 100%;
    background-color: #EAEAF8 !important;
    margin: 16px 0;
    opacity: 0.5 !important;
  }
  .margin_b_8{
    margin-bottom: 8px !important;
  }
  .insurers_on_mobile{
    display: block !important;
  }
}
</style>

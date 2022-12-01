<template>
  <div>
    <div class="container-fluid smart__bgimg">
      <v-container class="mobile_top_smart_contranct c__container d-flex flex-row-reverse justify-content-around align-items-center">
        <div class="mt-5">
          <h1 class="irandyekanBB-24 text-right">قرار داد هوشمند چیست؟</h1>
          <v-divider></v-divider>
          <p class="irandyekanM darker__color text-right irandyekanMLine-1-7 w__445">
            قرارداد هوشمند یک برنامه کامپیوتری یا یک پروتکل تراکنش است که برای اجرای خودکار، کنترل یا مستندسازی رویدادها و اقدامات قانونی مرتبط با شرایط یک قرارداد یا توافق در نظر گرفته شده است. اهداف قراردادهای هوشمند کاهش نیاز به واسطه‌های مورد اعتماد، هزینه‌های داوری و اجرایی، زیان ناشی از تقلب و همچنین کاهش استثناهای بدخواهانه و تصادفی است.
          </p>
        </div>
        <div>
          <img class="smart_contract_img" src="../assets/images/smarCimg.png" alt="">
        </div>
      </v-container>
    </div>
    <v-container class="mt-5 c__container">
      <h1 class="irandyekanBB c__h1 pr-3 margin_on_mobile">
        مزایای قرار داد هوشمند
      </h1>
      <v-container class="d-flex flex-wrap p-0 set__height margin_32">
      <div class="px-2 w_50_percent" cols="6" :elevation="0" v-for="items in smartData" :key="items.id">
        <v-card outlined class="d-flex flex-column c__rounded-padding h_156 p-0">
         <div class="detail_container">
           <div class="d-flex align-items-center gap-10 flex-row-reverse">
             <img :src="items.image" alt="">
             <h3 class="irandyekanBB16">{{items.title}}</h3>
           </div>
           <p class="text-right irandyekanMLine-1-8 irandyekanM c__purple" >{{items.desc}}</p>
         </div>
        </v-card>
      </div>
      </v-container>
    </v-container>
  </div>
</template>

<script lang="ts">
import {Component , Vue} from "nuxt-property-decorator";
@Component
export default class index extends Vue{
 smartData : any = [
   {
     id : 0 ,
     image: require('../assets/images/time.png') ,
     title : 'سرعت و کارایی' ,
     desc : 'پس از تحقق یک شرط، قرارداد بلافاصله اجرا می شود. از آنجایی که قراردادهای هوشمند دیجیتالی و خودکار هستند، هیچ کاغذی برای پردازش وجود ندارد و زمان صرف شده برای تطبیق خطاهایی که اغلب از پر کردن دستی اسناد ناشی می‌شوند، وجود ندارد.'
   } ,
   {
     id : 1 ,
     image : require('../assets/images/Interface.png') ,
     title : 'اعتماد و شفافیت' ,
     desc : 'از آنجا که هیچ شخص ثالثی در کار نیست، و از آنجا که سوابق رمزگذاری شده تراکنش ها بین شرکت کنندگان به اشتراک گذاشته می شود، نیازی به این سوال نیست که آیا اطلاعات برای منافع شخصی تغییر داده شده است یا خیر.'
   } ,
   {
     id : 2 ,
     image : require('../assets/images/secure.png') ,
     title : 'امنیت' ,
     desc : 'سوابق تراکنش های بلاک چین رمزگذاری شده است، که هک آنها را بسیار سخت می کند. علاوه بر این، از آنجا که هر رکورد به رکوردهای قبلی و بعدی در یک دفتر کل توزیع شده متصل است، هکرها باید کل زنجیره را تغییر دهند'
   } ,
   {
     id : 3 ,
     image : require('../assets/images/sarfejoyi.png') ,
     title : 'صرفه جویی' ,
     desc : 'قراردادهای هوشمند نیاز به واسطه‌ها را برای رسیدگی به تراکنش‌ها و در نتیجه تاخیرهای زمانی و کارمزدهای مرتبط با آنها را برطرف می‌کند.'
   } ,
 ]
}
</script>
<style>
.smart__bgimg{
  background: url("../assets/images/bgimg.png") center center/cover;
  height: 481px !important;
}
.w__445{
  width: 445px !important;
}
.h_156{
  height: 156px !important;
}
.darker__color{
  color: #4E4E68 !important;
}
.c__purple{
  color: #4E4E68 !important;
  margin-top: 10px;
}
.set__height:nth-child(4){
  display: none;
}
.detail_container{
  width: 97%;
  margin: 18px 16px 16px;
  margin-left: 4px !important;
}
.c__padding{
  padding-left: 1.25em !important;
  padding-right: 0.25em !important;
  margi-bottom: 1.5em !important;
}
.margin_32{
  margin-top: 32px;
  margin-bottom: 96px;
}
.w_50_percent{
  width: 50%;
  margin: 10px 0;
}
@media screen and (max-width: 1263px) {
  .h_156{
    height: 180px !important;
  }
}
@media screen and (max-width: 959px) {
  .h_156{
    height: 210px !important;
    padding: 10px !important;
  }
}
@media screen and (max-width: 850px) {
    .mobile_top_smart_contranct{
      flex-direction: column !important;
    }
  .margin_on_mobile{
    margin-top: 150px !important;
  }
}
@media screen and (max-width: 767px) {
  .w_50_percent{
    width: 100%;
  }
  .h_156{
    height: max-content !important;
  }
}
@media screen and (max-width: 475px) {
  .darker__color{
    width: 100% !important;
  }
}
</style>


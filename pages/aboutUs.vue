<template>
  <div>
    <div class="container-fluid bgimg">
      <v-container class="mobile_aboutus c__container d-flex justify-content-between flex-row-reverse gap-20">
        <div class="mt-5  w_425">
          <h5 class="irandyekanM c__light text-right w_mobiel_100">
            ایراسن اولین پلتفرم بیمه، برپایه قرارداد‌های هوشمند
          </h5>
          <h1 class="irandyekanBB-24 text-right mt-3 w_mobiel_100">
            درباره ایراسن
          </h1>
          <v-divider></v-divider>
          <p class="irandyekanMLine-1-8 irandyekanM c__light text-right w_mobiel_100">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو.
          </p>
        </div>
        <div class="mt-5 w_100_percent">
          <img class="aboutus_image" src="../assets/images/aboutimg.png" alt="">
        </div>

      </v-container>
    </div>
    <v-container class="mt-5 c__container">
      <h1 class="h1 c__margin_top text-center mt-15 pr-5 irandyekanBB">
        برخی ویژگی‌های ایراسن
      </h1>
      <v-container class="d-flex flex-wrap p-0 pt-5 m__auto mb-5">
        <v-row class="d-flex justify-content-center flex-row-reverse">
          <v-col class="visible_desktop" cols="3" :elevation="0" v-for="items in detailsData" :key="items.id">
            <v-card outlined class="d-flex flex-column c__rounded-padding">
              <div class="d-flex px-4 align-items-center gap-10 flex-column">
                <img :src="items.img" alt="">
                <h3 class="irandyekanBB16">{{items.title}}</h3>
              </div>
              <p class="text-center c__margin_about px-4 irandyekanMLine-1-8 irandyekanM" >{{items.description}}</p>
            </v-card>
          </v-col>
          <v-col class="visible_mobile" cols="4" :elevation="0" v-for="items in detailsData" :key="items.id">
            <v-card outlined class="d-flex flex-column c__rounded-padding">
              <div class="d-flex px-4 align-items-center gap-10 flex-column">
                <img :src="items.img" alt="">
                <h3 class="irandyekanBB16">{{items.title}}</h3>
              </div>
              <p class="text-center c__margin_about px-4 irandyekanMLine-1-8 irandyekanM" >{{items.description}}</p>
            </v-card>
          </v-col>
          <v-col class="visible_mobile_sm" cols="6" :elevation="0" v-for="items in detailsData" :key="items.id">
            <v-card outlined class="d-flex flex-column c__rounded-padding">
              <div class="d-flex px-4 align-items-center gap-10 flex-column">
                <img :src="items.img" alt="">
                <h3 class="irandyekanBB16">{{items.title}}</h3>
              </div>
              <p class="text-center c__margin_about px-4 irandyekanMLine-1-8 irandyekanM" >{{items.description}}</p>
            </v-card>
          </v-col>

          <v-col class="visible_mobile__v_sm" cols="12" :elevation="0" v-for="items in detailsData" :key="items.id">
            <v-card outlined class="d-flex flex-column c__rounded-padding">
              <div class="d-flex px-4 align-items-center gap-10 flex-column">
                <img :src="items.img" alt="">
                <h3 class="irandyekanBB16">{{items.title}}</h3>
              </div>
              <p class="text-center c__margin_about px-4 irandyekanMLine-1-8 irandyekanM" >{{items.description}}</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
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
.c__light{
  color: #4E4E68 !important;
}
.bgimg{
  background: url("../assets/images/bgimg.png") center center/cover;
  height: 500px;
}
.w_425{
  width: 425px !important;
}
.c__rounded-padding{
  border-radius: 8px !important;
  padding-top: 25px;
}
.c__margin_about{
  width: 100%;
  margin: 16px auto;
  color: #4E4E68 !important;
}
.visible_mobile{
  display: none;
}
.visible_mobile_sm{
  display: none;
}
.visible_mobile__v_sm{
  display: none;
}
@media screen and (max-width: 959px) {
  .visible_desktop{
    display: none;
  }
  .visible_mobile{
    display: block;
  }
}
@media screen and (max-width: 767px) {
  .mobile_aboutus{
    flex-direction: column !important;
  }
  .w_425{
    margin: 0 auto;
  }
  .w_100_percent{
    width: 100% !important;
  }
  .aboutus_image{
    display: block;
    width: 425px !important;
    margin: 0 auto;
  }
  .c__margin_top{
    margin-top: 170px;
  }
  .visible_mobile{
    display: none;
  }
  .visible_mobile_sm{
    display: block;
  }
}
@media screen and (max-width: 470px) {
  .w_425{
    width: 100% !important;
  }
  .aboutus_image{
    width: 100% !important;
  }
  .visible_mobile_sm{
    display: none;
  }
  .visible_mobile__v_sm{
    display: block;
  }
}
</style>

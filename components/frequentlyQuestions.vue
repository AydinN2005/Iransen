<template>
<v-container class="c__mt-60 p-0">
  <h1 class="h1 text-center irandyekanBB">
    سوالات متداول
  </h1>
  <v-expansion-panels class="c__expention-panle" :class="open ? 'border__bottom' : ''">
    <v-expansion-panel
      v-for="content in contents"
      :key="content.id"
      class="custom_accardion"
      @click="clickedAccardion($event)"
    >
      <v-expansion-panel-header>
        <h3 class="h3 irandyekanM c__margin">
          {{ content.title }}
        </h3>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <p class="text-right irandyekanM">
          {{content.description}}
        </p>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</v-container>
</template>

<script lang="ts">
import {Component , Vue , Watch} from "nuxt-property-decorator";
@Component
export default class FrequentlyQuestions extends Vue{
  open : boolean = false
  contents : any = [
    {
      id : 0 ,
      title : 'ایراسن چگونه کار میکند ؟' ,
      description : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.' ,
    } ,
    {
      id : 1 ,
      title : 'قرارداد بیمه خود را چگونه بررسی کنیم؟' ,
      description : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.' ,
    } ,
    {
      id : 2 ,
      title : 'مدت زمان پرداخت هزینه خسارت چقدر می‌باشد؟' ,
      description : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.' ,
    } ,
    {
      id : 3 ,
      title : 'آیا امکان لغو قرارداد می‌باشد؟' ,
      description : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.' ,
    } ,
    {
      id : 4 ,
      title : 'شرایط جوی آب و هوا به چه صورت بررسی خواهد شد؟' ,
      description : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.' ,
    } ,
  ]
  clickedAccardion(e:HTMLElement){
   this.open = !this.open
  }
}
</script>

<style>
.custom_accardion button{
  display: flex;
  flex-direction: row-reverse;
  gap: 10px;
}
.c__expention-panle .v-expansion-panel{
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.c__expention-panle .v-expansion-panel:last-child{
  border-bottom: none;
}
.c__expention-panle .v-expansion-panel::before{
  box-shadow: unset !important;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-bottom: 1px solid rgba(234, 234, 248, 0.75) !important;
}
.custom_accardion .v-expansion-panel--active , .v-item--active h3{
  color: var(--hoverPurple) !important;
}
.custom_accardion .v-expansion-panel--active , .v-item--active p{
  color: #4E4E68 !important;
}
.c__expention-panle{
  width: 65%;
  margin: 10px auto !important;
}
.c__mt-60{
  margin-top: 60px !important;
}
.c__margin{
  margin: 0.5em 0 !important;
}
.border__bottom{
  border-bottom: 1px solid rgba(234, 234, 248, 0.75) !important;
}
@media screen and (max-width: 767px) {
  .c__expention-panle{
    width: 100% !important;
  }
}
@media screen and (max-width: 375px) {
  .v-expansion-panel-header{
    padding: 10px 0 !important;
  }
}
</style>

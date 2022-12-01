<template>
  <v-container class="p-0" style="margin-top: 50px;width: 100%;">
    <h1 class="h1 text-right irandyekanBB-24">
      با خیال راحت زمینت رو
      <br>
      دیجیتالی و هوشمند بیمه کن
    </h1>
    <h4 class="h4 text-secondary text-right mt-5 mb-8 irandyekanM">
      ایراسن اولین بیمه هوشمند دیجیتالی ایران
    </h4>
    <img class="c__z__index visible_c" src="../../assets/images/Group5.png" alt="">
    <v-divider></v-divider>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
    <span class="text-right d-block irandyekanM bime_select">بیمه</span>
    <v-select
      id="bimeSelectbox"
      class="text-right custom_selectbox mt-2 irandyekanM br_8_light"
      :items="items"
      placeholder="بیمه مورد نظر خود را انتخاب نمایید"
      dense
      outlined
      required
      v-model="data.insure"
      :menu-props="{top : false , offsetY : true }"
      :rules="[v => !!v || 'لطفا یک بیمه انتخاب کنید']"
      @change="bimeSelected"
    >
      <template v-slot:item="{item , index}">
        <img :src="item.icon" alt="" class="ml-3" style="width: 24px !important;height: 24px !important;">
        <span class="irandyekanM">{{item.text}}</span>
      </template>
      <template v-slot:selection="{item , index}">
        <img :src="item.icon" alt="" class="ml-3" style="width: 24px !important;height: 24px !important;">
        <span class="irandyekanM">{{item.text}}</span>
      </template>
    </v-select>

    <span class="text-right d-block c__list irandyekanM mt_24">استان</span>
    <v-select
      class="text-right custom_selectbox mt-2 c__list br_8_light region_selectbox"
      :items="cities"
      placeholder="استان مورد نظر خود را انتخاب نمایید"
      dense
      outlined
      required
      v-model="data.region"
      :rules="[v => !!v || 'لطفا یک استان انتخاب کنید']"
      :menu-props="{top : false , offsetY : true }"
    ></v-select>
    <v-container class="d-flex p-0">
      <v-col class="p-0">
        <span class="text-right d-block c__list mt_24 irandyekanM">متراژ زمین  <span style="font-family: iranYekan;font-size: 12px" class="text-secondary">(متر مربع)</span></span>

        <v-text-field
          class="mt-2 ml-3 custom_input br_8_light"
          placeholder="برای مثال ۲۵۰۰"
          @keypress="isNumber($event)"
          v-model="data.field"
          outlined
          :rules="[v => !!v || 'لطفا متراژ زمین را وارد کنید',]"
          style="font-family: iranYekan"
        ></v-text-field>
      </v-col>
      <v-col class="p-0">
        <span class="text-right d-block p-11 irandyekanM pr-2 mt_24">تعداد درخت</span>
        <v-text-field
          class="mt-2 mr-2 custom_input br_8_light"
          placeholder="برای مثال ۵۰"
          value="۵۰"
          outlined
          required
          v-model="data.treecount"
          @keypress="isNumber($event)"
          :rules="[v => !!v || 'لطفا تعداد درختان را وارد کنید',]"
          style="font-family: iranYekan;height: 30px !important"
        ></v-text-field>
      </v-col>
    </v-container>
    <span class="text-right d-block irandyekanM mt_24">ارزش تخمینی محصولات امسال <span style="font-family: iranYekan;font-size: 12px" class="text-secondary">(تومان)</span></span>
    <v-text-field
      class="mt-2 custom_input br_8_light"
      placeholder="برای مثال ۱۰۰,۰۰۰,۰۰۰"
      value="۱۰۰,۰۰۰,۰۰۰"
      outlined
      required
      v-model="data.price"
      @keypress="isNumber($event)"
      :rules="[v => !!v || 'لطفا ارزش تخمینی محصولات را وارد کنید',]"
      style="font-family: iranYekan;height: 30px !important"
      @change="validateOk"
    ></v-text-field>
    <v-btn
      class="mt-13 rounded-lg c__btn"
      :class="bimeSelectedFlag ? 'hidden_c' : ''"
      depressed
      @click="choosBime"
      id="btn"
    >
      <spna class="irandyekanM c__white" id="btntext">انتخاب بیمه</spna>
    </v-btn>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import {Component , Vue , Watch} from "nuxt-property-decorator";
import seprate from "~/js/seprate";
@Component({

})
export default class planComp extends Vue{
  showPlanToggle : boolean = false
  data : any = {
    insure :  '' ,
    region :  '' ,
    field :  '' ,
    price :  '' ,
    treecount :  '' ,
    flag :  0,
  }
  valid:boolean = false
  bimeSelectedFlag : boolean = false
  @Watch('data' , {deep : true , immediate : true})
  insureChange(){
    if(this.data.insure === ''){
      this.bimeSelectedFlag = false
    }else{
      this.bimeSelectedFlag = true
    }
  }
  mounted(){
    const el = document.querySelector('fieldset')
    el.style.borderColor = 'red !important'
  }
  items : any = [
    {
      text : 'تامین اجتماعی' ,
      icon : require('../../assets/List/Rectangle 592-1.png')
    } ,
    {
      text : 'تکمیلی' ,
      icon : require('../../assets/List/Rectangle 592-2.png')
    } ,
    {
      text : 'نیرو های مسلح' ,
      icon : require('../../assets/List/Rectangle 592-3.png')
    } ,
    {
      text : 'بدنه خودرو' ,
      icon : require('../../assets/List/Rectangle 592-4.png')
    } ,
  ]
  cities : any = [
    'آذربایجان شرقی' ,
    'تهران' ,
    'آذربایجان غربی',
    'اردبیل'
  ]
  @Watch('data' , {deep : true , immediate : true})
  insureNull(){
    if(this.data.insure === ''){

    }
  }
  validateOk(){
    if (this.data.insure != '' && this.data.region != '' && this.data.field != '' && this.data.price != '' && this.data.treecount != ''){
      this.$emit('showPlan')
      this.showPlanToggle = true
       }
  }
  choosBime(){
      let el : any = document.querySelector('.v-input__slot')
      el.click()
    }
  bimeSelected(){
    // let el2 = document.getElementById('btn')
    // el2.style.animationName = "hidebtn"
    // el2.style.animationDirection = "1s"
    // el2.style.animationFillMode = "forwards"
    // let el = document.getElementById('btntext')
    // el.innerHTML = "تایید و ادامه"
  }
  isNumber (evt: KeyboardEvent): void {
    const keysAllowed: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
    const keyPressed: string = evt.key;
    if (!keysAllowed.includes(keyPressed)) {
      evt.preventDefault()
    }
  }
}
</script>

<style>
.custom_selectbox{
  font-family: iranYekan;
}
.custom_selectbox label{
  font-size: 14px !important;
}
.custom_input fieldset{
  height: 48px !important;
}
.custom_input .v-text-field__slot input{
  padding-bottom: 10px !important;
}
.custom_input .v-input__slot{
  min-height: 42px !important;
  max-height: 48px !important;
}
.custom_input .v-label{
  top: 13px !important;
}
.c__btn{
  width: 100%;
  background-color: var(--primaryBlue) !important;
  color: white !important;
}
.c__white{
  color: white !important;
}
.v-messages__message{
  color: red !important;
}
.v-list-item__title{
  font-family: iranYekan !important;
  font-size: 14px !important;
  display: block;
  text-align: right;
  padding-bottom: 10px;
}
.v-input , .v-input__control{
  height: 48px !important;
}
.v-input__control{
  display: block;
}
.custom_selectbox fieldset{
  border: 1px solid #EAEAF8 !important;
  border-radius: 8px !important;
}
.custom_selectbox .v-icon::before{
  content: url("./assets/img/favicon/Path.png");
}
.custom_selectbox .v-icon{
  padding-bottom: 8px !important;
}
.custom_selectbox:focus{
  outline: unset !important;
  border: 1px solid #EAEAF8 !important;
  border-radius: 8px !important;
}
.mt_24{
  margin-top: 24px !important;
}
.custom_input fieldset{
  border: 1px solid #EAEAF8 !important;
  border-radius: 8px !important;
}
.custom_input:focus{
  outline: unset !important;
  border: 1px solid #EAEAF8 !important;
  border-radius: 8px !important;
}
.v-menu__content{
  margin-top: 4px !important;
  box-shadow: unset !important;
  border: 1px solid #EAEAF8 !important;
  border-radius: 8px !important;
}
.hidden_c{
  display: none !important;
}
.v-input__slot::before{
  border: none;
}
.visible_c{
  display: none !important;
}
.bime-selected-open{
  animation-name: showplan;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}
.bime-selected{
  opacity: 0;
}
/*@keyframes showplan {*/
/*  0%{*/
/*    opacity: 0;*/
/*  }*/
/*  100%{*/
/*    opacity: 1;*/
/*  }*/
/*}*/
@keyframes hidebtn {
  0%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
}

@media screen and (max-width: 959px) {
  .visible_c{
    display: block !important;
    height: auto !important;
  }
}
</style>


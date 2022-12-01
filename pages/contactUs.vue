<template>
  <div>
    <div class="container-fluid bg__contat_color">
      <div class="d-flex flex-row-reverse align-items-center justify-content-center gap-10">
        <h1 class="mt-5 irandyekanBB-24">
        با ما در ارتباط باشید
        </h1>
        <img class="mt-5" src="../assets/images/imoji.png" alt="">
      </div>
      <h4 class="irandyekanM c__light text-center mt-2">
        منتظر انتقادها و پیشنهاد های شما هستیم
      </h4>
    </div>
    <v-container>
      <v-card width="730" class="mx-auto c__boxshadow" outlined>
           <div class="d-flex justify-content-around align-items-center pt-5">
           <div class="d-flex flex-column w_70_percent justify-content-between align-items-center flex-wrap">
             <div class="d-flex w_100_percent justify-content-around align-items-center flex-row-reverse mobile_flex">
               <h3 class="irandyekanM align-self-center">
                 Irasen@info.com
                 <svg class="mb_4px" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M7.49805 9.74905L10.4247 11.5534C11.3905 12.1488 12.6094 12.1488 13.5751 11.5534L16.5018 9.74905" stroke="#020226" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                   <rect x="2.99609" y="4.99707" width="18.0075" height="14.0058" rx="3" stroke="#020226" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                 </svg>
               </h3>
               <h3 class="irandyekanM">
                 ۰۴۱ ۳۳۳۴ ۱۴۵۸
                 <svg class="mb_4px" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path fill-rule="evenodd" clip-rule="evenodd" d="M5.07062 16.6102L6.24362 15.4372C6.82962 14.8512 7.77962 14.8512 8.36462 15.4372L9.28662 16.3592C9.49262 16.5652 9.80462 16.6342 10.0706 16.5172C11.4066 15.9322 12.7266 15.0452 13.9036 13.8682C15.0756 12.6962 15.9596 11.3822 16.5456 10.0512C16.6676 9.77621 16.5966 9.45321 16.3836 9.24021L15.5576 8.41421C14.8866 7.74321 14.8866 6.79421 15.4726 6.20821L16.6456 5.03521C17.4266 4.25421 18.6926 4.25421 19.4736 5.03521L20.1256 5.68621C20.8666 6.42721 21.1756 7.49621 20.9756 8.55621C20.4816 11.1692 18.9636 14.0302 16.5146 16.4792C14.0656 18.9282 11.2046 20.4462 8.59162 20.9402C7.53162 21.1402 6.46262 20.8312 5.72162 20.0902L5.07062 19.4392C4.28962 18.6582 4.28962 17.3922 5.07062 16.6102V16.6102Z" stroke="#020226" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                   <path d="M11.0371 6.99112C10.0061 6.97712 8.97011 7.35912 8.18311 8.14612" stroke="#020226" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                   <path d="M5.35511 5.31811C6.92411 3.74911 8.98111 2.96411 11.0371 2.96411" stroke="#020226" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                   <path d="M7.02664 11C7.01264 9.969 7.39464 8.933 8.18164 8.146" stroke="#020226" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                   <path d="M5.35352 5.31812C3.78452 6.88712 2.99952 8.94412 2.99952 11.0001" stroke="#020226" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                 </svg>
               </h3>
             </div>
             <v-divider class="w_100_percent"></v-divider>
           </div>
           </div>
        <v-form class="w_70_percent" ref="contactForm">
          <div class="d-flex justify-content-between gap-40 flex-row-reverse mobile_flex">
            <div class="d-flex flex-column w_70_percent">
              <span class="d-block text-right irandyekanM mb-2">نام کامل</span>
              <v-text-field
                dir="rtl"
                placeholder="نام و نام خانوادگی خود را وارد کنید"
                outlined
                required
                :rules="[v=> !!v || 'لطفا نام خود را وارد کنید']"
                class="input_contact irandyekanM"
              ></v-text-field>
            </div>
            <div class="d-flex flex-column w_70_percent">
              <span class="d-block text-right irandyekanM mb-2">ایمیل</span>
              <v-text-field
                dir="rtl"
                placeholder="برای مثال example@info.com"
                outlined
                required
                :rules="[v=> !!v || 'لطفا ایمیل خود را وارد کنید' ,  v => /.+@.+\..+/.test(v) || 'لطفا ایمیل معتبر وارد کنید']"
                class="input_contact irandyekanM"
              ></v-text-field>
            </div>
          </div>

          <div class="d-flex justify-content-between gap-40 flex-row-reverse mobile_flex">
            <div class="d-flex flex-column w_70_percent">
              <span class="d-block text-right irandyekanM mb-2 mt-4">
                شماره موبایل
              <span class="irandyekanM-12_t_d c__light">(اختیاری)</span>
              </span>
              <v-text-field
                dir="rtl"
                placeholder="شماره موبایل خود را وارد نمایید"
                outlined
                class="input_contact irandyekanM"
              ></v-text-field>
            </div>
            <div class="d-flex flex-column w_70_percent">
              <span class="d-block text-right irandyekanM mb-2 mt-4">موضوع</span>
              <v-text-field
                dir="rtl"
                placeholder="برای مثال پیشنهاد"
                outlined
                required
                :rules="[v=> !!v || 'لطفا موضوع خود را وارد کنید']"
                class="input_contact irandyekanM"
              ></v-text-field>
            </div>
          </div>

          <div class="d-flex flex-column mobile_80_percent">
            <span class="d-block text-right irandyekanM mb-2 mt-4">متن پیام</span>
            <v-textarea
              dir="rtl"
              placeholder="متن پیام خود را وارد کنید"
              auto-grow
              outlined
              required
              class="input_contact-area irandyekanM"
              :rules="[v=> !!v || 'لطفا متن پیام خود را وارد کنید']"
              rows="1"
              row-height="15"
            ></v-textarea>
          </div>
          <div class="w_100_percent pb-4">
            <v-btn class="contact_btn"
            @click="sendContactForm"
            >
            <span class="irandyekanM c__white">
              ارسال فرم تماس با ما
            </span>
            </v-btn>
          </div>
        </v-form>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import {Component , Vue} from "nuxt-property-decorator";
@Component
export default class ContactUs extends Vue{
  valid : boolean = true
  sendContactForm(){
    if(this.$refs.contactForm.validate()){
      this.valid = true
    }else{
      this.valid = false
    }
  }
}
</script>

<style>
.bg__contat_color{
  background:  #F6F6FC;
  position: relative;
  height: 216px;
}
.w_70_percent{
  width: 70%;
  margin: auto auto;
}
.w_100_percent{
  width: 100% !important;
}
.input_contact .v-input{
  height: 48px !important;
}
.input_contact .v-input__control{
  min-height: unset !important;
  height: 48px !important;
}
.input_contact fieldset{
  border: 1px solid #EAEAF8 !important;
  height: 48px;
  border-radius: 8px !important;
}
.input_contact .v-text-field__slot{
  padding-bottom: 10px;
}
.c__light{
 color :  #9A9AA8 !important;
}
.contact_btn{
  background-color: var(--primaryBlue) !important;
  margin: 0px auto;
  display: block;
}
.c__boxshadow{
  border: none !important;
  background: #FFFFFF;
  box-shadow: 0px 32px 32px rgba(180, 180, 190, 0.2);
  border-radius: 16px !important;
  position: relative;
  top: -90px;
}
.input_contact .v-input__slot{
  min-height: 48px !important;
}
.input_contact .v-messages__message{
  text-align: right;
}
.input_contact-area .v-input__slot{
  min-height: 48px !important;
}
.input_contact-area{
  margin-top: 4px !important;
  margin-bottom: 14px !important;
}
.input_contact-area fieldset{
  border: 1px solid #EAEAF8 !important;
  border-radius: 8px !important;
}
.input_contact-area:focus{
  outline: none !important;
  border: 1px solid #EAEAF8 !important;
}
.input_contact-area .v-messages__message{
  display: block !important;
  width: 100% !important;
  text-align: right;
}
.v-input , .v-input__control{
  height: max-content !important;
}
.mb_4px{
  margin-bottom: 5px !important;
}
.input_contact .v-messages__message{
  display: block;
  min-width: 100% !important !important;
  width: 100% !important;
  text-align: right !important;
  position: unset;
}
.input_contact .v-input__slot{
  margin-bottom: 0 !important;
}

@media screen and (max-width: 767px){
  .mobile_flex{
    flex-direction: column !important;
    gap: 20px !important;
  }
  .w_70_percent{
    width: 90% !important;
  }
  .mobile_80_percent{
    display: block;
    width: 90% !important;
    margin: 0 auto !important;
  }
}
</style>

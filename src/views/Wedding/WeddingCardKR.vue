<script setup>
import { onMounted, onUnmounted } from "vue";
import IconCall from "../../components/IconCall.vue";
import IconMessage from "../../components/IconMessage.vue";

//example components
import NavbarDefault from "../../examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../examples/footers/FooterDefault.vue";
import Header from "../../examples/Header.vue";
import FilledInfoCard from "../../examples/cards/infoCards/FilledInfoCard.vue";

//Vue components
import MaterialButton from "@/components/MaterialButton.vue";
import MaterialSocialButton from "@/components/MaterialSocialButton.vue";
// import WeddingImgGrid from "../../../src/views/Wedding/components/WeddingImgGrid.vue";
import LanguageNavTab from "./Components/LanguageNavTab.vue";

// sections
import WeddingInvitation from "./Sections/Korean/WeddingInvitation.vue";
import WeddingInvitationMessage from "./Sections/Korean/WeddingInvitationMessage.vue";
import WeddingPhotoLayout from "./Sections/Korean/WeddingPhotoLayout.vue";
import WeddingPhotoLayout2 from "./Sections/Korean/WeddingPhotoLayout2.vue";
import WeddingContact from "./Sections/Korean/WeddingContact.vue";
import WeddingMap from "./Sections/Korean/WeddingMap.vue";
import WeddingTest from "./Sections/WeddingTest.vue";
import PresentationPages from "./Sections/PresentationPages.vue";
import PresentationExample from "./Sections/PresentationExample.vue";
import data from "./Sections/Data/designBlocksData";
import BuiltByDevelopers from "./Components/BuiltByDevelopers.vue";
import PresentationTestimonials from "./Sections/PresentationTestimonials.vue";
import PresentationInformation from "./Sections/PresentationInformation.vue";

//images
//import vueMkHeader from "@/assets/img/vue-mk-header.jpg";
import vueMkHeader from "@/assets/img/wedding/wedding-main2.jpg";
import wavesWhite from "@/assets/img/waves-white.svg";
import logoBootstrap from "@/assets/img/logos/bootstrap5.jpg";
import logoTailwind from "@/assets/img/logos/icon-tailwind.jpg";
import logoVue from "@/assets/img/mk-header-6.jpg";
import logoAngular from "@/assets/img/logos/angular.jpg";
import logoReact from "@/assets/img/logos/react.jpg";
import logoSketch from "@/assets/img/logos/sketch.jpg";
import WeddingPhotoExample from "../../../src/views/Wedding/Components/WeddingPhotoExample.vue";

//hooks
const body = document.getElementsByTagName("body")[0];
onMounted(() => {
  body.classList.add("wedding-invitation-page");
  body.classList.add("bg-gray-200");
});
onUnmounted(() => {
  body.classList.remove("wedding-invitation-page");
  body.classList.remove("bg-gray-200");
});
</script>

<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :sticky="false" />
        <!-- <LanguageNavTab /> -->
      </div>
    </div>
  </div>
  <Header>
    <div class="col-lg-7 mx-3 position-relative">
      <h1
        class="text-left text-black pt-2 mb-n5 me-2"
        :style="{ display: 'inline-block ' }"
      >
        03.25
      </h1>
    </div>
    <div
      class="page-header min-vh-50"
      :style="`background-image: url(${vueMkHeader})`"
      loading="lazy"
    ></div>
  </Header>

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
    <WeddingInvitation />
    <WeddingInvitationMessage />
    <WeddingContact />
    <!-- <WeddingPhotoLayout /> -->
    <WeddingPhotoLayout2 />    
    <WeddingMap />
    <WeddingTest/>


    <!-- <PresentationInformation /> -->
    <PresentationExample :data="data" />
    <!-- <PresentationPages /> -->
    <!-- <BuiltByDevelopers /> -->

    <!-- <div class="container-fluid mt-sm-5 border-radius-xl" :style="{
      background: 'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))'
    }">
      <div class="page-header py-6 py-md-5 my-sm-3 mb-3 border-radius-xl" :style="{
        backgroundImage: `url(${wavesWhite})`
      }" loading="lazy">
        <span class="mask bg-gradient-dark"></span>
        <div class="container">
          <div class="row">
            <div class="d-flex justify-content-center p-5">
              <div class="col-lg-8 ms-lg-5 text-center">
                <h3 class="text-white">
                  Do you love this awesome UI Kit from Vuejs & Bootstrap?
                </h3>
                <p class="text-white text-md">
                  Cause if you do, it can be yours for FREE. Hit the button
                  below to navigate to Creative Tim where you can <br />
                  find the Design System in HTML. Start a new project or give an
                  old Bootstrap project a new look!
                </p>

                <a href="https://www.creative-tim.com/product/vue-material-kit"
                  class="btn btn-sm mb-0 bg-gradient-success px-5 py-3 mt-4">Download Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <!-- <div class="container">
      <div class="row">
        <div class="d-flex flex-column w-100 text-center p-5 mb-8">
          <h3>Available on these technologies</h3>
          <div class="d-flex justify-content-center mt-3 flex-wrap">
            <a href="https://www.creative-tim.com/product/material-kit" data-bs-toggle="tooltip"
              data-bs-placement="bottom" title="Bootstrap 5 - Most popular front-end component library">
              <img :src="logoBootstrap" alt="title" loading="lazy" :style="{ height: '90px' }" />
            </a>
            <a class="opacity-5 ms-3" href="#" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Coming Soon">
              <img :src="logoTailwind" alt="title" loading="lazy" :style="{ height: '90px' }" />
            </a>
            <a href="https://www.creative-tim.com/product/vue-material-kit-pro" class="mx-3" data-bs-toggle="tooltip"
              data-bs-placement="bottom" title="Vue.js - Is a Progressive JavaScript Framework">
              <img :src="logoVue" alt="title" loading="lazy" :style="{ height: '90px' }" />
            </a>
            <a class="opacity-5" href="#" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Coming Soon">
              <img :src="logoAngular" alt="title" loading="lazy" :style="{ height: '90px' }" />
            </a>
            <a href="https://www.creative-tim.com/product/material-kit-react-pro" class="mx-3" data-bs-toggle="tooltip"
              data-bs-placement="bottom" title="React – A JavaScript library for building user interfaces">
              <img :src="logoReact" alt="title" loading="lazy" :style="{ height: '90px' }" />
            </a>
            <a class="opacity-5" href="#" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Coming Soon">
              <img :src="logoSketch" alt="title" loading="lazy" :style="{ height: '90px' }" />
            </a>
          </div>
        </div>
      </div>
    </div> -->
    <!-- <div class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 ms-auto">
            <h4 class="mb-1">Thank you for your support!</h4>
            <p class="lead mb-0">We deliver the best web products</p>
          </div>
          <div class="col-lg-5 me-lg-auto my-lg-auto text-lg-end mt-5">
            <MaterialSocialButton
              route="https://twitter.com/intent/tweet?text=Check%20Material%20Design%20System%20made%20by%20%40CreativeTim%20%23webdesign%20%23designsystem%20%23bootstrap5&url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-design-system-pro"
              component="twitter" color="twitter" label="Tweet" />
            <MaterialSocialButton
              route="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-design-system-pro"
              component="facebook-square" color="facebook" label="Share" />
            <MaterialSocialButton route="" component="pinterest" color="pinterest" label="Pin it" />
          </div>
        </div>
      </div>
    </div> -->
  </div>
  <DefaultFooter />
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
ul {
  padding-left: 0 !important;
}
.congratulations-contact {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.congratulations-contact > div:nth-of-type(2) {
  border-right: solid 1px #ddd;
}

.congratulations-contact.groom-bride > div:nth-of-type(1) {
  margin-right: 25px;
}

.congratulations-contact.groom-bride > div:nth-of-type(2),
.congratulations-contact.groom-bride > div:nth-of-type(3) {
  padding: 0px 20px;
}

.congratulations-contact.parents > div:nth-of-type(1) {
  font-size: 12px;
  margin-right: 10px;
}

.congratulations-contact.parents > div:nth-of-type(2),
.congratulations-contact.parents > div:nth-of-type(3) {
  padding: 0px 5px;
}

.cantact-parents-container {
  display: flex;
  width: 100%;
}
.cantact-parents-container > ul {
  flex: 1;
}

.cantact-parents-container > ul > li {
  display: flex;
  justify-content: center;
  list-style: none;
  margin-bottom: 20px;
  font-size: 14px;
}
</style>

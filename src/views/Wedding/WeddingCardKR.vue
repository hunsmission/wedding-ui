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
import LanguageNavTab from "./Components/LanguageNavTab.vue";

// sections
import WeddingInvitation from "./Sections/Korean/WeddingInvitation.vue";
import WeddingInvitationMessage from "./Sections/Korean/WeddingInvitationMessage.vue";
import WeddingPhotoLayout from "./Sections/Korean/WeddingPhotoLayout.vue";
import WeddingPhotoLayout2 from "./Sections/Korean/WeddingPhotoLayout2.vue";
import WeddingContact from "./Sections/Korean/WeddingContact.vue";
import WeddingMap from "./Sections/Korean/WeddingMap.vue";
import WeddingBankAccount from "./Sections/Korean/WeddingBankAccount.vue";


import PresentationPages from "./Sections/PresentationPages.vue";
import PresentationExample from "./Sections/PresentationExample.vue";
import data from "./Sections/Data/designBlocksData";
import BuiltByDevelopers from "./Components/BuiltByDevelopers.vue";
import PresentationTestimonials from "./Sections/PresentationTestimonials.vue";
import PresentationInformation from "./Sections/PresentationInformation.vue";

//images
//import vueMkHeader from "@/assets/img/vue-mk-header.jpg";
import vueMkHeader from "@/assets/img/wedding/wedding-main2.jpg";
// import wavesWhite from "@/assets/img/waves-white.svg";
// import logoBootstrap from "@/assets/img/logos/bootstrap5.jpg";
// import logoTailwind from "@/assets/img/logos/icon-tailwind.jpg";
// import logoVue from "@/assets/img/mk-header-6.jpg";
// import logoAngular from "@/assets/img/logos/angular.jpg";
// import logoReact from "@/assets/img/logos/react.jpg";
// import logoSketch from "@/assets/img/logos/sketch.jpg";
// import WeddingPhotoExample from "../../../src/views/Wedding/Components/WeddingPhotoExample.vue";

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
    <WeddingBankAccount />

    <!-- <PresentationInformation /> -->
    <!-- <PresentationExample :data="data" /> -->
    <!-- <PresentationPages /> -->
    <!-- <BuiltByDevelopers /> -->

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

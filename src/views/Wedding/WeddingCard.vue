<script setup>
import { onMounted, onUnmounted } from "vue";
// import IconCall from "../../components/IconCall.vue";
// import IconMessage from "../../components/IconMessage.vue";

//example components
import NavbarDefault from "../../examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../examples/footers/FooterDefault.vue";
import Header from "../../examples/Header.vue";
// import FilledInfoCard from "../../examples/cards/infoCards/FilledInfoCard.vue";

//Vue components
import LagguageNavbar from "./Components/LanguageNavbar.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import MaterialSocialButton from "@/components/MaterialSocialButton.vue";
import LanguageNavTab from "./Components/LanguageNavTab.vue";

// sections
import WeddingInvitation from "./Sections/WeddingInvitation.vue";
import WeddingInvitationMessage from "./Sections/WeddingInvitationMessage.vue";
import WeddingPhotoLayout from "./Sections/WeddingPhotoLayout.vue";
import WeddingPhotoLayout2 from "./Sections/WeddingPhotoLayout2.vue";
import WeddingVideo from "./Sections/WeddingVideo.vue";
import WeddingVideoCommon from "./Sections/WeddingVideoCommon.vue";
import WeddingContact from "./Sections/WeddingContact.vue";
import WeddingMap from "./Sections/WeddingMap.vue";
import WeddingBankAccount from "./Sections/WeddingBankAccount.vue";
import WeddingCelebrationBoard from "./Sections/WeddingCelebrationBoard.vue";

import PresentationPages from "./Sections/PresentationPages.vue";
import PresentationExample from "./Sections/PresentationExample.vue";
import data from "./Sections/Data/designBlocksData";
import BuiltByDevelopers from "./Components/BuiltByDevelopers.vue";
import PresentationTestimonials from "./Sections/PresentationTestimonials.vue";
import PresentationInformation from "./Sections/PresentationInformation.vue";

//images
import vueMkHeader from "@/assets/img/wedding/wedding-main2.jpg";

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
        <LagguageNavbar />        
        <!-- <NavbarDefault :sticky="false" /> -->
        <!-- <LanguageNavTab /> -->
      </div>
    </div>
  </div>
  <Header>
    <div class="col-lg-7 mx-3 position-relative">
      <h1 class="text-left text-black pt-2 mb-n5 me-2" :style="{ display: 'inline-block ' }">
        03.25
      </h1>
    </div>
    <div class="page-header min-vh-50" :style="`background-image: url(${vueMkHeader})`" loading="lazy"></div>
  </Header>

  <!-- <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6"> -->
  <div class="card card-body shadow-blur  mx-3 mx-md-4 mt-n6">
    <WeddingInvitation />
    <WeddingInvitationMessage />
    <WeddingContact />
    <!-- <WeddingPhotoLayout /> -->
    <WeddingPhotoLayout2 />
    <WeddingVideoCommon />
    <WeddingVideo />
    <WeddingMap />
    <WeddingBankAccount />
    <!-- <WeddingBankAccount2 /> -->
    <!-- <WeddingCelebrationBoard /> -->
  </div>

  <DefaultFooter />
</template>

<script>
export default {
  name: 'Mickey & Minnie Wedding Invitation Card',
  metaInfo: {
    meta: [
      {
        property: 'og:title',
        content: '성훈♥진원 결혼 합니다'
      },
      {
        property: 'og:description',
        content: 'Mickey Love Minnie'
      },
      {
        property: 'og:image',
        content: '@/assets/img/wedding/wedding-og.jpg' 
      }
    ]
  }
}
</script>

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

.congratulations-contact>div:nth-of-type(2) {
  border-right: solid 1px #ddd;
}

.congratulations-contact.groom-bride>div:nth-of-type(1) {
  margin-right: 25px;
}

.congratulations-contact.groom-bride>div:nth-of-type(2),
.congratulations-contact.groom-bride>div:nth-of-type(3) {
  padding: 0px 20px;
}

.congratulations-contact.parents>div:nth-of-type(1) {
  font-size: 12px;
  margin-right: 10px;
}

.congratulations-contact.parents>div:nth-of-type(2),
.congratulations-contact.parents>div:nth-of-type(3) {
  padding: 0px 5px;
}

.cantact-parents-container {
  display: flex;
  width: 100%;
}

.cantact-parents-container>ul {
  flex: 1;
}

.cantact-parents-container>ul>li {
  display: flex;
  justify-content: center;
  list-style: none;
  margin-bottom: 20px;
  font-size: 14px;
}
</style>

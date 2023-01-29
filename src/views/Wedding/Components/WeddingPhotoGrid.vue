<template>
  <div id="wedding-photo">
    <div class="col-lg-7 text-left mx-auto position-relative">
      <h4 class="text-black pt-1 mb-n5 me-2" :style="{ display: 'inline-block ' }">
            Wedding Photo
          </h4>
    </div>
    <v-app id="inspire"> 
      <v-row class="ma-4">
        <v-col  cols="4" xs="1" sm="4" md="6">
          <v-img :src="weddingImg1" :lazy-src="weddingImg1" max-width="256" max-heigth="256" aspect-ratio="1"
          class="grey lighten-2" >
            <div class="fill-height bottom-gradient"></div>
          </v-img>
        </v-col>
        <v-col  cols="4" xs="1" sm="4" md="6">
          <v-img :src="weddingImg2" :lazy-src="weddingImg2" max-width="256" max-heigth="256" aspect-ratio="1"
          class="grey lighten-2" />
        </v-col>
        <v-col cols="4" xs="1" sm="4" md="6">
          <v-img :src="weddingImg3" :lazy-src="weddingImg3" max-width="256" max-heigth="256" aspect-ratio="1"
          class="grey lighten-2" />
        </v-col>
      </v-row>
      <v-row class="ma-4">
        <v-col cols="4" xs="1" sm="4" md="6">
          <v-img :src="weddingImg4" :lazy-src="weddingImg4" max-width="256" max-heigth="256" aspect-ratio="1"
            class="grey lighten-2" />
        </v-col>
        <v-col cols="4" xs="1" sm="4" md="6">
          <v-img :src="weddingImg5" :lazy-src="weddingImg5" max-width="256" max-heigth="256" aspect-ratio="1"
            class="grey lighten-2" />
        </v-col>
        <v-col cols="4" xs="1" sm="4" md="6">
          <v-img :src="weddingImg6" :lazy-src="weddingImg6" max-width="256" max-heigth="256" aspect-ratio="1"
            class="grey lighten-2" />
        </v-col>
      </v-row>
    </v-app>
  </div>
</template>

<script>
import path from 'path';

export default {
  computed: {
    weddingImg1() {
      return new URL(`../../../assets/img/wedding/wedding-1.jpg`, import.meta.url).href;
    },
    weddingImg2() {
      return new URL(`../../../assets/img/wedding/wedding-2.jpg`, import.meta.url).href;
    },
    weddingImg3() {
      return new URL(`../../../assets/img/wedding/wedding-3.jpg`, import.meta.url).href;
    },
    weddingImg4() {
      return new URL(`../../../assets/img/wedding/wedding-4.jpg`, import.meta.url).href;
    },
    weddingImg5() {
      return new URL(`../../../assets/img/wedding/wedding-5.jpg`, import.meta.url).href;
    },
    weddingImg6() {
      return new URL(`../../../assets/img/wedding/wedding-6.jpg`, import.meta.url).href;
    },
  }
}
</script>

<style scoped>
.bottom-gradient {
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.4) 0%,
    transparent 72px
  );
}

.repeating-gradient {
  background-image: repeating-linear-gradient(
    -45deg,
    rgba(255, 0, 0, 0.25),
    rgba(255, 0, 0, 0.25) 5px,
    rgba(0, 0, 255, 0.25) 5px,
    rgba(0, 0, 255, 0.25) 10px
  );
}
</style>
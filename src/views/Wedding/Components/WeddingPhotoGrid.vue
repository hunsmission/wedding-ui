<template>
  <div id="wedding-photo">
    <v-app id="inspire"> 
      <v-row>
        <v-col cols="4">
          <v-img :src="weddingImg1" :lazy-src="weddingImg1" max-width="256" max-heigth="256" aspect-ratio="1.7"
          class="grey lighten-2" />
        </v-col>
        <v-col  cols="4" xs="1" sm="4" md="6">
          <v-img :src="weddingImg2" :lazy-src="weddingImg2" max-width="256" max-heigth="256" aspect-ratio="1.7"
          class="grey lighten-2" />
        </v-col>
        <v-col cols="4" xs="1" sm="4" md="6">
          <v-img :src="weddingImg3" :lazy-src="weddingImg3" max-width="256" max-heigth="256" aspect-ratio="1"
          class="grey lighten-2" />
        </v-col>
      </v-row>
      <v-row>
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

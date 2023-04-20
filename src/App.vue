<script setup>
/*
=========================================================
* Mickey & Minnie Wedding Web 
=========================================================
*/
import { RouterView } from "vue-router";
</script>
<style>

@font-face {
    font-family: 'SUIT';
    font-weight: 200;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/sunn/SUIT-ExtraLight.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/sunn/SUIT-ExtraLight.eot?#iefix') format('embedded-opentype'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/sunn/SUIT-ExtraLight.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/sunn/SUIT-ExtraLight.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/sunn/SUIT-ExtraLight.ttf') format("truetype");
    font-display: swap;
}

body {
  margin: 0;
}

#app {
  width: 100vw;
  height: 100%;
  /* background-color: #f9b4d4; */
  /* background-color: #fbc7df; */
  background-color: #fddae9;
}
</style>
<template>
  <router-view />
</template>

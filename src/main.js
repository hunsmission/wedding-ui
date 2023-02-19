import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import materialKit from "./material-kit";

// Nucleo Icons
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// VMasonry
import MasonryWall from '@yeger/vue-masonry-wall'

// v-viewer
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'

// Naver API
import { createNaverMap } from "vue3-naver-maps";

// Vue Clipboard
import VueClipboard from 'vue3-clipboard';

// SwiperClass
import SwiperClass, { Pagination, EffectCoverflow } from 'swiper'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// Axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// Video js
import VueVideoPlayer from '@videojs-player/vue'
import 'video.js/dist/video-js.css'

// i18n
import { createI18n } from 'vue-i18n'
import i18n_ko from '@/assets/i18n/ko.json'
import i18n_en from '@/assets/i18n/en.json'

// toast
import ToastPlugin from 'vue-toast-notification';
// import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';

const vuetify = createVuetify({
  components,
  directives,
});

const messages = {
  ko: i18n_ko,
  en: i18n_en
}

const i18n = createI18n({
  locale: 'ko',
  messages
})


const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(materialKit);
app.use(vuetify);
app.use(MasonryWall)
app.use(VueViewer)
app
  .use(createNaverMap, {
    clientId: "9e0m070dq8", // Required
    category: "ncp", // Optional
    subModules: [],  // Optional, "panorama" | "geocoder" | "drawing" | "visualization"
  })
app.use(VueClipboard, {
  autoSetContainer: true,
  appendToBody: true,
})
SwiperClass.use(Pagination, EffectCoverflow);
app.use(VueAwesomeSwiper);
app.use(VueAxios, axios);
app.config.globalProperties.axios = axios;
app.use(VueVideoPlayer)
app.use(i18n);
app.use(ToastPlugin, {
  position: 'bottom',
  duration: 3000
});
app.mount("#app");

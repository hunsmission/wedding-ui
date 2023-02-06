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
//import { VueMasonryPlugin } from "vue-masonry";
import MasonryWall from '@yeger/vue-masonry-wall'

// v-viewer
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'

// Naver API
import { createNaverMap } from "vue3-naver-maps";

// Vue Clipboard
import VueClipboard from 'vue3-clipboard';

const vuetify = createVuetify({
    components,
    directives,
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(materialKit);
app.use(vuetify);
//app.use(VueMasonryPlugin)
app.use(MasonryWall)
app.use(VueViewer)
app
  .use(createNaverMap, {
    clientId: "9e0m070dq8", // Required
    category: "ncp", // Optional
    subModules: [], // Optional, "panorama" | "geocoder" | "drawing" | "visualization"
  })

app.use(VueClipboard, {
    autoSetContainer: true,
    appendToBody: true,
  })
app.mount("#app");

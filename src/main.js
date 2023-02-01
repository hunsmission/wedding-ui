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


const vuetify = createVuetify({
    components,
    directives,
});

// var Vue = require('vue')
// var VueRouter = require('vue-router')
// Vue.use(require('vue-resource'));
// Vue.use(require('vue-router'));

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(materialKit);
app.use(vuetify);
//app.use(VueMasonryPlugin)
app.use(MasonryWall)
app.use(VueViewer)
app.mount("#app");

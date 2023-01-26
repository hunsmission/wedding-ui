import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import vuetify from '@/vuetify'

// Nucleo Icons
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";

import materialKit from "./material-kit";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(materialKit);
app.mount("#app");

new Vue({
    vuetify,
}).mount("#wedding-photo");
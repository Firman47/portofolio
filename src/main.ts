import "./assets/css/style.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

app.use(router);

app.mount("#app");

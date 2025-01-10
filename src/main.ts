import "./assets/css/style.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import AnimateOnScroll from "primevue/animateonscroll";
import AOS from "aos";
import "aos/dist/aos.css";

const app = createApp(App);

AOS.init();

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

app.directive("animateonscroll", AnimateOnScroll);

app.use(router);

app.mount("#app");

<template>
  <html>
    <Headers @theme_mode="theme_mode" />
    <RouterView />
    <Cta />
    <Footers />
  </html>
</template>
<style>
.bg-gradient {
  background: rgb(255, 121, 198);
  background: -moz-radial-gradient(
    circle,
    rgba(255, 121, 198, 0.05103291316526615) 0%,
    rgba(40, 42, 54, 0.3983718487394958) 35%,
    rgba(40, 42, 54, 1) 100%
  );
  background: -webkit-radial-gradient(
    circle,
    rgba(255, 121, 198, 0.05103291316526615) 0%,
    rgba(40, 42, 54, 0.3983718487394958) 35%,
    rgba(40, 42, 54, 1) 100%
  );
  background: radial-gradient(
    circle,
    rgba(255, 121, 198, 0.05103291316526615) 0%,
    rgba(40, 42, 54, 0.3983718487394958) 35%,
    rgba(40, 42, 54, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff79c6",endColorstr="#282a36",GradientType=1);
}
</style>
<script setup lang="ts">
import Headers from "@/components/layout/Header.vue";
import Footers from "@/components/layout/Footer.vue";
import Cta from "./components/layout/Cta.vue";
import { RouterLink, RouterView } from "vue-router";
import { ref, watchEffect, onMounted, watch } from "vue";
// import AOS from "aos/dist/aos.js";

const theme = ref(localStorage.getItem("theme") || "dracula");

const theme_mode = () => {
  if (theme.value == "light") {
    theme.value = "dracula";
  } else {
    theme.value = "light";
  }
};
// Watch perubahan pada theme dan update elemen <html> setiap kali theme berubah
watch(theme, (newValue) => {
  document.documentElement.setAttribute("data-theme", newValue);
  localStorage.setItem("theme", newValue);
});

// Set tema awal ketika komponen di-mount
onMounted(async () => {
  document.documentElement.setAttribute("data-theme", theme.value);
  document.documentElement.classList.add("scroll-smooth");
});
</script>
<!--Start of Tawk.to Script-->

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
onMounted(() => {
  document.documentElement.setAttribute("data-theme", theme.value);
});

onMounted(() => {
  var Tawk_API: any = Tawk_API || {},
    Tawk_LoadStart = new Date();
  (function () {
    var s1 = document.createElement("script"),
      s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/671724e32480f5b4f59112eb/1iap6g6qj";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);
  })();
});
</script>
<!--Start of Tawk.to Script-->

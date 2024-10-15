<template>
  <html>
    <Headers @theme_mode="theme_mode" />
    <RouterView />
    <Footers />

    <div
      class="fixed top-0 left-0 w-full h-screen -z-20 bg-gradient hidden"
      :class="[theme == 'dracula' ? '' : 'hidden']"
    ></div>
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
import { RouterLink, RouterView } from "vue-router";
import Headers from "@/components/layout/Header.vue";
import Footers from "@/components/layout/Footer.vue";
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
</script>

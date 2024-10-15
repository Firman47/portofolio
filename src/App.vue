<template>
  <html>
    <Headers @theme_mode="theme_mode" />
    <RouterView />
    <Footers />
  </html>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Headers from "./components/layout/Header.vue";
import Footers from "./components/layout/Footer.vue";
import { ref, watchEffect, onMounted, watch } from "vue";
const theme = ref(localStorage.getItem("theme") || "light");

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

<template>
  <main class="">
    <Hero />
    <About />
    <Skill />
    <Project />
  </main>
</template>

<script setup lang="ts">
import Skill from "./Skill.vue";
import Hero from "./Hero.vue";
import About from "./About.vue";
import Project from "./Project.vue";
import { ref } from "vue";

const tab = ref("skil");
</script>

<template>
  <div
    class="card card-compact hover:bg-base-200 w-full sm:w-72 border border-base-300"
  >
    <figure>
      <img :src="img" alt="news" />
    </figure>

    <div class="card-body">
      <h1 class="card-title">{{ title }}</h1>

      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>

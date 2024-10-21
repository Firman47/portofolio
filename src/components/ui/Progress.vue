<template>
  <div class="">
    <div class="flex justify-between items-center text-base">
      <p class="">{{ title }}</p>
      <p class="text-end">{{ value }}%</p>
    </div>
    <progress
      class="progress progress-primary w-full"
      :value="value"
      :max="max"
    ></progress>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  title: {
    type: String,
    required: true, // Jika value harus ada
  },
  value: {
    type: Number,
    required: true, // Jika value harus ada
  },
  max: {
    type: Number,
    default: 100, // Nilai default untuk max
  },
});
</script>

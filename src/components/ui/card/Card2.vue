<template>
  <div class="px-4 sm:px-8 py-2 bg-base-200 border border-base-300 rounded-lg">
    {{ title }}
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface props {
  title: string;
  btn?: string;
}

const props = defineProps<props>();
</script>

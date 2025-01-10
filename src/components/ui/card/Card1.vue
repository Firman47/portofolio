<template>
  <div class="card bg-base-100 border-[.6px] border-neutral">
    <div class="card-body p-6">
      <h2 class="card-title" v-if="title">
        {{ title }}
      </h2>
      <slot></slot>
      <div class="card-actions justify-end" v-if="btn">
        <button class="btn btn-primary">{{ btn }}</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface props {
  title?: string;
  btn?: string;
}

const props = defineProps<props>();
</script>

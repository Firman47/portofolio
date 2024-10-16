<template>
  <div
    :class="[
      'flex items-center justify-center text-center  last:border-r-0 relative w-40 sm:w-32 h-32 rounded-md p-2  bg-base-200 hover:bg-base-300 cursor-pointer',
      className,
    ]"
    :onclick="name + '.showModal()'"
  >
    <div
      class="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-lg"
    >
      +
    </div>
    <h1 class="text-base font-normal">
      {{ title }}
    </h1>
  </div>

  <dialog :id="name" class="modal">
    <div class="modal-box">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
      </form>
      <h3 class="text-lg font-bold">{{ title }}</h3>
      <p class="py-4">
        <slot></slot>
      </p>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>
<style>
.last-border-r-0:last-child {
  border: 0;
}
</style>
<script setup lang="ts">
import { ref } from "vue";
import { defineProps } from "vue";

// Define props interface
interface Props {
  name: string;
  title: string;
  className?: string;
}

const props = defineProps<Props>();
</script>

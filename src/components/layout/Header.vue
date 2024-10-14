<template>
  <header
    class="w-full h-16 px-responsive flex items-center justify-between bg-base-200 relative"
  >
    <h1 class="text-2xl font-black">Logo</h1>

    <nav
      :class="[
        'flex flex-col gap-4 w-60 p-4 sm:p-0 items-center justify-center rounded-md absolute bg-base-200  top-20 transition-all duration-500 sm:w-auto sm:flex-row sm:static sm:bg-white/0 sm:hidden',
        isActive ? 'right-4' : '-right-full',
      ]"
    >
      <div class="flex items-center justify-between btn btn-block btn-primary">
        <a href="" class=""> Home </a>
        <right class="w-4 h-4 fill-current" />
      </div>

      <div class="flex items-center justify-between btn btn-block btn-ghost">
        <a href="" class="">About </a>
        <right class="w-4 h-4 fill-current" />
      </div>
      <div class="flex items-center justify-between btn btn-block btn-ghost">
        <a href="" class="">Project </a>
        <right class="w-4 h-4 fill-current" />
      </div>
      <div class="flex items-center justify-between btn btn-block btn-ghost">
        <a href="" class="">Contact </a>
        <right class="w-4 h-4 fill-current" />
      </div>

      <label class="grid cursor-pointer place-items-center">
        <input
          type="checkbox"
          @click="emit('theme_mode')"
          class="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
        />
        <svg
          class="stroke-base-100 fill-base-100 col-start-1 row-start-1"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <path
            d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
          />
        </svg>
        <svg
          class="stroke-base-100 fill-base-100 col-start-2 row-start-1"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </label>
    </nav>

    <nav
      :class="[
        'flex flex-col gap-4 w-60 p-4 sm:p-0 items-center justify-center rounded-md absolute bg-base-200  top-20 transition-all duration-500 sm:w-auto sm:flex-row sm:static sm:bg-white/0 hidden sm:flex',
        isActive ? 'right-4' : '-right-full',
      ]"
    >
      <div class="btn btn-primary">
        <a href="" class=""> Home </a>
      </div>

      <div class="btn btn-ghost">
        <a href="" class="">About </a>
      </div>
      <div class="btn btn-ghost">
        <a href="" class="">Project </a>
      </div>
      <div class="btn btn-ghost">
        <a href="" class="">Contact </a>
      </div>

      <label class="grid cursor-pointer place-items-center">
        <input
          type="checkbox"
          @click="emit('theme_mode')"
          class="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
        />
        <svg
          class="stroke-base-100 fill-base-100 col-start-1 row-start-1"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <path
            d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
          />
        </svg>
        <svg
          class="stroke-base-100 fill-base-100 col-start-2 row-start-1"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </label>
    </nav>
    <label class="swap swap-rotate sm:hidden">
      <input type="checkbox" @click="togle" />

      <!-- hamburger icon -->
      <svg
        class="swap-off fill-current"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 512 512"
      >
        <path
          d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"
        />
      </svg>

      <!-- close icon -->
      <svg
        class="swap-on fill-current"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 512 512"
      >
        <polygon
          points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
        />
      </svg>
    </label>
  </header>
</template>

<style>
.px-responsive {
  @apply px-4 sm:px-20 md:px-32;
  box-sizing: border-box;
}

nav a {
  @apply font-semibold text-lg;
}
</style>

<script setup lang="ts">
import right from "../icon/right.vue";
import { ref, defineEmits } from "vue";
const emit = defineEmits(["theme_mode"]);

// State untuk toggle navigasi
const isActive = ref(false);

// Fungsi toggle untuk memunculkan/menyembunyikan nav
const togle = () => {
  isActive.value = !isActive.value;
  console.log(isActive.value);
};

const mode = () => {};
</script>

<template>
  <header
    class="w-full h-16 px-responsive flex items-center justify-between bg-base-100/95 fixed z-20"
  >
    <h1 class="text-2xl font-black text-primary">FIRMAN.</h1>

    <!-- mobile -->
    <nav
      :class="[
        'z-20 mobile flex flex-col gap-4 w-60 p-4 sm:p-0 items-center justify-center  rounded-lg absolute bg-base-100 top-20 transition-all duration-500 sm:w-auto sm:flex-row sm:static sm:bg-white/0 sm:hidden',
        isActive ? 'right-4' : '-right-full',
      ]"
    >
      <a
        href="#home"
        :class="['btn-nav', activeSection === 'home' ? ' btn-nav-active' : '']"
        >Home
        <RightIcon class="" />
      </a>
      <a
        href="#about"
        :class="['btn-nav', activeSection === 'about' ? ' btn-nav-active' : '']"
        >About
        <RightIcon class="" />
      </a>
      <a
        href="#skill"
        :class="['btn-nav', activeSection === 'skill' ? ' btn-nav-active' : '']"
        >Skill
        <RightIcon class="" />
      </a>
      <a
        href="#news"
        :class="['btn-nav', activeSection === 'news' ? 'btn-nav-active' : '']"
        >News
        <RightIcon class="" />
      </a>

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
    <!-- mobile -->

    <nav
      :class="[
        ' flex-col gap-8 w-60 font-medium p-4 sm:p-0 items-center justify-center rounded-md absolute bg-base-200  top-20 transition-all duration-500 sm:w-auto sm:flex-row sm:static sm:bg-white/0 hidden sm:flex ',
        isActive ? 'right-4' : '-right-full',
      ]"
    >
      <a
        href="#home"
        :class="['', activeSection === 'home' ? ' text-primary' : '']"
      >
        Home
      </a>

      <a
        href="#about"
        :class="['', activeSection === 'about' ? ' text-primary' : '']"
        >About
      </a>

      <a
        href="#skill"
        :class="['', activeSection === 'skill' ? ' text-primary' : '']"
        >Skill
      </a>

      <!-- <a
        href="#project"
        :class="['', activeSection === 'project' ? ' text-primary' : '']"
        >Project
      </a> -->

      <a
        href="#news"
        :class="['', activeSection === 'news' ? ' text-primary' : '']"
        >News</a
      >

      <div class="w-[0.8px] h-8 rounded-sm bg-neutral"></div>

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
      <input type="checkbox" @click="togle" v-model="isActive" />

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

  <div
    :class="[
      'bg-base-300/50 w-full h-screen fixed top-0 sm:hidden z-10 transition-all duration-500',
      isActive ? '' : 'hidden',
    ]"
    @click="togle"
  ></div>
</template>

<style>
.mobile .btn-nav {
  @apply flex items-center justify-between w-full p-3 py-2 rounded-md;
}
.mobile .btn-nav:hover {
  @apply bg-neutral text-white;
}
.mobile .btn-nav.btn-nav-active {
  @apply bg-neutral text-white;
}

.btn-nav {
  @apply p-3 py-2 rounded-md;
}
.btn-nav:hover {
  @apply bg-neutral text-white;
}
.btn-nav.btn-nav-active {
  @apply bg-neutral text-white;
}
.no-scroll {
  @apply overflow-hidden sm:overflow-visible;
}
</style>

<script setup lang="ts">
import RightIcon from "@/components/icon/Right.vue";
import {
  ref,
  defineEmits,
  watch,
  watchEffect,
  onMounted,
  onUnmounted,
} from "vue";

const isActive = ref(false);
const emit = defineEmits(["theme_mode"]);

watchEffect(() => {
  if (isActive.value) {
    document.body.classList.add("no-scroll"); // Menambahkan class saat menu aktif
  } else {
    document.body.classList.remove("no-scroll"); // Menghapus class saat menu ditutup
  }
});

const togle = () => {
  isActive.value = !isActive.value;
};

const activeSection: any = ref("home");

const handleScroll = () => {
  const sections = document.querySelectorAll("section");
  let scrollPos = window.scrollY + window.innerHeight / 2;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollPos >= top && scrollPos < top + height) {
      activeSection.value = id;
    }
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

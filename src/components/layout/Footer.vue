<template>
  <section
    class="w-full py-16 px-responsive"
    data-aos="fade-up"
    data-aos-duration="800"
    data-aos-offset="300"
    data-aos-easing="ease-in-out"
  >
    <div
      class="bg-base-200 rounded-xl px-12 py-8 flex flex-col gap-4 justify-between items-center border border-base-300"
    >
      <h1 class="text-3xl font-bold">Lorem ipsum dolor sit amet.</h1>
      <p class="max-w-[580px]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed quos
        consequatur repudiandae vel reiciendis ratione obcaecati? Rem, suscipit.
      </p>
      <button class="btn btn-primary">Submit</button>
    </div>
  </section>

  <footer class="footer items-center px-responsive relative py-16 text-current">
    <aside class="grid-flow-col items-center">
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        class="fill-current"
      >
        <path
          d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"
        ></path>
      </svg>
      <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
    </aside>

    <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <a> <Youtube /> </a>
      <a> <Facebook /> </a>
      <a> <Twitter /> </a>
    </nav>
  </footer>
</template>

<script setup lang="ts">
import Buttons from "primevue/button";
import { Facebook, Twitter, Youtube } from "../icon/index";
</script>

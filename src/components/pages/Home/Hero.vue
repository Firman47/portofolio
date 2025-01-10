<template>
  <section
    class="max-w-[580px] px-4 sm:px-0 px-responsive m-auto text-center w-full flex flex-col items-center justify-center gap-6 py-24 box-border"
    id="home"
    data-aos="zoom-in"
    data-aos-offset="200"
    data-aos-duration="500"
    data-aos-easing="ease-in-out"
    data-aos-once="false"
  >
    <div
      class="flex w-fit items-center justify-center gap-2 px-8 py-2 b bg-base-200 rounded-full"
      data-aos="zoom-in"
      data-aos-delay="50"
      data-aos-offset="200"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
    >
      <!-- animatin ping -->

      <!-- animatin ping -->

      <span> Lorem ipsum dolor sit amet.</span>
    </div>

    <h1
      class="text-3xl sm:text-4xl font-bold"
      data-aos="zoom-in"
      data-aos-delay="100"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
    >
      I’m <span class="text-primary">Firman</span>, a Web Developer Crafting
      Unique and Engaging Digital Experiences.
    </h1>

    <div
      class="flex gap-4"
      data-aos="zoom-in"
      data-aos-delay="150"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
    >
      <button class="btn btn-primary">See My Work</button>
      <button class="btn btn-neutral">Contact Me</button>
    </div>

    <div
      class="stats stats-vertical sm:stats-horizontal mt-4 bg-base-200"
      data-aos="zoom-in"
      data-aos-delay="200"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
    >
      <div class="stat place-items-center">
        <div class="stat-title">Downloads</div>
        <div class="stat-value">31K</div>
        <div class="stat-desc">From January 1st to February 1st</div>
      </div>

      <div class="stat place-items-center">
        <div class="stat-title">Users</div>
        <div class="stat-value text-secondary">4,200</div>
        <div class="stat-desc text-secondary">↗︎ 40 (2%)</div>
      </div>

      <div class="stat place-items-center">
        <div class="stat-title">New Registers</div>
        <div class="stat-value">1,200</div>
        <div class="stat-desc">↘︎ 90 (14%)</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
</script>

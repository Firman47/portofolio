<template>
  <section class="px-responsive py-16 space-y-8" id="news">
    <div
      class="w-full flex flex-col justify-center text-center"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
    >
      <h1 class="text-3xl font-bold text-primary">News</h1>
      <p>Lorem, ipsum.</p>
    </div>

    <div
      class="flex gap-4 justify-center flex-col sm:flex-row flex-wrap w-full *:"
    >
      <Card3
        img="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        title="Mantap Jiwa"
        data-aos="fade-left"
        data-aos-offset="280"
        data-aos-duration="500"
        data-aos-delay="400"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
      >
        <p class="line-clamp-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          officiis iure molestias magni in voluptatem culpa nulla exercitationem
          qui vel.
        </p>
      </Card3>

      <Card3
        img="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        title="Mantap Jiwa"
        data-aos="fade-left"
        data-aos-offset="280"
        data-aos-duration="500"
        data-aos-delay="200"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
      >
        <p class="line-clamp-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          officiis iure molestias magni in voluptatem culpa nulla exercitationem
          qui vel.
        </p>
      </Card3>

      <Card3
        img="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        title="Mantap Jiwa"
        data-aos-offset="280"
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
      >
        <p class="line-clamp-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          officiis iure molestias magni in voluptatem culpa nulla exercitationem
          qui vel.
        </p>
      </Card3>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Card3 } from "@/components/ui";
</script>

<template>
  <section
    class="w-full px-responsive flex flex-col gap-8 items-start py-16 duration-1000"
    id="about"
  >
    <div
      class="w-full flex flex-col justify-center text-center duration-500 ease-in-out"
      data-aos="fade-up"
      data-aos-offset="280"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-delay="50"
      data-aos-once="false"
    >
      <h1 class="text-3xl font-bold text-primary">About Me</h1>
      <p>Lorem, ipsum.</p>
    </div>

    <div
      class="flex gap-6 w-full flex-col sm:flex-row justify-center items-center h-full"
    >
      <!-- <div
        class="w-fit sm:w-max flex flex-row sm:flex-col bg-base-200 p-3 rounded-lg justify-center sm:justify-center items-center gap-2"
      >
        <Facebook />
        <Youtube />
        <Twitter />
      </div> -->

      <div
        class="flex flex-col gap-4 w-full sm:w-1/2 duration-700 ease-in-out"
        data-aos="fade-right"
        data-aos-offset="280"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-delay="150"
        data-aos-once="false"
      >
        <div class="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div class="collapse-title text-xl font-medium">Prinsip Kerja</div>
          <div class="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div class="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div class="collapse-title text-xl font-medium">Aspirasi</div>
          <div class="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div class="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div class="collapse-title text-xl font-medium">Hobi dan Minat</div>
          <div class="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>

      <Card1
        class="flex text-center sm:text-w-full sm:w-1/2 sm:text-start"
        data-aos="fade-left"
        data-aos-offset="280"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-delay="150"
        data-aos-once="false"
      >
        Halo! Nama saya [Nama], seorang developer yang berdedikasi dari
        [Kota/Negara]. Saya lulus dari [Nama Sekolah/Universitas] dengan gelar
        di bidang [Jurusan], dan sejak itu, saya fokus untuk menciptakan solusi
        perangkat lunak yang bermanfaat dan berdampak. Saya sangat antusias
        dalam dunia pemrograman dan selalu berusaha mengikuti perkembangan
        teknologi terbaru.
      </Card1>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Facebook, Twitter, Youtube } from "@/components/icon";
import { Card2, Card1 } from "@/components/ui";
import { onMounted, ref } from "vue";

const tab = ref("skil");
</script>

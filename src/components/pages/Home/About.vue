<template>
  <section class="w-full px-responsive flex flex-col gap-8 items-start py-16">
    <div class="w-full flex flex-col justify-center text-center">
      <h1 class="text-3xl font-bold text-primary">About Me</h1>
      <p>Lorem, ipsum.</p>
    </div>

    <div
      class="flex gap-6 w-full flex-col sm:flex-row justify-center items-center"
    >
      <div
        class="w-fit sm:w-max flex flex-row sm:flex-col bg-base-200 p-3 rounded-lg justify-center sm:justify-center items-center gap-2"
      >
        <Facebook />
        <Youtube />
        <Twitter />
      </div>

      <Card1 class="flex text-center sm:text-w-full sm:w-1/2 sm:text-start">
        Halo! Nama saya [Nama], seorang developer yang berdedikasi dari
        [Kota/Negara]. Saya lulus dari [Nama Sekolah/Universitas] dengan gelar
        di bidang [Jurusan], dan sejak itu, saya fokus untuk menciptakan solusi
        perangkat lunak yang bermanfaat dan berdampak. Saya sangat antusias
        dalam dunia pemrograman dan selalu berusaha mengikuti perkembangan
        teknologi terbaru.
      </Card1>

      <div class="flex flex-col gap-2 w-full sm:w-1/2">
        <div
          class="flex justify-between items-center gap-2 bg-base-200 rounded-lg p-3 text-base"
        >
          <p>Pengalaman</p>
          <button class="btn btn-xs btn-primary">+</button>
        </div>

        <div
          class="flex justify-between items-center gap-2 bg-base-200 rounded-lg p-3 text-base"
        >
          <p>Prinsip Kerja</p>
          <button class="btn btn-xs btn-primary">+</button>
        </div>

        <div
          class="flex justify-between items-center gap-2 bg-base-200 rounded-lg p-3 text-base"
        >
          <p>Aspirasi</p>
          <button class="btn btn-xs btn-primary">+</button>
        </div>

        <div
          class="flex justify-between items-center gap-2 bg-base-200 rounded-lg p-3 text-base"
        >
          <p>Hobi dan Minat</p>
          <button class="btn btn-xs btn-primary">+</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Facebook, Twitter, Youtube } from "@/components/icon";
import { Card2, Card1 } from "@/components/ui";
import { ref } from "vue";

const tab = ref("skil");
</script>

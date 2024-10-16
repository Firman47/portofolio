<template>
  <section class="px-responsive py-32 flex flex-col gap-6">
    <h1
      class="text-3xl font-bold flex items-center text-primary w-full md:hidden justify-center"
    >
      About Me
    </h1>
    <div
      class="flex flex-col-reverse md:flex-row justify-between items-center gap-6 lg:gap-32"
    >
      <div class="w- flex flex-col gap-4">
        <h1
          class="text-3xl font-bold md:flex items-center text-primary w-full hidden"
        >
          About Me
        </h1>

        <p class="text-center md:text-start">
          Berikut adalah contoh konten "About" section untuk perorangan: About
          Me Hi, my name is [Nama Kamu], a passionate [profesi kamu, misalnya:
          web developer, desainer grafis, atau penulis konten] based in [Lokasi
          kamu, misalnya: Jakarta, Indonesia]. With over [jumlah tahun
          pengalaman] years of experience, I specialize in [keahlian utama,
          misalnya: front-end development, UI/UX design, atau menulis artikel
          SEO], and I enjoy creating innovative solutions for digital
          challenges.
        </p>

        <div
          class="flex w-full gap-4 flex-wrap justify-center md:justify-start"
        >
          <Modal1 name="one" title="Background & Experience">
            I hold a [nama gelar pendidikan kamu, misalnya: Bachelor's Degree in
            Computer Science] from [nama universitas], and have worked with
            various clients and companies, helping them develop impactful
            digital products. Over the years, I’ve honed my skills in [bidang
            spesifik, misalnya: Vue.js, React, atau Figma], working on projects
            ranging from [contoh proyek, misalnya: building interactive websites
            to designing engaging mobile apps].
          </Modal1>

          <Modal1 name="two" title="My Values">
            I believe in the power of [nilai atau prinsip, misalnya: simplicity
            and functionality]. Whether I’m building a website or designing a
            user interface, my goal is to create experiences that are [nilai
            yang kamu pegang, misalnya: intuitive, user-friendly, and
            effective]. I’m always committed to [filosofi kamu, misalnya:
            continuous learning and improvement], and I approach every project
            with a focus on [aspek penting, misalnya: user satisfaction and
            attention to detail].
          </Modal1>

          <Modal1 name="three" title="Achievements">
            Throughout my career, I’ve been fortunate to be recognized for
            [pencapaian atau penghargaan, misalnya: my contributions in web
            development or design], including [sebutkan penghargaan atau proyek
            yang menonjol].
          </Modal1>

          <Modal1 name="four" title="Hobbies & Interests">
            When I’m not working, I love spending time [minat atau hobi,
            misalnya: learning new programming languages, traveling, or
            exploring nature through photography]. These activities not only
            recharge me but also provide fresh perspectives that I can bring
            into my work.
          </Modal1>
        </div>
      </div>

      <div class="h-80 w-full sm:min-w-80 bg sm:w-80 bg-base-200"></div>
    </div>
  </section>
</template>

<style>
.about-card {
  @apply w-28 h-28 flex  items-center justify-center  bg-base-100 p-4 rounded-md text-center;
}
</style>

<script setup lang="ts">
import Modal1 from "@/components/modal/Modal1.vue";
</script>

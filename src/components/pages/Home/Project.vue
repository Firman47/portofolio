<template>
  <section class="px-responsive py-16 space-y-8">
    <div class="w-full flex flex-col justify-center text-center">
      <h1 class="text-3xl font-bold text-primary">Project</h1>
      <p>Lorem, ipsum.</p>
    </div>

    <div class="flex gap-4 justify-center flex-col sm:flex-row flex-wrap">
      <div class="card card-compact bg-base-200 w-full sm:w-80">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>

        <div class="card-body">
          <h1 class="card-title">Project1</h1>
          <div class="scrollbar" id="style-4">
            <div class="force-overflow"></div>
          </div>
          <div class="flex gap-2 flex-nowrap overflow-auto hide-scrollbar">
            <div class="btn btn-sm btn-neutral">HTML</div>
            <div class="btn btn-sm btn-neutral">HTML</div>
            <div class="btn btn-sm btn-neutral">HTML</div>
            <div class="btn btn-sm btn-neutral">HTML</div>
            <div class="btn btn-sm btn-neutral">HTML</div>
            <div class="btn btn-sm btn-neutral">HTML</div>
          </div>

          <p class="line-clamp-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
            officiis iure molestias magni in voluptatem culpa nulla
            exercitationem qui vel.
          </p>

          <div class="card-actions justify-end flex">
            <button class="btn btn-neutral">Watch</button>

            <button class="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>

      <div class="card card-compact bg-base-200 w-full sm:w-80">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>

        <div class="card-body">
          <h1 class="card-title">Project1</h1>
          <div class="scrollbar" id="style-4">
            <div class="force-overflow"></div>
          </div>
          <div class="flex gap-2 flex-nowrap overflow-auto hide-scrollbar">
            <div class="btn btn-sm btn-neutral">HTML</div>
            <div class="btn btn-sm btn-neutral">HTML</div>
            <div class="btn btn-sm btn-neutral">HTML</div>
            <div class="btn btn-sm btn-neutral">HTML</div>
            <div class="btn btn-sm btn-neutral">HTML</div>
            <div class="btn btn-sm btn-neutral">HTML</div>
          </div>

          <p class="line-clamp-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
            officiis iure molestias magni in voluptatem culpa nulla
            exercitationem qui vel.
          </p>

          <div class="card-actions justify-end flex">
            <button class="btn btn-neutral">Watch</button>

            <button class="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>

      <div class="card card-compact bg-base-200 w-full sm:w-80">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>

        <div class="card-body">
          <h1 class="card-title">Project1</h1>
          <div class="scrollbar" id="style-4">
            <div class="force-overflow"></div>
          </div>
          <div class="flex gap-2 flex-nowrap overflow-auto hide-scrollbar">
            <div class="btn btn-sm btn-neutral">HTML</div>
            <div class="btn btn-sm btn-neutral">HTML</div>
            <div class="btn btn-sm btn-neutral">HTML</div>
            <div class="btn btn-sm btn-neutral">HTML</div>
            <div class="btn btn-sm btn-neutral">HTML</div>
            <div class="btn btn-sm btn-neutral">HTML</div>
          </div>

          <p class="line-clamp-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
            officiis iure molestias magni in voluptatem culpa nulla
            exercitationem qui vel.
          </p>

          <div class="card-actions justify-end flex">
            <button class="btn btn-neutral">Watch</button>

            <button class="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Card2 } from "@/components/ui";
import { RightArrow, MenuDots } from "@/components/icon";
</script>

<style>
.hide-scrollbar {
  -ms-overflow-style: none; /* Untuk Internet Explorer dan Edge */
  scrollbar-width: none; /* Untuk Firefox */
}

.custom-scrollbar::-webkit-scrollbar {
  width: 4px; /* Lebar scrollbar */
  height: 4px; /* Tinggi scrollbar horizontal */
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.5); /* Warna scrollbar */
  border-radius: 20px; /* Radius untuk scrollbar */
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent; /* Warna track scrollbar */
}
</style>

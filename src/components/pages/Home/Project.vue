<template>
  <section class="px-responsive py-16 space-y-8 w-full" id="project">
    <div class="w-full flex flex-col justify-center text-center">
      <h1 class="text-3xl font-bold text-primary">Project</h1>
      <p>Lorem, ipsum.</p>
    </div>

    <div class="flex gap-4">
      <div class="card card-compact bg-base-200 w-full sm:w-1/2">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            class="object-cover w-full"
          />
        </figure>

        <div class="card-body p-0 gap-3">
          <h1 class="card-title gap-0 leading-none">Project1</h1>

          <p class="line-clamp-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
            officiis iure molestias magni in voluptatem culpa nulla
            exercitationem qui vel.
          </p>

          <div class="card-actions justify-start flex">
            <button class="btn btn-neutral btn-sm">Watch</button>

            <button class="btn btn-primary btn-sm">Watch</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Card2 } from "@/components/ui";
import { RightArrow, MenuDots } from "@/components/icon";
import { onMounted, ref } from "vue";
import axios from "axios";

const projects: any = ref([]);

const fetchProjects = async () => {
  try {
    const response = await axios.get("http://localhost:3000/project");
    projects.value = response.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
};

onMounted(() => {
  fetchProjects();
});
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

<template>
  <section
    class="w-full px-responsive flex flex-col gap-8 items-start py-16"
    id="skill"
  >
    <div class="w-full flex flex-col justify-center text-center">
      <h1 class="text-3xl font-bold text-primary">Skill</h1>
      <p>Lorem, ipsum.</p>
    </div>

    <div
      class="flex gap-2 max-w-[500px] m-auto flex-wrap justify-center items-center"
    >
      <Card2 title="HTML" />
      <Card2 title="CSS" />
      <Card2 title="JavaScript " />
      <Card2 title="Java" />
      <Card2 title="Quarkus" />
      <Card2 title="Vue.js " />
      <Card2 title="TypeScript  " />
      <Card2 title="PHP" />
      <Card2 title="Laravel" />
      <Card2 title="PostgreSQL" />
      <Card2 title="GraphQL" />
      <Card2 title="Tailwind CSS" />
      <Card2 title="Bootstrap" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { Card2, Card1 } from "@/components/ui";
import { Info, IHTML } from "@/components/icon";
</script>

<template>
  <div class="flex font-mono text-4xl justify-start font-bold ml-10 mt-20">
    Copun
  </div>
  <div
    class="flex justify-between items-center space-x-2 lg:mt-10 md:mt-4 mt-10 mb-40 mx-10"
  >
    <CopunCard
      v-for="item in 3"
      :image-url="images[item - 1]"
      :imageText="'Glasess'"
      :key="item"
    />
  </div>
  <div
    class="flex justify-between items-center space-x-2 lg:mt-10 md:mt-4 mt-10 mb-40 mx-10"
  >
    <CopunCard
      v-for="item in 3"
      :image-url="images[item - 1]"
      :imageText="'Glasess'"
      :key="item"
    />
  </div>
</template>

<script setup lang="ts">
import CopunCard from '@/components/home/CopunCard.vue';
const images = ['copun1.png', 'copun2.png', 'copun1.png'];
</script>

<style scoped></style>

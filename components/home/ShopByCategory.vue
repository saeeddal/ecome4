<template>
  <div class="flex font-mono text-2xl justify-start font-bold ml-40">
    Shop by Category
  </div>

  <div
    class="flex justify-center items-center space-x-4 lg:mt-10 md:mt-4 mt-10 mb-10"
  >
    <button
      style="
        margin-right: -1.5rem;
        z-index: 4;
        border-radius: 50%;
        background-color: #d1d1d1;
        height: 2rem;
        width: 2rem;
        text-align: center;
      "
      class="flex flex-col justify-center items-center"
    >
      <img src="/images/home//next.png" />
    </button>
    <ShopByCategoryCard
      v-for="item in 6"
      :image-url="images[item - 1]"
      :imageText="'Glasess'"
      :key="item"
    />
    <button
      style="
        margin-left: -1rem;
        z-index: 4;
        border-radius: 50%;
        background-color: #d1d1d1;
        height: 2rem;
        width: 2rem;
        text-align: center;
      "
      class="flex flex-col justify-center items-center"
    >
      <img src="/images/home//Previous.png" />
    </button>
  </div>
</template>

<script setup lang="ts">
import ShopByCategoryCard from '@/components/home/ShopByCategoryCard.vue';
const images = [
  'laptop.png',
  'cat1.png',
  'chair.png',
  'desk.png',
  'laptop.png',
  'cat1.png',
];
</script>

<style scoped></style>

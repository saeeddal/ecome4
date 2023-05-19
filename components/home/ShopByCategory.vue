<template>
  <div class="ml-20 mr-20 my-20 flex flex-col items-center overscroll-x-none">
    <p class="font-mono text-2xl justify-start font-bold">Shop by Category</p>
    <div class="flex justify-between items-center space-x-4 lg:mt-10 md:-mt-4">
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
        <img src="@/assets/images/home/next.png" />
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
        <img src="@/assets/images/home/Previous.png" />
      </button>
    </div>
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

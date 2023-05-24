<template>
  <div class="flex font-mono text-2xl justify-start font-bold ml-40">
    All Of Store
  </div>

  <div
    class="flex justify-center items-center space-x-3 lg:mt-10 md:mt-4 mt-10 mb-10"
  >
    <button
      style="
        margin-right: -2rem;
        z-index: 4;
        border-radius: 50%;
        background-color: #d1d1d1;
        height: 2rem;
        width: 2rem;
      "
      class="flex flex-col justify-center items-center"
    >
      <img src="/images/home//next.png" />
    </button>
    <StoreCard
      v-for="item in 3"
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
      "
      class="flex flex-col justify-center items-center"
    >
      <img src="/images/home//Previous.png" />
    </button>
    <SaleTimerCard />
  </div>
</template>

<script setup lang="ts">
import StoreCard from '@/components/home/StoreCard.vue';
import SaleTimerCard from '@/components/home/SaleTimerCard.vue';
const images = [
  'shoesSlider.png',
  'shoesSlider.png',
  'shoesSlider.png',
  'shoesSlider.png',
  'shoesSlider.png',
  'shoesSlider.png',
];
</script>

<style scoped></style>

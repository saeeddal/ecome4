<template>
  <div class="flex font-mono text-2xl justify-start font-bold ml-40">
    Store #1
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
    <StoreCardNumber
      v-for="item in 4"
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
  </div>
</template>

<script setup lang="ts">
import StoreCardNumber from '@/components/home/StoreCardNumber.vue';
const images = ['keyboard.png', 'labtop.png', 'camera.png', 'camera.png'];
</script>

<style scoped></style>

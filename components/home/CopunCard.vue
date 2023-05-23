<template>
  <div class="card flex flex-col rounded-t-full relative">
    <img :src="'/_nuxt/assets/images/home/' + imageUrl" style="height: 20rem" />
    <div class="text-center bg-[#F6F5FF] py-10 -mt-2 persent-copun">
      45% OFF
    </div>
    <div class="flex flex-col bg-[#FBFBFB] p-5">
      <p class="text-lg font-sans font-bold mt-2">Adidas Shoes Black</p>
      <p class="text-sm">Men Black Top sleeveless gown</p>
      <div class="flex mt-4 mb-10 justify-between">
        <div class="flex space-x-1 items-center justify-center">
          <img src="@/assets/images/home/location.png" class="image-icon" />
          <span class="text-icon">location</span>
        </div>
        <div class="flex space-x-1 items-center justify-center">
          <img src="@/assets/images/home/watch.png" class="image-icon" />
          <span class="text-icon">2 Days</span>
        </div>
        <div class="flex space-x-1 items-center justify-center">
          <img src="@/assets/images/home/store.png" class="image-icon" />
          <span class="text-icon">Store Name</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  imageUrl: {
    type: String,
    required: true,
  },
  imageText: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.card {
  width: 30vw;
  min-height: 30rem;
  max-height: 30rem;
}
.persent-copun {
  font-family: 'Clash Display';
  font-size: 3rem;
  line-height: 2rem;
  letter-spacing: -0.02em;
  color: #5f57a9;
  font-weight: 600;
}
.image-icon {
  height: 0.6rem;
  width: 0.6rem;
}
.text-icon {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #888888;
}
</style>

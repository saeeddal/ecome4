<template>
  <div
    class="card flex flex-col bg-[#FBFBFB] space-y-2 rounded-t-full relative"
  >
    <img :src="'/_nuxt/assets/images/home/' + imageUrl" style="height: 20rem" />
    <h3
      class="persent absolute text-2xl bg-[#DCD9FF] text-black-300 top-5 left-5"
    >
      30%
    </h3>

    <img
      class="store-name absolute text-2xl text-black-300 top-5 right-5"
      src="@/assets/images/header/heart.png"
    />
    <h3
      class="flex persent absolute text-2xl bg-[#DCD9FF] text-black-300 top-64 left-5"
    >
      <img class="mx-1" src="@/assets/images/home/oclock.png" />
      2 Days
    </h3>
    <div class="ml-4 flex flex-col p-2">
      <p class="text-lg font-sans font-bold mt-2">Adidas Shoes Black</p>
      <p class="text-sm">Men Black Top sleeveless gown</p>
    </div>

    <div class="flex mx-4 mt-4 mb-10 justify-between">
      <p class="text-blue">$20.00</p>
      <p class="line-through">$50.00</p>
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
  width: 20vw;
  min-height: 28rem;
  max-height: 28rem;
}
.persent {
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: -0.02em;
  padding: 5px;
}
.store-name {
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  padding: 5px;
}
</style>

<template>
  <div class="flex justify-center items-center gradient-red mt-20">
    <div class="flex flex-col items-start">
      <div>
        <span class="text-furniture">#Furniture</span>
        <p class="caption-upto">For all winter collection of Furniture</p>
        <span class="upto-text">UP TO</span>
        <span class="persent-off-text mx-10">45%OFF</span>
      </div>
      <button class="shop-now self-start text-lg">
        Shop Now &nbsp;&nbsp;>
      </button>
    </div>
    <img src="/images/home//furnitureGirl.png" class="h-full w-100 mt-20" />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.shop-now {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 33px;
  /* identical to box height, or 183% */
  letter-spacing: 0.03em;
  color: white;
  margin-top: 6rem;
  font-weight: bold;
}
.upto-text {
  font-family: 'Clash Display', sans-serif;
  font-style: normal;
  font-size: 4rem;
  line-height: 2.5rem;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-top: 4rem;
}
.persent-off-text {
  font-family: 'Clash Display', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 4.3rem;
  line-height: 2.5rem;
  letter-spacing: -0.02em;
  color: #ffffff;
}
.caption-upto {
  font-family: 'Clash Display', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 2.5rem;
  line-height: 2.5rem;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.gradient-red {
  background: radial-gradient(
        55.3% 93.49% at 0% 31.57%,
        rgba(254, 160, 179, 0.2) 0%,
        rgba(230, 68, 96, 0.2) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    linear-gradient(102.39deg, #ff94aa 0%, #fe88a0 100%);
}
.text-furniture {
  color: white;
  font-size: 1.5rem;
}
</style>

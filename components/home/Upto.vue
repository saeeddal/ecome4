<template>
  <div class="flex justify-center items-center bg-[#CAC2DD] mt-20">
    <img src="@/assets/images/home/uptoGirl.png" class="h-full w-100 mt-20" />
    <div class="flex flex-col items-start">
      <div>
        <span class="upto-text">UP TO</span>
        <span class="persent-off-text mx-10">65%OFF</span>
      </div>
      <p class="caption-upto">
        For all winter collection of
        <span class="text-3xl font-bold"> Women </span>Item
      </p>
      <button class="shop-now self-start text-lg">
        Shop Now &nbsp;&nbsp;>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.shop-now {
  font-family: 'Roboto';
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
  font-family: 'Clash Display';
  font-style: normal;
  font-size: 4rem;
  line-height: 2.5rem;
  letter-spacing: -0.02em;
  color: #ffffff;
}
.persent-off-text {
  font-family: 'Clash Display';
  font-style: normal;
  font-weight: 600;
  font-size: 4.3rem;
  line-height: 2.5rem;
  letter-spacing: -0.02em;
  color: #ffffff;
}
.caption-upto {
  font-family: 'Clash Display';
  font-style: normal;
  font-weight: 400;
  font-size: 2.5rem;
  line-height: 2.5rem;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-top: 1rem;
}
</style>

<template>
  <div class="flex font-mono justify-center font-bold text-4xl mt-20">
    Top <span class="store-text ml-2"> Store </span>
  </div>

  <div
    class="flex justify-around mx-40 items-center space-x-4 lg:mt-10 md:mt-4 mt-20 mb-20"
  >
    <button
      style="
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
    <img src="@/assets/images/home/amazon.png" />
    <img src="@/assets/images/home/ross.png" />
    <img src="@/assets/images/home/electric.png" />
    <img src="@/assets/images/home/onlineShop.png" />
    <img src="@/assets/images/home/apple.png" />
    <img src="@/assets/images/home/retail.png" />

    <button
      style="
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
</template>

<script setup lang="ts"></script>

<style scoped>
.store-text {
  background: linear-gradient(
    90deg,
    #4b429f 0.65%,
    #604caa 9.72%,
    #7455b5 18.32%,
    #8b5fc2 28.35%,
    #b06fd6 37.42%,
    #d47eea 46.49%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>

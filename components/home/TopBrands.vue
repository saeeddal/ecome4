<template>
  <div class="flex font-mono justify-center font-bold text-4xl mt-20">
    Top <span class="brand-text ml-2"> Brands </span>
  </div>

  <div
    class="flex space-x-8 mt-9 justify-center items-center top-brands-container"
  >
    <div class="image-box">
      <img src="/images/home//brand1.png" />
      <span>Brand 1</span>
    </div>
    <div class="image-box">
      <img src="/images/home//brand2.png" />
      <span>Brand 1</span>
    </div>
    <div class="image-box">
      <img src="/images/home//brand3.png" />
      <span>Brand 1</span>
    </div>
    <div class="image-box">
      <img src="/images/home//brand4.png" />
      <span>Brand 1</span>
    </div>
  </div>
  <div
    class="flex space-x-8 mt-9 justify-center items-center top-brands-container"
  >
    <div class="image-box">
      <img src="/images/home//brand3.png" />
      <span>Brand 1</span>
    </div>
    <div class="image-box">
      <img src="/images/home//brand2.png" />
      <span>Brand 1</span>
    </div>
    <div class="image-box">
      <img src="/images/home//brand1.png" />
      <span>Brand 1</span>
    </div>
    <div class="image-box">
      <img src="/images/home//brand4.png" />
      <span>Brand 1</span>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.brand-text {
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
.image-box {
  position: relative;
  text-align: center;
  color: white;
}
.image-box span {
  position: absolute;
  top: 6rem;
  left: 4rem;
  font-family: 'Clash Display', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  /* identical to box height, or 100% */
  text-transform: capitalize;
  color: #ffffff;
  font-weight: bold;
}
.top-brands-container img {
  width: 21vw;
}
</style>

<template>
  <div class="flex font-mono justify-center font-bold text-4xl mt-20">
    Stores <span class="brand-text ml-2"> Near Me </span>
  </div>
  <div
    class="flex flex-col mx-20 mt-9 justify-center items-center top-brands-container"
  >
    <img src="/images/home//storesNearMe.png" style="width: 100%" />
    <button class="button-section-1 flex items-center gap-4 justify-center">
      Start Shopping &nbsp;&nbsp;&nbsp;&nbsp; >
    </button>
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
.button-section-1 {
  width: 20rem;
  height: 3rem;
  /* primary */
  background: #5f57a9;
  border-radius: 3rem;
  margin-top: 2rem;
  text-align: center;
  color: white;
  margin-bottom: 2rem;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  line-height: 33px;
  /* identical to box height, or 183% */

  letter-spacing: 0.03em;
  text-transform: capitalize;

  color: #ffffff;
}
</style>

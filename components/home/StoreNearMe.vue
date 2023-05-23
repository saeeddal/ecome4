<template>
  <div class="flex font-mono justify-center font-bold text-4xl mt-20">
    Stores <span class="brand-text ml-2"> Near Me </span>
  </div>
  <div
    class="flex flex-col mx-20 mt-9 justify-center items-center top-brands-container"
  >
    <img src="@/assets/images/home/storesNearMe.png" style="width: 100%" />
    <button class="button-section-1 flex items-center gap-4 justify-center">
      Start Shopping &nbsp;&nbsp;&nbsp;&nbsp; >
    </button>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
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
  font-size: 1.5rem;
  line-height: 33px;
  /* identical to box height, or 183% */

  letter-spacing: 0.03em;
  text-transform: capitalize;

  color: #ffffff;
}
</style>

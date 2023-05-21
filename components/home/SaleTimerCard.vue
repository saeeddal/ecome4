<template>
  <div class="card flex flex-col justify-center bg-[#C7BFFF] p-8">
    <div class="flex text-center justify-center items-center sale">Sale</div>
    <div class="text-center timer">Timer</div>
    <img src="@/assets/images/home/circles.png" class="mx-2 my-6" />
    <button class="shop-now text-center self-center mt-5 text-lg">
      Shop Now &nbsp;&nbsp;>
    </button>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.card {
  width: 20vw;
  min-height: 28rem;
  max-height: 28rem;
}
.sale {
  font-family: 'Clash Display';
  font-style: normal;
  font-weight: 400;
  font-size: 3.2rem;
  line-height: 2rem;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-top: 0.2rem;
}
.timer {
  font-family: 'Clash Display';
  font-style: normal;
  font-weight: 450;
  font-size: 3.7rem;
  line-height: 40px;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-top: 1.2rem;
}
.shop-now {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 33px;
  /* identical to box height, or 183% */
  letter-spacing: 0.03em;
  color: white;
  margin-top: 1rem;
}
</style>

<template>
  <div class="flex justify-center space-x-2 mb-10">
    <div class="flex flex-col space-y-5">
      <!-- col 1 row 1 box-->
      <div class="flex flex-col first-box justify-items-center justify-center">
        <p class="text-center title mt-5">#Furniture</p>
        <p class="header mt-4 text-center">Collection Name</p>
        <p class="off-amount-text mt-4 text-center">35% OFF</p>
        <button class="shop-now text-center self-center mt-5 text-lg">
          Shop Now &nbsp;&nbsp;>
        </button>
      </div>
      <!-- col 1 row 2  box-->
      <div class="flex justify-around second-box h-56">
        <div class="flex flex-col ml-10 shrink-2">
          <p class="title mt-5">#Makeup</p>
          <p class="off-amount-text mt-20">25% OFF</p>
          <button class="shop-now block mt-5 text-lg text-left">
            Shop Now &nbsp;&nbsp;>
          </button>
        </div>
        <div class="flex lg:ml-10 items-center justify-center">
          <img src="/images/home//cups.png" />
        </div>
      </div>
    </div>
    <div class="flex flex-col space-y-5">
      <!--  col 2 row 1 box-->
      <div class="flex thired-box h-56">
        <div class="flex flex-col ml-10 my-2 shrink-2 justify-around">
          <div class="title-box flex items-center justify-center bg-[#f4dfe1]">
            <p class="title text-center py-3">Coupons</p>
          </div>
          <div>
            <p class="upto">UPTO</p>
            <p class="off-amount-text mt-5">65% OFF</p>
          </div>
        </div>
      </div>
      <!-- col 2 row 2  box-->
      <div class="flex flex-col justify-around fourth-box">
        <p class="title ml-5">#Shoes</p>
        <div class="flex ml-5 items-center justify-between">
          <p class="off-amount-text">25% OFF</p>
          <button class="shop-now block text-left">
            Shop Now &nbsp;&nbsp;>
          </button>
          <img class="mr-20" src="/images/home//shoes.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.box {
  font-family: 'Clash Display', sans-serif;
  color: #ffffff;
  font-style: normal;
  letter-spacing: -0.02em;
  width: 45vw;
}
.first-box {
  background: #919cdb;
  height: 18rem;
  @extend .box;
  .title {
    height: 2.4rem;
    font-weight: 400;
    font-size: 1.7rem;
    line-height: 2.4rem;
  }
  .header {
    height: 2.4rem;
    font-weight: 400;
    font-size: 2.4rem;
    line-height: 2.4rem;
  }
  .off-amount-text {
    font-weight: 600;
    font-size: 3.8rem;
    line-height: 2.4rem;
  }
}
.second-box {
  background: #de5967;
  height: 18rem;
  @extend .box;
  .title {
    height: 2.4rem;
    font-weight: 400;
    font-size: 1.7rem;
    line-height: 2.4rem;
  }
  .header {
    height: 2.4rem;
    font-weight: 400;
    font-size: 2.4rem;
    line-height: 2.4rem;
  }
  .off-amount-text {
    font-weight: 600;
    font-size: 3.1rem;
    line-height: 2.4rem;
  }
}
.thired-box {
  background: #f49fa7;
  height: 25rem;
  font-family: 'Clash Display', sans-serif;
  background-image: url(/images/home//girlWithBackGround.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  @extend .box;
  .title-box {
    border-radius: 1.8rem;
    margin-top: 1rem;
    width: 11rem;
  }
  .title {
    font-style: normal;
    font-weight: 400;
    font-size: 2.3rem;
    line-height: 2.4rem;
    letter-spacing: -0.02em;
    color: #eda0a8;
  }
  .header {
    height: 2.4rem;
    font-weight: 400;
    font-size: 2.4rem;
    line-height: 2.4rem;
  }
  .off-amount-text {
    font-style: normal;
    font-weight: 600;
    font-size: 3.8rem;
    line-height: 2.4rem;
    letter-spacing: -0.02em;
    font-weight: 600;
  }
  .upto {
    font-style: normal;
    font-weight: 400;
    font-size: 3.2rem;
    line-height: 2.4rem;
  }
}
.fourth-box {
  background: #8881c6;
  height: 11rem;
  @extend .box;
  .title {
    height: 2.4rem;
    font-weight: 400;
    font-size: 1.7rem;
    line-height: 2.4rem;
  }
  .header {
    height: 2.4rem;
    font-weight: 400;
    font-size: 2.4rem;
    line-height: 2.4rem;
  }
  .off-amount-text {
    font-weight: 600;
    font-size: 3.1rem;
    line-height: 2.4rem;
  }
}
.shop-now {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 33px;
  /* identical to box height, or 183% */
  letter-spacing: 0.03em;
  font-weight: bold;
}
</style>

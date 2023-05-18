<template>
  <main>
    <section class="grid grid-cols-2 gap-2 first-section">
      <artcle>
        <div class="first-paragraph">
          It takes more than <br />
          one sale to<br />
          get
          <span class="successfull-text"> successful </span>
        </div>
        <div class="second-paraghraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </div>
        <button class="button-section-1 flex items-center gap-4 justify-center">
          <span class="text-button-section-1 ml-2"> Start Shopping </span>
          <img
            src="@/assets/images/logo/start_shoping.png"
            style="height: 5px; width: 11px; margin-left: 10px"
          />
        </button>
      </artcle>
      <artcle class="flex flex-col">
        <div class="rotated-opacity flex-row ">
          <svg style="width: 28rem; height: 39rem">
            <rect
              x="0"
              y="0"
              rx="30"
              ry="30"
              style="
                fill: #4b41a1;
                stroke: none;
                stroke-width: 20;
                width: 28rem;
                height: 39rem;
                opacity: 0.2;
              "
            />
          </svg>
        </div>
        <div class="rotated flex-row">
          <svg style="width: 28rem; height: 39rem" overflow="hidden">
            <rect
              x="0"
              y="0"
              rx="30"
              ry="30"
              style="
                fill: #4b41a1;
                stroke-width: 20;
                width: 28rem;
                height: 39rem;
              "
            />
          </svg>
        </div>

        <div class="first-offer-box">
          <span class="offer-text--title">offer</span>
          <span class="offer-text--main">20% OFF</span>
          <span class="offer-text--footer"> 10 amazing products </span>
        </div>
      </artcle>
    </section>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.first-section {
  width: 100%;
  background-color: #f6f5ff;
  height: 46rem;
}
.first-paragraph {
  font-family: 'Clash Display';
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 55px;
  /* or 110% */
  text-transform: capitalize;
  color: #000000;
  margin-left: 100px;
  margin-top: 12rem;
}
.second-paraghraph {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #525252;
  margin-left: 100px;
  margin-top: 2rem;
}
.button-section-1 {
  width: 219px;
  height: 48px;
  /* primary */
  background: #5f57a9;
  border-radius: 50px;
  margin-left: 100px;
  margin-top: 4rem;
}
.text-button-section-1 {
  width: 128px;
  height: 33px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 33px;
  /* identical to box height, or 183% */
  letter-spacing: 0.03em;
  text-transform: capitalize;
  color: #ffffff;
}
.successfull-text {
  background-color: red;

  /* Create the gradient. */
  background-image: linear-gradient(
    45deg,
    #4b429f,
    #604caa,
    #7455b5,
    #b06fd6,
    #d47eea
  );

  /* Set the background size and repeat properties. */
  background-size: 100%;
  background-repeat: repeat;

  /* Use the text as a mask for the background. */
  /* This will show the gradient as a text color rather than element bg. */
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
}
.first-offer-box {
  width: 181px;
  height: 97px;
  margin-left: 42px;
  position: absolute;
  top: 150px;
  background: #eda0a8;
  border-radius: 15px 15px 0px 15px;
}
.offer-text {
  font-family: 'Roboto';
  font-style: normal;
  /* identical to box height, or 157% */
  display: block;
  color: #ffffff;
  margin-left: 21px;
  margin-top: 10px;

  &--title {
    @extend .offer-text;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    /* identical to box height, or 157% */
  }
  &--main {
    @extend .offer-text;
    font-weight: 600;
    font-size: 22px;
    line-height: 22px;
    margin-top: 8px;
  }
  &--footer {
    @extend .offer-text;
    font-weight: 300;
    font-size: 14px;
    line-height: 22px;
  }
}
.rotated {
  transform: rotate(12deg);
  z-index: 0;
  position: absolute;
  margin-left: 100px;
  overflow-y: hidden !important;
  overflow-x: hidden;
  padding-bottom: 100px;
}
.rotated-opacity {
  transform: rotate(30deg);
  z-index: 0;
  position: absolute;
  margin-left: 80px;
  overflow-y: hidden !important;
  overflow-x: hidden;
  padding-bottom: 100px;
}
</style>

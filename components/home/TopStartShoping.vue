<template>
  <section class="grid grid-cols-2 gap-2 first-section">
    <article>
      <div class="first-paragraph">
        It takes more than <br />
        one sale to<br />
        get
        <span class="successfull-text"> successful </span>
      </div>
      <div class="second-paraghraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam
      </div>
      <button class="button-section-1 flex items-center gap-4 justify-center">
        See all Stores &nbsp;&nbsp;&nbsp;&nbsp; >
      </button>
    </article>
    <article class="flex flex-col">
      <div class="rotated flex-row">
        <svg height="4000" width="400">
          <!-- <path>
              <img
                src="@/assets/images/home/persent.png"
                style="height: 10px; width: 150px"
              />
            </path> -->
          <circle
            cx="250"
            cy="350"
            r="200"
            stroke="#B1A6FF"
            stroke-width="1"
            fill="none"
          />

          <circle
            cx="250"
            cy="350"
            r="180"
            stroke="#B1A6FF"
            stroke-width="1"
            fill="none"
          />
          <circle
            cx="250"
            cy="350"
            r="160"
            stroke="#B1A6FF"
            stroke-width="1"
            fill="none"
          />
          <circle
            cx="250"
            cy="350"
            r="140"
            stroke="#B1A6FF"
            stroke-width="1"
            fill="none"
          />
          <circle
            cx="250"
            cy="350"
            r="120"
            stroke="#B1A6FF"
            stroke-width="1"
            fill="none"
          />

          <circle
            cx="250"
            cy="350"
            r="100"
            stroke="#B1A6FF"
            stroke-width="1"
            fill="none"
          />
        </svg>
      </div>
      <div class="rotated-opacity flex-row"></div>

      <div class="first-offer-box">
        <span class="offer-text--title">offer</span>
        <span class="offer-text--main">20% OFF</span>
        <span class="offer-text--footer"> 10 amazing products </span>
      </div>
      <div style="position: relative; height: 39rem">
        <img
          src="@/assets/images/home/persent.png"
          style="
            width: 1vw;
            height: 1vw;
            margin-top: 16rem;
            margin-left: 13vw;
            z-index: 4;
            position: absolute;
          "
        />
        <img
          src="@/assets/images/home/persent.png"
          style="
            width: 2vw;
            height: 1vw;
            margin-top: 14rem;
            margin-left: 27vw;
            z-index: 4;
            position: absolute;
          "
        />
        <img
          src="@/assets/images/home/buyer.png"
          style="
            width: 32vw;
            height: 19vw;
            margin-top: 100%;
            margin-left: 6vw;
            z-index: 4;
            position: absolute;
            bottom: 0;
          "
        />
        <span
          class="dot"
          style="
            width: 1vw;
            height: 1vw;
            margin-top: 18rem;
            margin-left: 13vw;
            z-index: 4;
            background-color: #de5967;
            border-radius: 50%;
            position: absolute;
          "
        ></span>
        <span
          class="dot"
          style="
            width: 1vw;
            height: 1vw;
            margin-top: 12rem;
            margin-left: 24vw;
            z-index: 4;
            background-color: #eda0a8;
            border-radius: 50%;
            position: absolute;
          "
        ></span>
      </div>
    </article>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.first-section {
  width: 100%;
  background-color: #f6f5ff;
  height: 39rem;
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
  margin-top: 10rem;
}
.second-paraghraph {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #525252;
  margin-left: 100px;
  margin-top: 1rem;
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
  margin-bottom: 1rem;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 2rem;
  /* identical to box height, or 183% */
  margin-left: 5rem;
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
  margin-left: 1vw;
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
  transform: rotate(14deg);
  z-index: 0;
  position: absolute;
  margin-left: 8vw;
  overflow-y: hidden !important;
  overflow-x: hidden;
  width: 27vw;
  height: 32rem;

  border-radius: 2rem;
  background: linear-gradient(
    121.66deg,
    #4b429f -8.69%,
    #645cac 33.53%,
    #8666bf 73.28%,
    #d47eea 105.46%
  );
}
.rotated-opacity {
  transform: rotate(28deg);
  z-index: 0;
  position: absolute;
  margin-left: 6vw;
  overflow-y: hidden !important;
  overflow-x: hidden;
  padding-bottom: 8vw;
  width: 30vw;
  height: 30rem;
  background-color: #4b41a1;
  border-radius: 2rem;
  opacity: 0.1;
  margin-top: -3rem;
}
</style>

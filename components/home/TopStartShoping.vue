<template>
  <section class="flex flex-row first-section">
    <article>
      <div class="first-paragraph">
        It takes more than Display <br />
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
    <article>
      <img src="images/home/buyerWith.png" />
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
  font-family: 'Clash Display', sans-serif;
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
  font-family: 'Roboto', sans-serif;
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
  font-family: 'Roboto', sans-serif;
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
</style>

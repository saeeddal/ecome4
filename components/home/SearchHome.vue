<template>
  <div class="container">
    <section style="margin-top: 4rem" class="mx-md">
      <div class="flex justify-center">
        <div class="exclusive-title">
          <span class="exclusive-title-gradient">Exclusive</span> Products
        </div>
      </div>
      <div class="flex justify-center">
        <div class="search-caption">
          Search for the latest fashion articles and find the amazing products
          to buy from our huge collection
        </div>
      </div>

      <div class="flex justify-center my-6">
        <div class="search-container flex items-center justify-around">
          <img
            src="/images/home//search.png"
            style="width: 1rem; height: 1rem; margin-left: 2rem"
          />
          <input
            type="text"
            style="
              border: none;
              background-color: #f2f1fb;
              width: 50%;
              height: 50%;
            "
            placeholder="Whereas recognition of the inherent dignity"
          />

          <button
            style="
              background-color: #5f57a9;
              color: white;
              width: 180px;
              height: 48px;
              background: #5f57a9;
              border-radius: 15px;
            "
          >
            <span
              style="
                font-family: 'Roboto', sans-serif;
                font-style: normal;
                font-weight: 500;
                font-size: 1.2rem;
                line-height: 2rem;
                letter-spacing: 0.03em;
                text-transform: capitalize;
                color: #ffffff;
              "
            >
              Explore Now
            </span>
          </button>
        </div>
        <img src="/images/home//Arrow07.png" class="arrow-image" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.exclusive-title {
  font-family: 'Clash Display', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 50px;
  line-height: 55px;
  display: block;
  /* identical to box height, or 110% */
}
.exclusive-title-gradient {
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
.exclusive-caption {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #525252;
}
.search-container {
  width: 858px;
  height: 77px;
  background: #f2f1fb;
  border-radius: 15px;
}
::placeholder {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height, or 122% */
  color: #525252;
}
.search-caption {
  width: 40vw;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
  /* identical to box height, or 138% */
  color: #525252;
  margin-top: 0.4rem;
}
.arrow-image {
  height: 6rem;
  width: 6rem;
  margin-left: -1rem;
  margin-top: -6rem;
}
</style>

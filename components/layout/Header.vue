<template>
  <header class="flex justify-between items-center">
    <nav class="flex gap-4 items-center" style="margin-left: 5vw">
      <img
        src="@/assets/images/header/logo_1.png"
        style="height: 2.5rem; width: 7.5rem"
        class="flex md:ml-8 sm:ml-1 xs:ml-1"
      />
      <NuxtLink to="/" class="ml-5">home </NuxtLink>
      <NuxtLink to="/about" class="ml-5">Offers </NuxtLink>
      <NuxtLink to="/about" class="ml-5">Coupons </NuxtLink>
      <NuxtLink to="/about" class="ml-5">Stores </NuxtLink>
      <NuxtLink to="/about" class="ml-5">About Us </NuxtLink>
    </nav>
    <nav class="flex items-center" style="margin-right: 5vw">
      <img
        src="@/assets/images/header/globe.png"
        style="height: 1.7rem; width: 1.7rem"
        class="md:ml-4 sm:ml-2"
      />
      <span class="ml-1 global"> global(en)</span>
      <img
        src="@/assets/images/header/openArrow.png"
        style="height: 0.31rem; width: 0.68rem; margin-left: 0.3rem"
      />
      <img
        src="@/assets/images/header/person.png"
        style="height: 1.3rem; width: 1.2rem"
        class="ml-4"
      />
      <img
        src="@/assets/images/header/heart.png"
        style="height: 1.2rem; width: 1.3rem"
        class="ml-4"
      />
    </nav>
  </header>
</template>

<script setup lang="ts">
const lang = ref('en');
const options = ref(['fa', 'en']);
</script>

<style scoped lang="scss">
header {
  background-color: #d7d7d7;
  height: 7rem;
  position: absolute;
  z-index: 10;
  width: 100%;
}
a {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 2.5px;
  letter-spacing: -0.02em;
  color: #000000;
}
.global {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1rem;
  align-items: center;
  letter-spacing: -0.02em;
  color: #4f4f4f;
}
</style>

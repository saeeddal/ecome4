<template>
  <header class="flex justify-between items-center container bg-[#f7f7f7] h-28">
    <nav class="flex gap-4 items-center ml-8">
      <img
        src="@/assets/images/header/logo_1.png"
        class="md:ml-8 sm:ml-1 xs:ml-1 h-10 w-30"
      />
      <NuxtLink to="/" class="font-Poppins ml-5">Home </NuxtLink>
      <NuxtLink to="/about" class="font-Poppins ml-5">Offers </NuxtLink>
      <NuxtLink to="/about" class="font-Poppins ml-5">Coupons </NuxtLink>
      <NuxtLink to="/about" class="font-Poppins ml-5">Stores </NuxtLink>
      <NuxtLink to="/about" class="font-Poppins ml-5">About Us </NuxtLink>
    </nav>
    <nav class="flex items-center" style="margin-right: 5vw">
      <img
        src="@/assets/images/header/globe.png"
        class="md:ml-4 sm:ml-2 h-6.8 w-6.8"
      />
      <span class="ml-1"> global(en)</span>
      <img src="@/assets/images/header/openArrow.png" class="h-2 w-2 ml-2" />
      <img src="@/assets/images/header/person.png" class="h-5 w-5 ml-4" />
      <img src="@/assets/images/header/heart.png" class="h-5 w-5 ml-4" />
    </nav>
  </header>
</template>

<script setup lang="ts">
const lang = ref('en');
const options = ref(['fa', 'en']);
</script>

<style scoped lang="scss">
// header {
//   background-color: #f7f7f7;
//   height: 7rem;
//   z-index: 10;
// }
// a {
//   font-family: 'Poppins', sans-serif;
//   font-style: normal;
//   font-weight: 400;
//   font-size: 1.2rem;
//   line-height: 0.2rem;
//   letter-spacing: -0.02em;
//   color: #000000;
// }
// .global {
//   font-family: 'Poppins', sans-serif;
//   font-style: normal;
//   font-weight: 400;
//   font-size: 1rem;
//   line-height: 1rem;
//   align-items: center;
//   letter-spacing: -0.02em;
//   color: #4f4f4f;
// }
</style>

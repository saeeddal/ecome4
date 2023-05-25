<template>
  <header
    class="flex justify-between items-center container bg-[#f7f7f7] h-[7rem]"
  >
    <nav class="flex gap-4 items-center ml-[2rem]">
      <img
        src="@/assets/images/header/logo_1.png"
        class="flex md:ml-8 sm:ml-1 xs:ml-1 h-[2.5rem] w-[7.5rem]"
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
        class="md:ml-4 sm:ml-2 h-[1.7rem] w-[1.7rem]"
      />
      <span class="ml-1"> global(en)</span>
      <img
        src="@/assets/images/header/openArrow.png"
        class="h-[0.31rem] w-[0.68rem] ml-[0.4rem]"
      />
      <img
        src="@/assets/images/header/person.png"
        class="h-[1.3rem] w-[1.2rem] ml-4"
      />
      <img
        src="@/assets/images/header/heart.png"
        class="h-[1.2rem] w-[1.3rem] ml-[1rem]"
      />
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

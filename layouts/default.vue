<template>
  <div class="container">
    <Header />
    <slot />
    <Footer />
  </div>
</template>
<script setup lang="ts">
import Header from '@/components/layout/Header.vue';
import Footer from '@/components/layout/Footer.vue';
</script>
<style scoped lang="scss">
footer {
  background-color: gray;
  color: aliceblue;
  position: absolute;
  z-index: 10;
  // width: 100% !important;
}
</style>

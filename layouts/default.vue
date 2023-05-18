<template>
  <div>
    <Header />
    <slot />
    <footer>
      <h3>this is main footer from layout</h3>
    </footer>
  </div>
</template>
<script setup lang="ts">
import Header from '@/components/layout/Header.vue';
</script>
<style scoped lang="scss">
footer {
  background-color: gray;
  color: aliceblue;
  position: absolute;
  z-index: 10;
  width: 100% !important;
}
</style>

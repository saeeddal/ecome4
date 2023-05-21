<template>
  <main>
    <HomeTopStartShoping />
    <SearchHome />
    <OffBoxes />
    <ShopCategory />
    <AllStores />
  </main>
</template>
<script setup lang="ts">
import SearchHome from '@/components/home/SearchHome.vue';
import OffBoxes from '@/components/home/OffBoxes.vue';
import ShopCategory from '@/components/home/ShopByCategory.vue';
import AllStores from '@/components/home/AllStores.vue';
</script>
<style lang="scss" scoped></style>

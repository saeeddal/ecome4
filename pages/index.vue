<template>
  <main>
    <HomeTopStartShoping />
    <SearchHome />
    <OffBoxes />
    <ShopCategory />
    <AllStores />
    <Upto />
  </main>
</template>
<script setup lang="ts">
import SearchHome from '@/components/home/SearchHome.vue';
import OffBoxes from '@/components/home/OffBoxes.vue';
import ShopCategory from '@/components/home/ShopByCategory.vue';
import AllStores from '@/components/home/AllStores.vue';
import Upto from '@/components/home/Upto.vue';
</script>

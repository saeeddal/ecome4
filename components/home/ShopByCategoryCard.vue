<template>
    <div class="card flex flex-col justify-center rounded-lg">
      <img :src="'/_nuxt/assets/images/home/' + imageUrl" />
      <p
        class="text-center bg-[#F6F5FF] pt-10 pb-6 -mt-5 rounded-b-2xl text-lg font-sans font-bold"
      >
        {{ imageText }}
      </p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
  imageUrl: {
    type: String,
    required: true,
  },
  imageText: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.card {
  width: 13vw;
  height: 18rem;
}
</style>

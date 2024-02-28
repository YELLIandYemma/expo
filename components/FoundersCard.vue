<template>
  <div class="flex flex-col items-center">
    <img :src="image" :alt="name" class="rounded-full w-32 h-32 mb-4" />
    <p class="text-lg font-semibold text-center">{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>

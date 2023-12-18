import type { PhoneCard } from '#build/components'; import type loginVue from
'~/pages/login.vue';
<template>
  <div v-for="phone in phones">
    <div>
      <h1 class="text-white">{{ phone.name }}</h1>
    </div>
    <div>
      <UButton size="sm">Button</UButton>
    </div>
  </div>
</template>
<script setup lang="ts">
const { data: phones } = await useAsyncData("phone_", async () =>
  client.from("phone_").select("*")
);
console.log(phones.value);
</script>

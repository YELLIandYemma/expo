<template>
  <PhoneCard />
  <UButton size="sm" @click="handleSignout">Button</UButton>
  <PhoneCard />
</template>
<script setup lang="ts">
const supabase = useSupabaseClient();

const handleSignout = async () => {
  await supabase.auth.signOut();
};
const client = useSupabaseClient();
const { data: phones } = await useAsyncData("phone_", async () =>
  client.from("phone_").select("*")
);
refreshNuxtData();
</script>

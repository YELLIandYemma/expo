<template>
  <Navbar />
  <products />
</template>
<script setup>
const user = useSupabaseUser();
onMounted(() => {
  watchEffect(() => {
    if (!user.value) {
      navigateTo("/login");
    }
  });
});
const supabase = useSupabaseClient();
</script>

<template>
  <Navbar @click="logout" />
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
const logout = async () => {
  await supabase.auth.signOut();
};
</script>

<template>
  <PhoneCard />
  <NavBar />
  <UCard v-for="phone in phones">
    <template #header>
      <h1 class="h-8">{{ phone.title }}</h1>
    </template>

    <p>{{ phone.price }}</p>

    <template #footer>
      <div>
        <UButton label="Open" @click="isOpen = true" />

        <UModal v-model="isOpen">
          <div class="p-4">
            <UInput v-model="value" />
            <UButton @click="handleSubmit">Button</UButton>
          </div>
        </UModal>
      </div>
    </template>
  </UCard>
</template>
<script setup lang="ts">
const value = ref("");
const isOpen = ref(false);
const phones = ref([]);
definePageMeta({
  middleware: ["auth"],
});
const user = useSupabaseUser();
onMounted(() => {
  watchEffect(() => {
    if (!user.value) {
      navigateTo("/login");
    }
  });
});
const supabase = useSupabaseClient();

const handleSignout = async () => {
  await supabase.auth.signOut();
};

const client = useSupabaseClient();
const getPhones = async () => {
  const { data } = await client.from("phones").select("*");
  phones.value = data;
};

const handleSubmit = async () => {
  const { data } = await supabase
    .from("orders")
    .insert({ id: true, item: value.value, address: value.value });
};

onMounted(() => {
  getPhones();
});
</script>

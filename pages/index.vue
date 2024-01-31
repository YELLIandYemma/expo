<template>
  <div class="flex flex-wrap justify-center bg-white">
    <!-- Card 1: G phone 1 -->
    <div class="m-4 w-72 h-96">
      <div
        class="max-w-xs h-full rounded overflow-hidden shadow-lg border border-gray-200"
      >
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-gray-800">G phone 1</div>
          <p class="text-gray-700 text-base">
            An amazing phone for an amazing price comes with 100gb storage and
            16-megapixel camera and 8gb ram.
          </p>
          <p class="text-gray-700 text-base mt-2">Price: $999</p>
          <div class="flex items-center mt-4">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Buy
            </button>
            <input
              class="ml-4 p-2 border border-gray-300 rounded w-40"
              type="text"
              placeholder="Enter address"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Card 2: G phone VIP -->
    <div class="m-4 w-72 h-96">
      <div
        class="max-w-xs h-full rounded overflow-hidden shadow-lg border border-gray-200"
      >
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-gray-800">G phone VIP</div>
          <p class="text-gray-700 text-base">
            A great phone with special features like new camera modes, a
            20-megapixel camera, 168gb storage, and 8gb ram.
          </p>
          <p class="text-gray-700 text-base mt-2">Price: $1999</p>
          <div class="flex items-center mt-4">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Buy
            </button>
            <input
              class="ml-4 p-2 border border-gray-300 rounded w-40"
              type="text"
              placeholder="Enter address"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Card 3: Another Product -->
    <div class="m-4 w-72 h-96">
      <div
        class="max-w-xs h-full rounded overflow-hidden shadow-lg border border-gray-200"
      >
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-gray-800">G Fold H</div>
          <p class="text-gray-700 text-base">
            A foldable phone with a stunning 48 megapixel camera and 8gb of ram
          </p>
          <p class="text-gray-700 text-base mt-2">Price: $1999</p>
          <div class="flex items-center mt-4">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Buy
            </button>
            <input
              class="ml-4 p-2 border border-gray-300 rounded w-40"
              type="text"
              placeholder="Enter address"
            />
          </div>
        </div>
      </div>
    </div>
    >
  </div>
</template>

<style scoped>
/* Add Tailwind CSS classes as needed */
</style>

<style scoped>
/* Add Tailwind CSS classes as needed */
</style>

<script setup>
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
const logout = async () => {
  await supabase.auth.signOut();
};
</script>

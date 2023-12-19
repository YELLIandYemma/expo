<template>
  <nav class="bg-transparent shadow-md">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex space-x-4">
          <!-- logo -->
          <div>
            <a
              href="/products"
              class="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
            >
              <span class="font-bold">Pear</span>
            </a>
          </div>
          <!-- primary nav -->
          <div class="hidden md:flex items-center space-x-1">
            <a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900"
              >Products</a
            >
            <a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900">
              New releases
            </a>
            <a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900"
              >Contact</a
            >
          </div>
        </div>
        <!-- secondary nav -->
        <div class="hidden md:flex items-center space-x-1">
          <button
            @click="handleSignOut"
            class="py-2 px-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
          >
            Sign out
          </button>
        </div>
        <!-- mobile button goes here -->
        <div class="md:hidden flex items-center">
          <button @click="isOpen = !isOpen" class="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- mobile menu -->
    <div class="md:hidden" :class="isOpen ? 'block' : 'hidden'">
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Products</a>
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200"
        >New releases</a
      >
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Contact</a>
      <button
        @click="handleSignOut"
        class="py-2 px-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
      ></button>
    </div>
  </nav>
</template>

<script setup lang="ts">
const client = useSupabaseClient();

const handleSignOut = async () => {
  await client.auth.signOut();
  navigateTo("/login");
};
const isOpen = ref(false);
</script>

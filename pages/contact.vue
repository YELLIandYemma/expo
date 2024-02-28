<template>
  <Navbar />
  <div class="container mx-auto p-4 translate-y-28">
    <h1 class="text-3xl font-bold mb-4">Contact Us</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 class="text-xl font-semibold mb-2">Send us a message</h2>
        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <label for="name" class="block text-gray-700 font-semibold mb-2"
              >Name</label
            >
            <input
              type="text"
              id="name"
              v-model="name"
              class="border rounded-md px-4 py-2 w-full"
            />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-gray-700 font-semibold mb-2"
              >Email</label
            >
            <input
              type="email"
              id="email"
              v-model="email"
              class="border rounded-md px-4 py-2 w-full"
            />
          </div>
          <div class="mb-4">
            <label for="message" class="block text-gray-700 font-semibold mb-2"
              >Message</label
            >
            <textarea
              id="message"
              v-model="message"
              rows="4"
              class="border rounded-md px-4 py-2 w-full"
            ></textarea>
          </div>
          <button
            type="submit"
            class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
      <div>
        <h2 class="text-xl font-semibold mb-2">Contact Information</h2>
        <p class="mb-4">Reach out to us via the following channels:</p>
        <ul>
          <li class="mb-2">
            <span class="font-semibold">Email:</span> info@grape.com
          </li>
          <li class="mb-2">
            <span class="font-semibold">Phone:</span> +1 (123) 456-7890
          </li>
          <li>
            <span class="font-semibold">Address:</span> 123 Grape Street,
            Vineyard City, CA 12345
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { useSupabaseClient } from "~/composables/supabase"; // Import Supabase composable

export default {
  setup() {
    const name = ref("");
    const email = ref("");
    const message = ref("");
    const supabase = useSupabaseClient(); // Use Supabase composable

    const submitForm = async () => {
      try {
        await supabase
          .from("contact")
          .insert([
            { name: name.value, email: email.value, message: message.value },
          ]);
        console.log("Message sent successfully!");
        // Optionally, you can reset the form fields after successful submission
        name.value = "";
        email.value = "";
        message.value = "";
      } catch (error) {
        console.error("Error sending message:", error.message);
      }
    };

    // Return the submitForm function so that it can be accessed in the template
    return {
      name,
      email,
      message,
      submitForm,
    };
  },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>

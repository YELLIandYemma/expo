<template>
  <nav>
    <Navbar @click="logout" />
  </nav>
  <tempalte>
    <div class="translate-y-[50%]">
      <h1 class="translate-x-[46%] font-bold text-2xl">Flag Ships</h1>
      <div class="flex flex-wrap justify-center bg-white">
        <!-- Card 1: G phone 1 -->
        <div class="m-4 w-72 h-100">
          <div
            class="max-w-xs h-full rounded overflow-hidden shadow-lg border border-gray-200"
          >
            <!-- Add image source -->
            <img
              class="w-full h-40 object-cover"
              src="../public/images/GphoneONE.png"
              alt="G Phone 1"
            />

            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 text-gray-800">G phone 1</div>
              <p class="text-gray-700 text-base">
                An amazing phone for an amazing price comes with 100gb storage
                and 16-megapixel camera and 8gb ram. Running Gas 2.0.
              </p>
              <p class="text-gray-700 text-base mt-2">Price: $999</p>
              <div class="flex items-center mt-4">
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  @click="g1"
                >
                  Buy
                </button>
                <input
                  class="ml-4 p-2 border border-gray-300 rounded w-40"
                  type="text"
                  placeholder="Enter address"
                  v-model="address"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Card 2: G phone VIP -->
        <div class="m-4 w-72 h-100">
          <div
            class="max-w-xs h-full rounded overflow-hidden shadow-lg border border-gray-200"
          >
            <!-- Add image source -->
            <img
              class="w-full h-40 object-cover"
              src="../public/images/GphoneVIP.png"
              alt="G Phone VIP"
            />

            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 text-gray-800">
                G phone VIP
              </div>
              <p class="text-gray-700 text-base">
                A great phone with special features like new camera modes, a
                20-megapixel camera, 168gb storage, and 8gb ram. Running Gas
                2.0.
              </p>
              <p class="text-gray-700 text-base mt-2">Price: $1999</p>
              <div class="flex items-center mt-4">
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  @click="g2"
                >
                  Buy
                </button>
                <input
                  class="ml-4 p-2 border border-gray-300 rounded w-40"
                  type="text"
                  placeholder="Enter address"
                  v-model="address_"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Card 3: Another Product -->
        <div class="m-4 w-72 h-100">
          <div
            class="max-w-xs h-full rounded overflow-hidden shadow-lg border border-gray-200"
          >
            <!-- Add image source -->
            <img
              class="w-full h-40 object-cover"
              src="../public/images/GphoneFLIP.png"
              alt="G Fold H"
            />

            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 text-gray-800">G Fold H</div>
              <p class="text-gray-700 text-base">
                A foldable phone with special features like new split screen, a
                48-megapixel camera, 168gb storage, and 8gb ram. Running Gas
                2.0.
              </p>
              <p class="text-gray-700 text-base mt-2">Price: $1999</p>
              <div class="flex items-center mt-4">
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  @click="g3"
                >
                  Buy
                </button>
                <input
                  class="ml-4 p-2 border border-gray-300 rounded w-40"
                  type="text"
                  placeholder="Enter address"
                  v-model="address__"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </tempalte>
</template>

<style scoped>
/* Add Tailwind CSS classes as needed */
</style>

<script setup>
const address = ref("");
const address_ = ref("");
const address__ = ref("");
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

const g1 = async () => {
  try {
    await supabase
      .from("phones")
      .insert([{ title: "G phone 1", address: address.value }]);
    console.log(address.value);
    alert(
      "Your order for a G phone 1 was succesful the address is " + address.value
    );
  } catch (error) {
    console.log(error);
  }
};
const g2 = async () => {
  try {
    await supabase
      .from("phones")
      .insert([{ title: "G phone VIP", address: address_.value }]);
    console.log(address_.value);
    alert(
      "Your order for a G phone 1 was succesful the adderss is " +
        address_.value
    );
  } catch (error) {
    console.log(error);
  }
};
const g3 = async () => {
  try {
    await supabase
      .from("phones")
      .insert([{ title: "G Fold H", address: address__.value }]);
    console.log(address_.value);
    alert(
      "Your order for a G phone 1 was succesful the adderss is " +
        address__.value
    );
  } catch (error) {
    console.log(error);
  }
};
</script>

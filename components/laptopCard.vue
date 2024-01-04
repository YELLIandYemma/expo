<template>
  <UCard>
    <template #header>
      <Placeholder class="h-8" />
      <h1>G Log Wind</h1>
      <h2>$1999.99</h2>
    </template>

    <Placeholder class="h-32" />
    <p>
      16GB S1 chip RAM 512GB SSD NVIDIA GTX 1660 Ti 15.6-inch Full HD (144Hz)
      Wi-Fi 6, Bluetooth 5.0, USB Type-A and Type-C LogOs 1.2 stable Battery: 6+
      hours, fast chargingPremium metal, Stereo speakers, Dolby Atmos
      HDMI/DisplayPort, 3.5mm jack, SD card reader
    </p>
    <img
      class="w-25 rotate-6"
      src="public\images\Screenshot_2024-01-01_193943-removebg-preview.png"
    />
    <template #footer>
      <Placeholder class="h-8" />
      <UInput
        type="number"
        class="mb-2"
        placeholder="Quantitiy"
        v-model="value"
      />
      <UInput
        type="address"
        placeholder="Enter your address"
        class="mb-2"
        v-model="quant_1"
      />
      <UButton @click="g_log_wind">Buy Now</UButton>
    </template>
  </UCard>
</template>

<script setup lang="js">


const value = ref("");
const quant_1 = ref("");
const client = useSupabaseClient();

const g_log_wind= async () =>{
  if(value.value.length === 0 || quant_1.value.length === 0){
      alert('fill in all fields')
    }
    else{
  try {
    await client
      .from("orders")
      .insert({ item: "G log wind", address: value.value, quantitiy:quant_1.value });
      alert('your order wass succeful you will pay on delivery')
  } catch (err) {
    alert(err);
  }
}
}
</script>

<template>
  <div>
    <!--G phone 1-->
    <UCard class="w-[30rem]">
      <template #header>
        <h1>Grape phone 1</h1>
      </template>

      <span
        >Comes with 64 gigabytes of storage and 4 gigabytes of storage<br />Running
        Bunddle strap OS 1.0</span
      >
      <img
        class="w-20 rounded-lg"
        src="../public/images/Screenshot_2023-12-27_122850-removebg-preview.png"
      />

      <template #footer class=" ">
        <UButton label="Buy Now" @click="grape_phone_1" class="mb-3" />
        <UInput
          class="translate-y-[-0.2rem]"
          placeholder="Quantity"
          type="number"
          v-model="quant_1"
        />

        <UInput v-model="value" placeholder="Enter your address" />
      </template>
    </UCard>
  </div>
  <UCard class="w-[30rem]">
    <template #header>
      <h1>Grape Phone Vip</h1>
    </template>

    <span
      >Comes with 64 gigabytes of storage and 4 gigabytes of storage<br />Running
      Bunddle strap OS 1.0</span
    >
    <img class="w-20 rounded-lg" src="../public/images/vip.png" />

    <template #footer>
      <UButton label="Buy Now" @click="grape_phone_2" class="mb-3" />
      <UInput
        class="translate-y-[-0.2rem]"
        placeholder="Quantity"
        type="number"
        v-model="quant_2"
      />
      <UInput v-model="value_1" placeholder="Enter your address" />
    </template>
  </UCard>
  <UCard class="w-[30rem]">
    <template #header>
      <h1>G Phone Flip</h1>
    </template>

    <span
      >Comes with 64 gigabytes of storage and 4 gigabytes of storage<br />Running
      Bunddle strap OS 1.0</span
    >
    <img
      class="w-20 rounded-lg"
      src="../public/images/Screenshot_2023-12-31_102140-removebg-preview.png"
    />

    <template #footer>
      <UButton label="Buy Now" @click="grape_phone_3" class="mb-3" />
      <UInput
        class="translate-y-[-0.2rem]"
        placeholder="Quantity"
        type="number"
        v-model="quant_3"
      />
      <UInput v-model="value_2" placeholder="Enter your address" />
    </template>
  </UCard>
</template>

<script setup lang="js">
const value = ref("");
const value_1 = ref("");
const value_2 = ref("");
const quant_1 = ref('');
const quant_2 = ref('');
const quant_3 = ref('');

const client = useSupabaseClient();

const grape_phone_1 = async () => {
     if(value.value.length === 0 || quant_1.value.length === 0){
      alert('fill in all fields')
    }
    else{
  try {
    await client
      .from("orders")
      .insert({ item: "Grape Phone 1", address: value.value, quantitiy:quant_1.value });
      alert('your order wass succeful you will pay on delivery')
  } catch (err) {
    alert(err);
  }
}
};
const grape_phone_2 = async () => {
      if(value_1.value.length === 0 || quant_2.value.length === 0){
      alert('fill in all fields')
    }
    else {
  try {
    await client
      .from("orders")
      .insert({ item: "Grape Phone Vip", address: value_1.value,quantitiy:quant_2.value  });
    alert('your order wass succeful you will pay on delivery')


  } catch (err) {
    alert(err);
  }
}
};
const grape_phone_3 = async () => {
   if(value_2.value.length === 0 || quant_3.value.length === 0){
      alert('fill in all fields')
    }
    else{

  try {
    await client
      .from("orders")
      .insert({  item: "G Phone Flip", address: value_2.value,quantitiy:quant_3.value  });
      alert('your order wass succeful you will pay on delivery')

  } catch (err) {
    alert(err);
  }
}
};
</script>

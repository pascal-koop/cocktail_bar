<template>
  <div>
    <ul>
      <li @click="convert" class="ma-2">Date of order</li>
      <li class="ma-2">{{ orderDate }}</li>
      <li class="ma-2"> <h3> Cocktail Name</h3> {{ cocktailName }}</li>
      <li class="ma-2">Amount{{ orderAmount }}</li>
      <li class="ma-2">Single Price {{ singlePrice }}€</li>
      <li class="ma-2">Total{{ sumPrice }}</li>
      <li class="ma-2">{{ orderSum }}</li>
      <li class="ma-2">{{ orderId }}</li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useUserStore } from '../../stores/UserStore';
const userStore = useUserStore();
const props = defineProps([
  'orderSum',
  'singlePrice',
  'sumPrice',
  'cocktailName',
  'orderDate',
  'orderId',
  'orderAmount',
]);
let dateOfOrder = ref(props.orderDate);
const convert = () => {
  console.log(typeof dateOfOrder.value);
};
</script>

<style lang="scss" scoped></style>

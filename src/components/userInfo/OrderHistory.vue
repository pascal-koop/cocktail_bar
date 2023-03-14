<template>
  <section>
    <div>
      <v-list>
        <v-list-item>
          <h3 class="ma-2">Order: {{ orderDate }} || Order Id: {{ orderId }}</h3>
          <v-list-item v-for="item in lineItems">
            <v-list-item-title class="ma-2">
              {{ item.cocktail_name }}
            </v-list-item-title>
            <v-list-item-title class="ma-2"> Amount: </v-list-item-title>
            <v-list-items-subtitle class="ma-2">
              <span class="count">{{ item.order_amount }}</span>
            </v-list-items-subtitle>
            <v-list-item-title class="ma-2"> Price: </v-list-item-title>
            <v-list-items-subtitle class="ma-2">
              <span class="count">{{ item.single_price }}</span> €
            </v-list-items-subtitle>
          </v-list-item>
          <v-list-item-title class="ma-2 total-li-item"> Total: </v-list-item-title>
          <v-list-items-subtitle class="ma-2 total-li-item">
            <span class="count"> {{ orderSum }}</span> €
          </v-list-items-subtitle>
          <hr class="devider-short" />
        </v-list-item>
        <hr class="devider-long thick" />
      </v-list>
    </div>
  </section>
</template>

<script setup>
import { useUserStore } from '../../stores/UserStore';
const userStore = useUserStore();
const props = defineProps([
  'orderSum',
  'singlePrice',
  'cocktailName',
  'orderDate',
  'orderId',
  'orderAmount',
  'lineItems',
]);
</script>

<style lang="scss" scoped></style>

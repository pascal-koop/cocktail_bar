<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent>
        <template v-slot:activator="{ props }">
          <v-btn class="place-order" v-bind="props"> Place Order </v-btn>
        </template>
        <v-card class="mx-auto
        ">
          <v-card-title class="text-h5"> You are about to checkout </v-card-title>
          <v-card-text
            >You are about to check out and commit to being there on the date and paying for your order.</v-card-text
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="takeOrder" color="darken-red-1" variant="text"> Agree </v-btn>
            <v-btn color="green-darken-1" variant="text" @click="dialog = false"> disagree </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCartStore } from '../../stores/CartStore';
import router from '/src/router/routes.js';
const cartStore = useCartStore();
let dialog = ref(false);

const takeOrder = () => {
  dialog.value = false;
  router.push('/cocktails');
  cartStore.postCart();
  cartStore.clearCart();
};
</script>

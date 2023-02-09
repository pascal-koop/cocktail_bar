<template>
  <div class="h-25 w-25 border ma-2 d-flex" >
  <div class="mb-3">
    <h2>Total</h2>
    <p>
    <span >Subtotal</span>
    <span class="text-right">{{  }}€</span>
    </p>
    <button  id="checkout-btn">GO TO CHECKOUT</button>
    </div>
  </div>
</template>

<script setup>

import { useCartStore } from '../../stores/CartStore';
const cartStore = useCartStore();
</script>

<style  scoped>
.text-right{

}
</style>
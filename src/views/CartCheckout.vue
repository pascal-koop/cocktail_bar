<template>
  
 <Checkout />
    
</template>

<script setup>
import { ref } from 'vue';
import Checkout from '../components/checkout/checkout.vue';
</script>

<style scoped>
.checkout-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 4rem;
}
.checkout-card {
  width: 100%;
  min-width: 400px;
  margin: 0 auto;
  padding: 20px;
 
}
</style>

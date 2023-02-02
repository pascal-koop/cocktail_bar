<template>
  <v-btn>Shopping Card - {{ cartStore.totalItemsCount }}</v-btn>
</template>

<script setup>
import { useCartStore } from '../../stores/cartStore';
const cartStore = useCartStore();
</script>

<style></style>

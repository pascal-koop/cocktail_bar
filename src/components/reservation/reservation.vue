<template>
  
  
  <div class="date-picker">
  
    <h2 class="date-picker-title">Choose your reservation date:</h2>
    <vueDatePicker />
  
  </div>
  
</template>

<script setup>
import vueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
</script>

<style scoped>
.date-picker {
  z-index: 1000;
  width: 300px;
  height: 100%;
  margin: 4rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
}
.date-picker-title {
  font-size: 2rem;
  margin-bottom: 2rem;

  padding: 0 1rem;
}
#reservation-card {
 width: 100%;
 z-index: 1;
}
</style>

<template>
  <v-container class="d-flex flex-column align-center w-50">
    <h1>Login</h1>
    <p>Protected Through Nothing... Yet!</p>
  </v-container>
  <v-container class="h-50">
    <div class="login-btns d-flex justify-center">
      <v-btn to="/login">Login</v-btn>
      <v-divider vertical class="ma-7"></v-divider>
      <v-btn to="/signup">Sign Up</v-btn>
    </div>
    <RouterView></RouterView>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
</script>

<style lang="scss" scoped></style>

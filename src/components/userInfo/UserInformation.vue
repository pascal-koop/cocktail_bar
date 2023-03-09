<template>
  <div>
    <v-list lines="one">
      <v-list-item >
        <v-list-item-content>
          <v-list-item-title class="ma-2">Name:</v-list-item-title>
          <v-list-item-subtitle class="ma-2">{{  }}</v-list-item-subtitle>
          <v-list-item-title class="ma-2">Last Name:</v-list-item-title>
          <v-list-item-subtitle class="ma-2">{{  }}</v-list-item-subtitle>
          <v-list-item-title class="ma-2">Phone:</v-list-item-title>
          <v-list-item-subtitle class="ma-2">{{  }}</v-list-item-subtitle>
          <v-list-item-title class="ma-2">Email:</v-list-item-title>
          <v-list-item-subtitle class="ma-2">{{  }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script setup>
import { useUserStore } from '../../stores/UserStore';
const userStore = useUserStore();
</script>

<style scoped></style>

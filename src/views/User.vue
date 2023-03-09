<template>
  <h1 class="text-h1">Hey User</h1>
  <v-card>
    <v-tabs bg-color="cyan-lighten-5" v-model="tab">
      <v-tab value="user">Info</v-tab>
      <v-tab value="history">Order History</v-tab>
    </v-tabs>
    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="user">
        <UserInformation />
        </v-window-item>
        <v-window-item value="history">
        <OrderHistory />
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from 'vue';
import UserInformation from '../components/userInfo/UserInformation.vue';
import OrderHistory from '../components/userInfo/OrderHistory.vue';


const tab = ref(null);
</script>

<style lang="scss" scoped></style>

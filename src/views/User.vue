<template>
  <h1 class="text-h1">Hey {{ userStore.userName }}</h1>
  <v-card>
    <v-tabs bg-color="cyan-lighten-5" v-model="tab">
      <v-tab value="user">Info</v-tab>
      <v-tab  value="history">Order History</v-tab>
    </v-tabs>
    <v-card-text class="mb-15">
      <v-window v-model="tab">
        <v-window-item value="user">
          <UserInformation
            :key="userStore.user.email"
            :first-name="userStore.user.first_name"
            :last-name="userStore.user.last_name"
            :phone="userStore.user.phone"
            :email="userStore.user.email"
          >
          </UserInformation>
        </v-window-item>
        <v-window-item  value="history">
          <OrderHistory
          v-for="history in userStore.history"
          :key="history.order_id"
          :order-sum="history.order_sum_price"
          :single-price="history.single_price"
          :cocktail-name="history.cocktail_name"
          :order-date="history.order_date"
          :order-amount="history.order_amount"
          :order-id="history.order_id"
          :line-items="history.line_items"
          ></OrderHistory>
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, onBeforeMount} from 'vue';
import UserInformation from '../components/userInfo/UserInformation.vue';
import OrderHistory from '../components/userInfo/OrderHistory.vue';
import { useUserStore } from '../stores/UserStore';
const userStore = useUserStore();
onBeforeMount(() => {
   userStore.fetchUserData();
   userStore.fetchUserHistory();
 });



const tab = ref(null);
</script>

<style lang="scss" scoped></style>

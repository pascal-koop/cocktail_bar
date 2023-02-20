<template>
  <div>
    <v-list lines="one">
      <v-list-item v-for="user in user" :key="user.name">
        <v-list-item-content>
          <v-list-item-title class="ma-2">Name:</v-list-item-title>
          <v-list-item-subtitle class="ma-2">{{ user.name }}</v-list-item-subtitle>
          <v-list-item-title class="ma-2">Last Name:</v-list-item-title>
          <v-list-item-subtitle class="ma-2">{{ user.sureName }}</v-list-item-subtitle>
          <v-list-item-title class="ma-2">Phone:</v-list-item-title>
          <v-list-item-subtitle class="ma-2">{{ user.phone }}</v-list-item-subtitle>
          <v-list-item-title class="ma-2">Email:</v-list-item-title>
          <v-list-item-subtitle class="ma-2">{{ user.email }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script setup>
const user = [
  {
    name: 'Hanna',
    sureName: 'Baker',
    phone: 19383485489494,
    email: 'hanna.baker@phony.com',
  },
];
</script>

<style scoped></style>

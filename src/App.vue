<template>
  <v-app>
    <transition name="route" mode="out-in" appear>
      <router-view> </router-view>
    </transition>
    <BottomNavigationBar />
  </v-app>
</template>

<script setup>
//import DarkLightMode from './components/LightDarkSwitcher.vue';
import BottomNavigationBar from './components/BottomNavigationBar.vue';
</script>

<style></style>

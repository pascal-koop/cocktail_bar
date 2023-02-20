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

<style>
.route-enter-from {
  opacity: 0;
  transform: translateX(-100px);
}
.route-enter-active,
.route-leave-active {
  transition: all 0.2s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
</style>

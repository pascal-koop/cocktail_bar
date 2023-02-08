<template>
  <v-app>
    <RouterView name="default" v-slot="{ Component }">
      <transition name="route" mode="out-in" appear>
        <component :is="Component" />
      </transition>
    </RouterView>

    <DarkLightMode />
    <RouterView name="FooterBar"></RouterView>
    <RouterView name="BottomNavigationBar"></RouterView>
  </v-app>
</template>

<script setup>
import DarkLightMode from './components/LightDarkSwitcher.vue';
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

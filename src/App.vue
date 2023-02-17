<template>
  <v-app>

    <RouterView name="default" v-slot="{ Component }">
      <transition name="route" mode="out-in" appear>
        <component :is="Component" />
      </transition>
    </RouterView>
    <RouterView name="BottomNavigationBar"></RouterView>
  </v-app>
</template>

<script setup>
import DarkLightMode from './components/LightDarkSwitcher.vue';
</script>

<style>

</style>

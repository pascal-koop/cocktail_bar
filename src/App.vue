<template>
  
  
    <RouterView name="NavigationBar"></RouterView>
    <RouterView name="default" v-slot="{ Component }">
      <transition name="route" mode="out-in" appear>
        <component :is="Component" />
      </transition>
    </RouterView>
   <ShoppingCartModal />
    
    <RouterView name="FooterBar"></RouterView>
    <DarkLightMode />

</template>

<script setup>
import DarkLightMode from './components/LightDarkSwitcher.vue'
import ShoppingCartModal from './components/ShoppingCartModal.vue';

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

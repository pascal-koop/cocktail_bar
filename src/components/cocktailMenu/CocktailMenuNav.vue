<template>
  <v-card>
    <v-tabs
      bg-color="indigo-darken-1"
      show-arrows
      center-active
      slider-color="lime-accent-1"
      next-icon="fa-solid fa-chevron-right"
      prev-icon="fa-solid fa-chevron-left"
      align-tabs="center"
    >
      <!-- <v-tab @click="cocktailStore.selectedCategory(index)" ... -->
      <v-tab @click="cocktailStore.setSelectedCategory(index)" v-for="index in cocktailStore.categorys" :key="index" :value="index">
        {{ index }}
      </v-tab>
    </v-tabs>
  </v-card>
</template>

<script setup>
  import {ref} from 'vue';
  import { useCocktailStore } from '../../stores/cocktailStore';
  const cocktailStore = useCocktailStore();

  const emits = defineEmits(['selected-category'])


</script>

<style lang="scss" scoped></style>

<template>
  <v-card elevation="5">
    <v-tabs
      show-arrows
      center-active
      next-icon="fa-solid fa-chevron-right"
      prev-icon="fa-solid fa-chevron-left"
      align-tabs="center"
    >
      <v-tab
        @click="cocktailStore.setSelectedCategory(index)"
        v-for="index in cocktailStore.categories"
        :key="index"
        :value="index"
      >
        {{ index }}
      </v-tab>
    </v-tabs>
  </v-card>
</template>

<script setup>
import { useCocktailStore } from '../../stores/cocktailStore';
const cocktailStore = useCocktailStore();

//const emits = defineEmits(['selected-category'])
</script>

<style lang="scss" scoped></style>

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
      <v-tab v-for="index in categories" :key="index" :value="index">
        {{ index }}
      </v-tab>
    </v-tabs>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        'Fruity',
        'Sweet',
        'Sour',
        'Bitter',
        'Beer',
        'Softdrinks',
        'Longdrinks',
        'Wine/Prosseco',
      ],
      
    };
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <v-card>
    <v-tabs
      bg-color="teal-darken-3"
      show-arrows
      center-active
      slider-color="teal-lighten-3"
      next-icon="fa-solid fa-chevron-right"
      prev-icon="fa-solid fa-chevron-left"
      align-tabs="center"
    >
      <v-tab
        v-for="i in 30"
        :key="i"
        :value="'tab-' + i"
      >
        Item {{ i }}
      </v-tab>
    </v-tabs>
  </v-card>
</template>

<script>
export default {
  
};
</script>

<style lang="scss" scoped></style>

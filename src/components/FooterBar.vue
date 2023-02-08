
<template>
  <v-layout class="w-auto">
  <v-footer light color="secondary"  class="bg-grey-lighten-1 w-auto ">
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        variant="text"
        class="mx-2 "
        rounded="xl"
      >
        {{ link }}
      </v-btn>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>Cocktail Bar©</strong>
      </v-col>
    </v-row>
  </v-footer>
</v-layout>
</template>
<script setup>
const links = [
  'AGB',
  'Impressum',
  'Facebook',
  'Instagramm',
  'Twitter'
]

</script>


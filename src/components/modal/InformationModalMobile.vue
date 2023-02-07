<template>
  <v-dialog
    v-model="dialog"
    activator="parent"
    scroll-strategy="close"
    fullscreen
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-card-title>
        {{ cocktailName }}
      </v-card-title>
      <v-img :src="imgUrl" height="200px" cover></v-img>
      <div class="ingredient-list">
        <v-list lines="one">
          <v-list-item :title="dummy" :subtitle="cc"> </v-list-item>
        </v-list>
      </div>
      <div class="allergenic-list">
        <v-list lines="one">
          <v-list-item :title="dummy" :subtitle="cc"> </v-list-item>
        </v-list>
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit praesentium ex repellendus
        soluta. Inventore quia illum asperiores repudiandae molestiae. Quidem.
      </p>
      <v-card-actions>
        <v-btn @click="dialog = false">Close</v-btn>
        <v-btn @click="">{{ cocktailPrice }} Buy</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
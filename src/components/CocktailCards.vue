<template>
  
    <v-card elevation="8" width="200" class="ma-5 flex-md-grow-1">
      <v-img :src="imgUrl" ></v-img>
      <v-card-item>
        <v-card-title>
          {{ cocktailName }}
        </v-card-title>
        <v-card-subtitle>
          {{ cocktailPrice }}
        </v-card-subtitle>
        <v-card-actions>
          <v-btn>
            Buy
          </v-btn>
          <v-btn>
           Info
          </v-btn>
        </v-card-actions>
      </v-card-item>
    </v-card>
 
</template>

<script>
export default {
  props: ['cocktailName', 'cocktailPrice', 'imgUrl']
};
</script>

<style scoped>
v-card{
  margin: 0; 
}
</style>

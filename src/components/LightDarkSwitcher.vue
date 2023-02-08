<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      
     

      <div class="py-4" />
      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-switch
            inset
            color="info"
            v-model="darkMode"
            @change="toggleTheme()"
            :label="`It's ${darkMode ? 'Dark' : 'Light'}!`"
          ></v-switch>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { useTheme } from "vuetify";

const theme = useTheme();
const darkMode = ref(false);

const toggleTheme = () => {
  theme.global.name.value = darkMode.value ? "dark" : "light";
  // Optional: Get value of current theme
  console.log(`Current theme is dark? ${theme.global.current.value.dark}`);
};
</script>
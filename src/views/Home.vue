<template>
  <div class="home">
    <!-- <v-btn @click="giveData">fetch</v-btn>
    <ul class="hah" v-for="items in fetchedData.cocktails">
    <li>{{ items.name }}</li>
    </ul> -->
    <HeroItems />
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import HeroItems from '../components/HeroItems.vue';
import { fetchData } from '../FetchModule';

// onBeforeMount(() => {
//   giveData();
// });
const fetchedData = ref([]);
const giveData = async () => {
  try {
    const data = await fetchData();

    fetchedData.value = data;
  } catch (error) {
    console.log(error.message);
  }
};

// async fetch
// const giveData = () => {

//   fetchData().then(data => {
//     console.log(data);

//   }).catch(error => {
//    console.log(error.message);
//   })
// }

// const giveData = () => {
//   fetchData();
// }
</script>

<style scoped>
.home {
  height: 100%;
  background-image: url('/public/images/background.jpeg');
  background-size: cover;
  background-position: top;
}
</style>

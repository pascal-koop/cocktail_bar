<template>
  <v-container class="welcome d-flex flex-column justify-center align-center">
    <h1>Cocktail Bar</h1>
    <div class="hero-txt-wrapper">
      <p class="welcome-txt">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima repellat provident nihil
        omnis dolorum exercitationem consectetur odio ad dolore quae. Tenetur, ratione eaque. Ut
        quis
      </p>
    </div>
    <div class="button-wrapper mb-7">
      <v-btn class="ma-4" to="/cocktails">Take Order</v-btn>
      <v-btn class="" to="/login">Login Or Sign In</v-btn>
    </div>
  </v-container>
</template>

<script setup>

</script>

<style scoped>
.welcome {
  /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */
  text-align: center;
  margin: 0 auto;
  padding: 2rem 0;
}


.welcome-txt {
  font-size: 1.5rem;
  font-weight: 400;
  font-style: italic;
  color: rgb(36, 36, 36);
  margin: 1rem 0;
}

.hero-txt-wrapper {
  width: 50%;
  margin: 24px auto;
  background-color: hsla(0, 0%, 0%, 0.407);
}

.hero-txt-wrapper > p {
  color: antiquewhite;
}
</style>

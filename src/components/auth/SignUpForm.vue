<template>
  <!-- <v-responsive> -->
    <v-container class="d-flex justify-center align-center h-100 mb-7">
      <v-card class="sign-up-card ">
        <v-card-title class="text-h2 text-center pt-4 pb-6">Sign Up</v-card-title>
        <v-card-item>
          <v-form class="ml-1" v-model="form" @submit.prevent="onSubmit">
            <v-text-field
              v-model="firstName"
              :rules="[rules.required, rules.firstName]"
              color="#009491"
              variant="underlined"
              label="First Name"
            ></v-text-field>
            <v-text-field
              v-model="lastName"
              :rules="[rules.required, rules.lastName]"
              color="#009491"
              variant="underlined"
              label="Last Name"
            ></v-text-field>
            <v-text-field
              color="#009491"
              variant="underlined"
              label="Phone"
              hint="Not Required"
              persistent-hint
            ></v-text-field>
            <v-text-field
              v-model="email"
              :rules="[rules.required, rules.email]"
              color="#009491"
              variant="underlined"
              label="Email"
            ></v-text-field>
            <v-btn class="mt-5 mb-5" :disabled="!form"  variant="elevated" type="submit" size="large" 
              >Sign Up</v-btn
            >
          </v-form>
          <p class="text-center ma-3"
            >You have an account?<router-link to="/login"> Login</router-link></p
          >
        </v-card-item>
      </v-card>
    </v-container>
  <!-- </v-responsive> -->
</template>

<script setup>
import { ref } from 'vue';

const form = ref(false);
const email = ref(null);
const firstName = ref(null);
const lastName = ref(null);

const onSubmit = () => {
  if (!form.value) return
  alert("hi")
};

const rules = {
  required: value => !!value || 'Field is required!',
  firstName: value => {
    const pattern = /[a-zA-Z]+/gm;
    return pattern.test(value) || 'Enter a valid name';
  },
  lastName: value => {
    const pattern = /[a-zA-Z]+/gm;
    return pattern.test(value) || 'Enter a valid name';
  },
  email: value => {
    const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return pattern.test(value) || 'Please enter a valid Email!';
  },
};
</script>

<style scoped>
.label{
  margin: 1em
}


</style>

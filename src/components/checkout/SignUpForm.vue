<template>
  <v-container>
    <v-responsive>
      <v-form v-model="form" @submit.prevent="onSubmit">
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
        <v-btn :disabled="!form" variant="elevated" type="submit" size="large" block>Sign Up</v-btn>
      </v-form>
    </v-responsive>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

const form = ref(false);
const email = ref(null);
const firstName = ref(null);
const lastName = ref(null);

const onSubmit = () => {
  if (!form.value) return;
};

const rules = {
  required: value => !!value || 'Field is required!',
  firstName: value => {
    const pattern = /[a-zA-Z]+/gm;
    return pattern.test(value) || 'Enter a valid name'
  },
  lastName: value => {
    const pattern = /[a-zA-Z]+/gm;
    return pattern.test(value) || 'Enter a valid name'
  },
  email: value => {
    const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return pattern.test(value) || 'Please enter a valid Email!'
  }

}
</script>

<style lang="scss" scoped></style>

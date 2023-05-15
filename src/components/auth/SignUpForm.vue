<template>
  <!-- <v-responsive> -->
  <v-container class="d-flex justify-center align-center h-100 mb-7">
    <v-card class="sign-up-card">
      <v-card-title class="text-h2 text-center pt-4 pb-6">Sign Up</v-card-title>
      <v-card-item>
        <v-form class="ml-1" v-model="form" @submit.prevent="submitForm">
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
            v-model="phone"
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
          <v-text-field
            v-model="password"
            :rules="[rules.required, rules.password]"
            color="#009491"
            variant="underlined"
            label="Password"
            :type="inputType"
          ></v-text-field>
          <v-text-field
            v-model="passwordRepeat"
            :rules="[rules.required, rules.passwordRepeat]"
            color="#009491"
            variant="underlined"
            label="Password Confirmation"
            :type="inputType"
          ></v-text-field>

          

          <v-btn class="mt-5 mb-5" :disabled="!form" variant="elevated" type="submit" size="large"
            >Sign Up</v-btn
          >
          <v-btn id="password-visibility" @click="togglePasswordVisibility"><svg-icon   type="mdi" :path="visibilityIcon"></svg-icon>
          {{ showPasswordText }} Password
          </v-btn>
          
        </v-form>
        <p class="text-center ma-3">
          You have an account?<router-link to="/login"> Login</router-link>
        </p>
      </v-card-item>
    </v-card>
  </v-container>
  <!-- </v-responsive> -->
</template>

<script setup>
import { postRegisterForm } from '../../../frontend/FetchModule.js';
import { useUserStore } from '../../stores/UserStore';
import { ref, computed } from 'vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiEyeOutline,mdiEyeOffOutline } from '@mdi/js';
const userStore = useUserStore();

const eyeOpen = mdiEyeOutline;
const eyeClose = mdiEyeOffOutline;

const form = ref(false);
const email = ref(null);
const firstName = ref(null);
const lastName = ref(null);
const phone = ref(null);
const password = ref(null);

const passwordRepeat = ref(null);
const passwordVisible = ref(false);
const showPasswordText = computed(() => (passwordVisible.value ? 'Hide' : 'Show'));
const visibilityIcon = computed(() => (passwordVisible.value ? eyeOpen : eyeClose));
const inputType = computed(() => (passwordVisible.value ? 'text' : 'password'));
const togglePasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value;

};
const submitForm = async () => {
  if (!form.value) return;
  // submit form

  try {
    const newUser = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      phone: phone.value,
      password: password.value,
      passwordRepeat: password.value,
    };
    await postRegisterForm(newUser);
  } catch (err) {
    throw err;
  }
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
  password: value => {
    // at least one number, one lowercase and one uppercase letter and at least 8 characters and no spaces in between the characters and at least one special character
    const pattern = /^(?=.*[!@#$%^&*()\-_=+{}[\]\\|:;"'<>,.?\/])(?=.*[0-9])(?=.*[A-Z])(?=.{8,})/;
    return (
      pattern.test(value) ||
      'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character'
    );
  },
  passwordRepeat: value => {
    return value === password.value || 'Passwords do not match!';
  },
};
</script>

<style scoped>
.label {
  margin: 1em;
}
</style>

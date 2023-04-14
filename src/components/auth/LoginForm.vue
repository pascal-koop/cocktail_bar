<template>
  <v-container class="d-flex justify-center align-center h-100 mb-7">
    <v-card class="sign-up-card">
      <v-card-title class="text-h2 text-center pt-4 pb-6">Login</v-card-title>
      <v-card-item>
        <v-form class="ml-1" v-model="form" @submit.prevent="onSubmit">
          <v-text-field
            v-model="email"
            :rules="[rules.required, rules.email]"
            color="#009491"
            variant="underlined"
            label="Email"
          ></v-text-field>
          <v-text-field
            v-model="password"
            :rules="[rules.required]"
            color="#009491"
            variant="underlined"
            label="Password"
            :type="inputType"
          ></v-text-field>
          <v-btn class="mt-5 mb-5" :disabled="!form" variant="elevated" type="submit" size="large"
            >Login
          </v-btn>
          <v-btn id="password-visibility" @click="togglePasswordVisibility"
            ><svg-icon type="mdi" :path="visibilityIcon"></svg-icon> {{ showPasswordText }} Password
          </v-btn>
        </v-form>
        <p class="text-center ma-3">
          You don't have an account? <router-link to="/register">Register</router-link>
        </p>
        <p>{{ firstName }}</p>
      </v-card-item>
    </v-card>
  </v-container>
  <!-- </v-responsive> -->
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

import SvgIcon from '@jamescoyle/vue-icon';
import { mdiEyeOutline, mdiEyeOffOutline } from '@mdi/js';
import { loginUser } from '../../FetchModule';
import { useAuthStore } from '../../stores/AuthStore';
const eyeOpen = mdiEyeOutline;
const eyeClose = mdiEyeOffOutline;
const authStore = useAuthStore();
const passwordVisible = ref(false);
const form = ref(false);
const email = ref(null);
const password = ref(null);
const router = useRouter();
const showPasswordText = computed(() => (passwordVisible.value ? 'Hide' : 'Show'));
const visibilityIcon = computed(() => (passwordVisible.value ? eyeOpen : eyeClose));
const inputType = computed(() => (passwordVisible.value ? 'text' : 'password'));
const togglePasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value;
};

async function onSubmit() {
  if (!form.value) return;
  console.log('submit');
  try {
    await loginUser({
      email: email.value,
      password: password.value,
    });

    const token = await loginUser({
      email: email.value,
      password: password.value,
    });

    authStore.setToken(token);
    
    // if (authStore.isLoggedIn) {
    //   router.push('/user');
    // }

    console.log('token', token);
  } catch (error) {
    throw error;
  }
}

// if (authStore.isLoggedIn) {
//   router.push('/user');
// }
const rules = {
  required: value => !!value || 'Field is required!',

  email: value => {
    const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return pattern.test(value) || 'Please enter a valid Email!';
  },
};
</script>

<style scoped>
.label {
  margin: 1em;
}
</style>

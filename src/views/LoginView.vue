<template>
  <div class="mx-auto max-w-md">
    <h1 class="mb-4 text-3xl font-bold">Log in</h1>

    <p
      v-if="successMessage !== ''"
      class="mb-4 rounded border border-green-700 bg-green-50 p-3"
    >
      {{ successMessage }}
    </p>

    <LoginForm @submit-login="handleLogin" />

    <p class="mt-4">
      No account yet?
      <router-link to="/register" class="text-green-800 underline">
        Register
      </router-link>
    </p>
  </div>
</template>

<script>
import LoginForm from "@/components/organisms/LoginForm.vue";

// login page
export default {
  name: "LoginView",
  components: {
    LoginForm,
  },
  data() {
    return {
      successMessage: "",
    };
  },
  methods: {
    // called when the form is valid
    handleLogin(formData) {
      // TODO: send to backend and save the JWT
      this.successMessage = "Welcome back, " + formData.emailOrUsername + "!";
    },
  },
};
</script>

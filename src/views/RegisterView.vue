<template>
  <div class="mx-auto max-w-md">
    <h1 class="mb-4 text-3xl font-bold">Create an account</h1>

    <p
      v-if="successMessage !== ''"
      class="mb-4 rounded border border-green-700 bg-green-50 p-3"
    >
      {{ successMessage }}
    </p>

    <RegisterForm @submit-register="handleRegister" />

    <p class="mt-4">
      Already have an account?
      <router-link to="/login" class="text-green-800 underline">
        Log in
      </router-link>
    </p>
  </div>
</template>

<script>
import RegisterForm from "@/components/organisms/RegisterForm.vue";

// register page
export default {
  name: "RegisterView",
  components: {
    RegisterForm,
  },
  data() {
    return {
      successMessage: "",
    };
  },
  methods: {
    // called when the form is valid
    handleRegister(formData) {
      // TODO: send to backend
      this.successMessage =
        "Thanks, " + formData.username + "! Your account has been created.";
    },
  },
};
</script>

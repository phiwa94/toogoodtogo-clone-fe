<template>
  <!-- novalidate: we check the input with yup -->
  <form novalidate @submit.prevent="submitForm">
    <FormInput
      id="emailOrUsername"
      v-model="form.emailOrUsername"
      label="Email or username"
      :error="errors.emailOrUsername"
      @blur="validateField('emailOrUsername')"
    />

    <FormInput
      id="password"
      v-model="form.password"
      label="Password"
      type="password"
      :error="errors.password"
      @blur="validateField('password')"
    />

    <BaseButton type="submit">Log in</BaseButton>
  </form>
</template>

<script>
import BaseButton from "@/components/atoms/BaseButton.vue";
import FormInput from "@/components/molecules/FormInput.vue";
import loginSchema from "@/validation/loginSchema.js";

// login form, checked with yup
export default {
  name: "LoginForm",
  components: {
    BaseButton,
    FormInput,
  },
  emits: ["submit-login"],
  data() {
    return {
      form: {
        emailOrUsername: "",
        password: "",
      },
      // error message per field, empty = no error
      errors: {
        emailOrUsername: "",
        password: "",
      },
    };
  },
  methods: {
    // check one field (when leaving the field)
    validateField(field) {
      loginSchema
        .validateAt(field, this.form)
        .then(() => {
          this.errors[field] = "";
        })
        .catch((error) => {
          this.errors[field] = error.message;
        });
    },

    // check all fields (on submit)
    submitForm() {
      this.clearErrors();
      // abortEarly: false -> get the errors of all fields, not just the first one
      loginSchema
        .validate(this.form, { abortEarly: false })
        .then(() => {
          this.$emit("submit-login", this.form);
        })
        .catch((error) => {
          // error.inner = list of all errors
          for (const fieldError of error.inner) {
            // only the first message per field
            if (this.errors[fieldError.path] === "") {
              this.errors[fieldError.path] = fieldError.message;
            }
          }
        });
    },

    clearErrors() {
      for (const field in this.errors) {
        this.errors[field] = "";
      }
    },
  },
};
</script>

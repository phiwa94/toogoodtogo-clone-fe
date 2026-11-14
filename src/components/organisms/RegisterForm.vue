<template>
  <!-- novalidate: we check the input with yup -->
  <form novalidate @submit.prevent="submitForm">
    <FormSelect
      id="salutation"
      v-model="form.salutation"
      label="Salutation"
      :options="salutations"
      :error="errors.salutation"
      @blur="validateField('salutation')"
    />

    <!-- only shown for "Other" -->
    <FormInput
      v-if="form.salutation === 'Other'"
      id="otherSalutation"
      v-model="form.otherSalutation"
      label="Your salutation"
      :error="errors.otherSalutation"
      @blur="validateField('otherSalutation')"
    />

    <FormInput
      id="email"
      v-model="form.email"
      label="Email"
      type="email"
      :error="errors.email"
      @blur="validateField('email')"
    />

    <FormInput
      id="username"
      v-model="form.username"
      label="Username"
      :error="errors.username"
      @blur="validateField('username')"
    />

    <FormInput
      id="password"
      v-model="form.password"
      label="Password"
      type="password"
      :error="errors.password"
      @blur="validateField('password')"
    />

    <FormInput
      id="repeatPassword"
      v-model="form.repeatPassword"
      label="Repeat password"
      type="password"
      :error="errors.repeatPassword"
      @blur="validateField('repeatPassword')"
    />

    <FormSelect
      id="country"
      v-model="form.country"
      label="Country"
      :options="countries"
      :error="errors.country"
      @blur="validateField('country')"
    />

    <BaseButton type="submit">Register</BaseButton>
  </form>
</template>

<script>
import BaseButton from "@/components/atoms/BaseButton.vue";
import FormInput from "@/components/molecules/FormInput.vue";
import FormSelect from "@/components/molecules/FormSelect.vue";
import countries from "@/data/countries.js";
import registerSchema from "@/validation/registerSchema.js";

// register form, checked with yup
export default {
  name: "RegisterForm",
  components: {
    BaseButton,
    FormInput,
    FormSelect,
  },
  emits: ["submit-register"],
  data() {
    return {
      salutations: ["Male", "Female", "Other"],
      countries: countries,
      form: {
        salutation: "",
        otherSalutation: "",
        email: "",
        username: "",
        password: "",
        repeatPassword: "",
        country: "",
      },
      // error message per field, empty = no error
      errors: {
        salutation: "",
        otherSalutation: "",
        email: "",
        username: "",
        password: "",
        repeatPassword: "",
        country: "",
      },
    };
  },
  methods: {
    // check one field (when leaving the field)
    validateField(field) {
      registerSchema
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
      registerSchema
        .validate(this.form, { abortEarly: false })
        .then(() => {
          this.$emit("submit-register", this.form);
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

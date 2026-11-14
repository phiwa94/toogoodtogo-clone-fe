import * as yup from "yup";

// rules for the register form
const registerSchema = yup.object({
  salutation: yup.string().required("Please choose a salutation."),

  // only needed if salutation is "Other"
  otherSalutation: yup.string().when("salutation", {
    is: "Other",
    then: (schema) =>
      schema
        .required("Please enter your salutation.")
        .max(30, "Please use at most 30 characters."),
  }),

  email: yup
    .string()
    .required("Please enter your email address.")
    .email("Please enter a valid email address."),

  username: yup.string().trim().required("Please enter a username."),

  password: yup
    .string()
    .required("Please enter a password.")
    .min(12, "The password needs at least 12 characters.")
    .matches(/[a-z]/, "The password needs at least one lowercase letter.")
    .matches(/[A-Z]/, "The password needs at least one uppercase letter.")
    .matches(/[0-9]/, "The password needs at least one number.")
    .matches(/[^a-zA-Z0-9]/, "The password needs at least one symbol."),

  // must be the same as password
  repeatPassword: yup
    .string()
    .required("Please repeat your password.")
    .oneOf([yup.ref("password")], "The passwords do not match."),

  country: yup.string().required("Please choose your country."),
});

export default registerSchema;

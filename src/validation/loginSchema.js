import * as yup from "yup";

// rules for the login form
const loginSchema = yup.object({
  emailOrUsername: yup
    .string()
    .trim()
    .required("Please enter your email address or username."),

  password: yup.string().required("Please enter your password."),
});

export default loginSchema;

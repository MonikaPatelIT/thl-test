const Yup = require("yup");

export const Schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address.")
    .max(255, "Character limit exceeded.")
    .required("Email address is required."),
  password: Yup.string().required("Password is required."),
});


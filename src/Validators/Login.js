import * as Yup from "yup";

export const loginValidator = Yup.object({
  password: Yup.string()
    .required("Password required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Use 8+ characters with uppercase, lowercase, number & special symbol."
    ),
  email: Yup.string()
    .email("please enter a valid email")
    .required("Email required"),
});

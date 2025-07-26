import * as Yup from "yup";

export const billingDetailsValidator = Yup.object({
  firstName: Yup.string().required("first name required"),
  companyName: Yup.string().required("Company name required"),
  streetAddress: Yup.string().required("Strict address  required"),
  apartment: Yup.string(),
  city: Yup.string().required("City required"),
  phoneNumber: Yup.string().required("Phone number required"),
  emailAddress: Yup.string()
    .required("Email required")
    .email("Invalid email format"),
});

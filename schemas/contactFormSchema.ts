import * as Yup from "yup";

export const validateContactForm = () => {
  return {
    fullName: Yup.string()
      .min(1, "Must be 1 characters or more")
      .max(50, "Must be 50 characters or less")
      .required("Requierd"),
    email: Yup.string().email("Invalid email address").required("Required"),
    message: Yup.string()
      .min(3, "Must be 3 characters or more")
      .required("Requierd"),
  };
};

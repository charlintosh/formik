import * as Yup from "yup";
export const extraPersonalInformationValidationSchema = Yup.object().shape({
    userPhone: Yup.number().required("Required"),
    userEmail: Yup.string().required("Required"),
    sofwareDevelop: Yup.string().required("Required"),
  });
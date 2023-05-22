import * as Yup from "yup";

export const bankAccountValidationSchema = Yup.object({
  accountNumber: Yup.number().required("Account Number is required"),
  CLABE: Yup.number().required("CLABE is required"),
  bank: Yup.string().required("Bank is required"),
});

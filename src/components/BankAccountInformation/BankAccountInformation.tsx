import React from "react";
import TextField from "@mui/material/TextField";
import { CommonFormProps } from "../../types";

interface BankAccountFormProps extends CommonFormProps {}

export const BankAccountForm = ({
  values,
  errors,
  touched,
  isValid,
  handleChange,
  handleBlur
}: BankAccountFormProps) => {
  return (
    <div>
      <h1>Bank Account</h1>
      <TextField
        fullWidth
        id="accountNumber"
        name="accountNumber"
        label="Account Number:"
        value={values.bankAccount.accountNumber}
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          touched?.bankAccount?.accountNumber &&
          Boolean(errors?.bankAccount?.accountNumber)
        }
        helperText={
          touched?.bankAccount?.accountNumber &&
          errors?.bankAccount?.accountNumber
            ? errors?.bankAccount?.accountNumber
            : ""
        }
      />
      <TextField
        fullWidth
        id="CLABE"
        name="CLABE"
        label="CLABE:"
        value={values.bankAccount.CLABE}
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          touched?.bankAccount?.CLABE &&
          Boolean(errors?.bankAccount?.CLABE)
        }
        helperText={
          touched?.bankAccount?.CLABE &&
          errors?.bankAccount?.CLABE
            ? errors?.bankAccount?.CLABE
            : ""
        }
      />
      <TextField
        fullWidth
        id="bank"
        name="bank"
        label="bank:"
        value={values.bankAccount.bank}
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          touched?.bankAccount?.bank &&
          Boolean(errors?.bankAccount?.bank)
        }
        helperText={
          touched?.bankAccount?.bank &&
          errors?.bankAccount?.bank
            ? errors?.bankAccount?.bank
            : ""
        }
      />
    </div>
  );
};

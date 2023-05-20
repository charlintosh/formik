import React, { useEffect } from "react";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

type Props = {
  typeOfResidency: string;
  otherResidency: string;
  amountOfPeople: string;
};
const validation = (values: Props) => {
  const errors: Partial<Props> = {};

  if (!values.typeOfResidency) {
    errors.typeOfResidency = "required";
  }

  return errors;
};
export const AdressExtraInformation = (props: Props) => {
  const { handleChange, handleSubmit, values, touched, errors, isValid } =
    useFormik<Props>({
      initialValues: {
        typeOfResidency: props.typeOfResidency || "",
        otherResidency: props.otherResidency || "",
        amountOfPeople: props.amountOfPeople || "",

      },
      validate: validation,
      onSubmit: (values) => {
        alert(JSON.stringify(values));
      },
    });

  useEffect(() => {
    console.log(touched, errors);
  }, [touched, errors]);

  return (
    <form onSubmit={handleSubmit}>
      <FormControl fullWidth>
        <InputLabel id="typeOfResidency">Type of Residency</InputLabel>
        <Select
          id="typeOfResidency"
          name="typeOfResidency"
          label="typeOfResidency"
          value={values.typeOfResidency}
          onChange={handleChange}
          error={touched.typeOfResidency && Boolean(errors.typeOfResidency)}
        >
          <MenuItem value="">
            <em>Select</em>
          </MenuItem>
          <MenuItem value="Rented">Rented</MenuItem>
          <MenuItem value="Owned">Owned (by me or my parents )</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>
        {values.typeOfResidency === "Other" && (
          <FormControl>
            <TextField
              id="preferredGender"
              name="preferredGender"
              label="Preferred Gender"
              value={values.otherResidency}
              onChange={handleChange}
              error={touched.otherResidency && Boolean(errors.otherResidency)}
              helperText={touched.otherResidency && errors.otherResidency}
            />
          </FormControl>
        )}
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="typeOfResidency">Amount of People</InputLabel>
        <Select
          id="amountOfPeople "
          name="amountOfPeople "
          label="amountOfPeople "
          value={values.amountOfPeople }
          onChange={handleChange}
          error={touched.amountOfPeople  && Boolean(errors.amountOfPeople )}
        >
          <MenuItem value="">
            <em>Select</em>
          </MenuItem>
          <MenuItem value="Alone">I live alone</MenuItem>
          <MenuItem value="Parents">I live with my parents</MenuItem>
          <MenuItem value="significantOther">I live with my significant other</MenuItem>
          <MenuItem value="significantOtherandKids">I live with my significant other and my kids</MenuItem>
        </Select>
      </FormControl>
      
    </form>
  );
};

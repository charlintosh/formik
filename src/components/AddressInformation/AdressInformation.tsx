import React, { useEffect, useRef } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import * as Yup from "yup";
type Props = {
  userStreet: string;
  userStreetA: string;
  userStreetB: string;
  userColony: string;
  userState: string;
  userPostalCode: number;
  userProofAdress: File | null;
};
const validationSchema = Yup.object({
  userStreet: Yup.string().required("Street is required"),
  userStreetA: Yup.string().required("StreetA is required"),
  userStreetB: Yup.string().required("StreetB is required"),
  userColony: Yup.string().required("Colony is required"),
  userProofAdress: Yup.mixed().required("Proof of address is required"),
});


export const AdressInformation = (props: Props) => {
  const { handleChange, handleSubmit, values, touched, errors, isValid } =
    useFormik<Props>({
      initialValues: {
        userStreet: props.userStreet || "",
        userStreetA: props.userStreetA || "",
        userStreetB: props.userStreetB || "",
        userColony: props.userColony || "",
        userState: props.userState || "",
        userPostalCode: props.userPostalCode,
        userProofAdress: props.userProofAdress || null,
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        alert(JSON.stringify(values));
      },
    });

  useEffect(() => {
    console.log(touched, errors);
  }, [touched, errors]);
  const fileRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      handleChange({ target: { name: "userProofAdress", value: file } });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity="info">
          Please provide your current address as we're going to deliver
          important documents later in the process
        </Alert>
      </Stack>
      <TextField
        fullWidth
        id="userStreet"
        name="userStreet"
        label="Street: "
        value={values.userStreet}
        onChange={handleChange}
        error={touched.userStreet && Boolean(errors.userStreet)}
        helperText={touched.userStreet && errors.userStreet}
      />
      <TextField
        fullWidth
        id="userStreetA"
        name="userStreetA"
        label="StreetA: "
        value={values.userStreetA}
        onChange={handleChange}
        error={touched.userStreetA && Boolean(errors.userStreetA)}
        helperText={touched.userStreetA && errors.userStreetA}
      />
      <TextField
        fullWidth
        id="userStreetB"
        name="userStreetB"
        label="StreetB: "
        value={values.userStreetB}
        onChange={handleChange}
        error={touched.userStreetB && Boolean(errors.userStreetB)}
        helperText={touched.userStreetB && errors.userStreetB}
      />
      <TextField
        fullWidth
        id="userColony"
        name="userColony"
        label="Colony: "
        value={values.userColony}
        onChange={handleChange}
        error={touched.userColony && Boolean(errors.userColony)}
        helperText={touched.userColony && errors.userColony}
      />
      <TextField
        fullWidth
        id="userState"
        name="userState"
        label="State: "
        value={values.userState}
        onChange={handleChange}
        error={touched.userState && Boolean(errors.userState)}
        helperText={touched.userState && errors.userState}
      />
      <TextField
        fullWidth
        id="userPostalCode"
        name="userPostalCode"
        label="PostalCode: "
        value={values.userPostalCode}
        onChange={handleChange}
        error={touched.userPostalCode && Boolean(errors.userPostalCode)}
        helperText={touched.userPostalCode && errors.userPostalCode}
      />
       <div>
        <label htmlFor="userProofAdress">Choose files</label>{" "}
        <input
          ref={fileRef}
          multiple={true}
          type="file"
          name="userProofAdress"
          onChange={handleFileChange}
        />
      </div>
      {touched.userProofAdress && errors.userProofAdress && (
        <div style={{ color: "red" }}>{errors.userProofAdress}</div>
      )}
      

      <button disabled={!isValid} type="submit">
        Submit
      </button>
    </form>
  );
};



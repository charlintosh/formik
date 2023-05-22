import React, { useRef } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
//import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
//import * as Yup from "yup";
import { CommonFormProps } from "../../types";
interface adressInformationProps extends CommonFormProps {}
/*type Props = {
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
*/

export const AdressInformation = ({
  values,
  errors,
  touched,
  isValid,
  handleChange,
  onSubmit,
}: adressInformationProps) => {
  //const { handleChange, handleSubmit, values, touched, errors, isValid } =
    /*useFormik<Props>({
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
  }, [touched, errors]);*/
  const fileRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      handleChange({ target: { name: "userProofAdress", value: file } });
    }
  };

  return (
    <form onSubmit={onSubmit}>
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
        value={values.adressInformation.userStreet}
        onChange={handleChange}
        error={touched?.adressInformation?.userStreet && Boolean(errors?.adressInformation?.userStreet)}
        helperText={touched?.adressInformation?.userStreet && errors?.adressInformation?.userStreet}
      />
      <TextField
        fullWidth
        id="userStreetA"
        name="userStreetA"
        label="StreetA: "
        value={values.adressInformation.userStreetA}
        onChange={handleChange}
        error={touched?.adressInformation?.userStreetA && Boolean(errors?.adressInformation?.userStreetA)}
        helperText={touched?.adressInformation?.userStreetA && errors?.adressInformation?.userStreetA}
      />
      <TextField
        fullWidth
        id="userStreetB"
        name="userStreetB"
        label="StreetB: "
        value={values.adressInformation.userStreetB}
        onChange={handleChange}
        error={touched?.adressInformation?.userStreetB && Boolean(errors?.adressInformation?.userStreetB)}
        helperText={touched?.adressInformation?.userStreetB && errors?.adressInformation?.userStreetB}
      />
      <TextField
        fullWidth
        id="userColony"
        name="userColony"
        label="Colony: "
        value={values.adressInformation.userColony}
        onChange={handleChange}
        error={touched?.adressInformation?.userColony && Boolean(errors?.adressInformation?.userColony)}
        helperText={touched?.adressInformation?.userColony && errors?.adressInformation?.userColony}
      />
      <TextField
        fullWidth
        id="userState"
        name="userState"
        label="State: "
        value={values.adressInformation.userState}
        onChange={handleChange}
        error={touched?.adressInformation?.userState && Boolean(errors?.adressInformation?.userState)}
        helperText={touched?.adressInformation?.userState && errors?.adressInformation?.userState}
      />
      <TextField
        fullWidth
        id="userPostalCode"
        name="userPostalCode"
        label="PostalCode: "
        value={values.adressInformation.userPostalCode}
        onChange={handleChange}
        error={touched?.adressInformation?.userPostalCode && Boolean(errors?.adressInformation?.userPostalCode)}
        helperText={touched?.adressInformation?.userPostalCode && errors?.adressInformation?.userPostalCode}
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
      {touched?.adressInformation?.userProofAdress && errors?.adressInformation?.userProofAdress && (
        <div style={{ color: "red" }}>{errors?.adressInformation?.userProofAdress}</div>
      )}
      

      <button disabled={!isValid} type="submit">
        Next
      </button>
    </form>
  );
};



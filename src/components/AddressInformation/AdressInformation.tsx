import React, { useRef } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { CommonFormProps } from "../../types";
interface adressInformationProps extends CommonFormProps {}

export const AdressInformation = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
}: adressInformationProps) => {
  const fileRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      handleChange({
        target: { name: "adressInformation.userProofAdress", value: file },
      });
    }
  };

  return (
    <div>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity="info">
          Please provide your current address as we're going to deliver
          important documents later in the process
        </Alert>
      </Stack>
      <TextField
        fullWidth
        id="userStreet"
        name="adressInformation.userStreet"
        label="Street: "
        value={values.adressInformation.userStreet}
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          touched?.adressInformation?.userStreet &&
          Boolean(errors?.adressInformation?.userStreet)
        }
        helperText={
          touched?.adressInformation?.userStreet &&
          errors?.adressInformation?.userStreet
        }
      />
      <TextField
        fullWidth
        id="userStreetA"
        name="adressInformation.userStreetA"
        label="StreetA: "
        value={values.adressInformation.userStreetA}
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          touched?.adressInformation?.userStreetA &&
          Boolean(errors?.adressInformation?.userStreetA)
        }
        helperText={
          touched?.adressInformation?.userStreetA &&
          errors?.adressInformation?.userStreetA
        }
      />
      <TextField
        fullWidth
        id="userStreetB"
        name="adressInformation.userStreetB"
        label="StreetB: "
        value={values.adressInformation.userStreetB}
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          touched?.adressInformation?.userStreetB &&
          Boolean(errors?.adressInformation?.userStreetB)
        }
        helperText={
          touched?.adressInformation?.userStreetB &&
          errors?.adressInformation?.userStreetB
        }
      />
      <TextField
        fullWidth
        id="userColony"
        name="adressInformation.userColony"
        label="Colony: "
        value={values.adressInformation.userColony}
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          touched?.adressInformation?.userColony &&
          Boolean(errors?.adressInformation?.userColony)
        }
        helperText={
          touched?.adressInformation?.userColony &&
          errors?.adressInformation?.userColony
        }
      />
      <TextField
        fullWidth
        id="userState"
        name="adressInformation.userState"
        label="State: "
        value={values.adressInformation.userState}
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          touched?.adressInformation?.userState &&
          Boolean(errors?.adressInformation?.userState)
        }
        helperText={
          touched?.adressInformation?.userState &&
          errors?.adressInformation?.userState
        }
      />
      <TextField
        fullWidth
        id="userPostalCode"
        name="adressInformation.userPostalCode"
        label="PostalCode: "
        value={values.adressInformation.userPostalCode}
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          touched?.adressInformation?.userPostalCode &&
          Boolean(errors?.adressInformation?.userPostalCode)
        }
        helperText={
          touched?.adressInformation?.userPostalCode &&
          errors?.adressInformation?.userPostalCode
        }
      />
      <div>
        <label htmlFor="userProofAdress">Choose files</label>{" "}
        <input
          ref={fileRef}
          multiple={true}
          type="file"
          name="adressInformation.userProofAdress"
          onChange={handleFileChange}
          onBlur={handleBlur}
        />
      </div>
      {touched?.adressInformation?.userProofAdress &&
        errors?.adressInformation?.userProofAdress && (
          <div style={{ color: "red" }}>
            {errors?.adressInformation?.userProofAdress}
          </div>
        )}
    </div>
  );
};

import React from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { DatePicker } from '@mui/lab';
import { CommonFormProps } from "../../types";

interface RecruitmentFormProps extends CommonFormProps {}

export const RecruitmentForm = ({
  values,
  errors,
  touched,
  isValid,
  handleChange,
  handleBlur,
  onSubmit,
  setFieldValue,
}: RecruitmentFormProps) => {
  return (
    <form onSubmit={onSubmit}>
      <h1>Personal Information</h1>
      <TextField
        fullWidth
        id="userName"
        name="recruitmentInfo.userName"
        label="Name:"
        value={values.recruitmentInfo.userName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          touched?.recruitmentInfo?.userName &&
          Boolean(errors?.recruitmentInfo?.userName)
        }
        helperText={
          touched?.recruitmentInfo?.userName &&
          errors?.recruitmentInfo?.userName
            ? errors?.recruitmentInfo?.userName
            : ""
        }
      />
      <TextField
        fullWidth
        id="paternalLastName"
        name="recruitmentInfo.paternalLastName"
        label="Paternal LastName:"
        value={values.recruitmentInfo.paternalLastName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          touched?.recruitmentInfo?.paternalLastName &&
          Boolean(errors?.recruitmentInfo?.paternalLastName)
        }
        helperText={
          touched?.recruitmentInfo?.paternalLastName &&
          errors?.recruitmentInfo?.paternalLastName
            ? errors?.recruitmentInfo?.paternalLastName
            : ""
        }
      />
      <TextField
        fullWidth
        id="maternalLastName"
        name="recruitmentInfo.maternalLastName"
        label="Maternal LastName:"
        value={values.recruitmentInfo.maternalLastName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          touched?.recruitmentInfo?.maternalLastName &&
          Boolean(errors?.recruitmentInfo?.maternalLastName)
        }
        helperText={
          touched?.recruitmentInfo?.maternalLastName &&
          errors?.recruitmentInfo?.maternalLastName
            ? errors?.recruitmentInfo?.maternalLastName
            : ""
        }
      />

      <FormControl fullWidth>
        <InputLabel id="gender">Gender</InputLabel>
        <Select
          id="gender"
          name="recruitmentInfo.gender"
          label="Gender"
          value={values.recruitmentInfo.gender}
          onChange={handleChange}
          onBlur={handleBlur}
          error={
            touched?.recruitmentInfo?.gender &&
            Boolean(errors?.recruitmentInfo?.gender)
          }
        >
          <MenuItem value="">
            <em>Select</em>
          </MenuItem>
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>
        {values.recruitmentInfo.gender === "Other" && (
          <FormControl>
            <TextField
              id="preferredGender"
              name="recruitmentInfo.preferredGender"
              label="Preferred Gender"
              value={values.recruitmentInfo.preferredGender}
              onChange={handleChange}
              error={
                touched?.recruitmentInfo?.preferredGender &&
                Boolean(errors?.recruitmentInfo?.preferredGender)
              }
              helperText={
                touched?.recruitmentInfo?.preferredGender &&
                errors?.recruitmentInfo?.preferredGender
                  ? errors?.recruitmentInfo?.preferredGender
                  : ""
              }
            />
          </FormControl>
        )}
      </FormControl>
      <TextField
        fullWidth
        id="dateOfBirth"
        name="recruitmentInfo.dateOfBirth"
        label="Date of Birth (YYYY-MM-DD)"
        value={values.recruitmentInfo.dateOfBirth}
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          touched?.recruitmentInfo?.dateOfBirth &&
          Boolean(errors?.recruitmentInfo?.dateOfBirth)
        }
        helperText={
          touched?.recruitmentInfo?.dateOfBirth &&
          errors?.recruitmentInfo?.dateOfBirth
            ? errors?.recruitmentInfo?.dateOfBirth
            : ""
        }
      />
      <TextField
        fullWidth
        id="placeOfBirth"
        name="recruitmentInfo.placeOfBirth"
        label="Place of Birth"
        value={values.recruitmentInfo.placeOfBirth}
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          touched?.recruitmentInfo?.placeOfBirth &&
          Boolean(errors?.recruitmentInfo?.placeOfBirth)
        }
        helperText={
          touched?.recruitmentInfo?.placeOfBirth &&
          errors?.recruitmentInfo?.placeOfBirth
        }
      />
      {values.recruitmentInfo.placeOfBirth === "Mexico" && (
        <TextField
          fullWidth
          id="curp"
          name="recruitmentInfo.curp"
          label="CURP"
          value={values.recruitmentInfo.curp}
          onChange={handleChange}
          onBlur={handleBlur}
          error={
            touched?.recruitmentInfo?.curp &&
            Boolean(errors?.recruitmentInfo?.curp)
          }
          helperText={
            touched?.recruitmentInfo?.curp && errors?.recruitmentInfo?.curp
          }
        />
      )}
      {values.recruitmentInfo.placeOfBirth !== "Mexico" && (
        <TextField
          id="passportNumber"
          name="recruitmentInfo.passportNumber"
          label="Passport Number"
          value={values.recruitmentInfo.passportNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          error={
            touched?.recruitmentInfo?.passportNumber &&
            Boolean(errors?.recruitmentInfo?.passportNumber)
          }
          helperText={
            touched?.recruitmentInfo?.passportNumber &&
            errors?.recruitmentInfo?.passportNumber
          }
        />
      )}
      <input
        type="file"
        id="proofOfId"
        name="recruitmentInfo.proofOfId"
        onChange={(event) => {
          const file = event.currentTarget.files?.[0];
          setFieldValue("proofOfId", file);
        }}
        onBlur={handleBlur}
      />
      <TextField
        fullWidth
        id="city"
        name="recruitmentInfo.city"
        label="city"
        value={values.recruitmentInfo.city}
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          touched?.recruitmentInfo?.city &&
          Boolean(errors?.recruitmentInfo?.city)
        }
        helperText={
          touched?.recruitmentInfo?.city && errors?.recruitmentInfo?.city
        }
      />
      <TextField
        fullWidth
        id="state"
        name="recruitmentInfo.state"
        label="state"
        value={values.recruitmentInfo.state}
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          touched?.recruitmentInfo?.state &&
          Boolean(errors?.recruitmentInfo?.state)
        }
        helperText={
          touched?.recruitmentInfo?.state && errors?.recruitmentInfo?.state
        }
      />
      <TextField
        fullWidth
        id="country"
        name="recruitmentInfo.country"
        label="country"
        value={values.recruitmentInfo.country}
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          touched?.recruitmentInfo?.country &&
          Boolean(errors?.recruitmentInfo?.country)
        }
        helperText={
          touched?.recruitmentInfo?.country && errors?.recruitmentInfo?.country
        }
      />
      
      <button disabled={!isValid} type="submit">
        Next

      </button>
    </form>
  );
};

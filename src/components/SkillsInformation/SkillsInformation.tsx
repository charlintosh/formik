import React from "react";
import TextField from "@mui/material/TextField";
import { CommonFormProps } from "../../types";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

interface skillsInformationFormProps extends CommonFormProps {}

export const skillsForm = ({
  values,
  errors,
  touched,
  isValid,
  handleChange,
  handleBlur,
}: skillsInformationFormProps) => {
  return (
    <div>
      <h1>Skills</h1>
      <TextField
        fullWidth
        id="programmingLanguage"
        name="programmingLanguage"
        label="Programming Language:"
        value={values.skillsInformation.programmingLanguage}
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          touched?.skillsInformation?.programmingLanguage &&
          Boolean(errors?.skillsInformation?.programmingLanguage)
        }
        helperText={
          touched?.skillsInformation?.programmingLanguage &&
          errors?.skillsInformation?.programmingLanguage
            ? errors?.skillsInformation?.programmingLanguage
            : ""
        }
      />
      <FormControl fullWidth>
        <InputLabel id="experienceInfo">Amount of experience</InputLabel>
        <Select
          id="experienceInfo"
          name="experienceInfo"
          label="experienceInfo"
          value={values.skillsInformation.experienceInfo}
          onChange={handleChange}
          error={
            touched?.skillsInformation?.experienceInfo &&
            Boolean(errors?.skillsInformation?.experienceInfo)
          }
        >
          <MenuItem value="">
            <em>Select</em>
          </MenuItem>
          <MenuItem value="LessThan3Months">Less than 3 months</MenuItem>
          <MenuItem value="3To6Months">3 to 6 months</MenuItem>
          <MenuItem value="6To12Months">6 to 12 months</MenuItem>
          <MenuItem value="MoreThan12Months">More than 12 months</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="disability">Do you have any disability?</InputLabel>
        <Select
          id="disability"
          name="disability"
          label="disability"
          value={values.skillsInformation.disability}
          onChange={handleChange}
          error={
            touched?.skillsInformation?.disability &&
            Boolean(errors?.skillsInformation?.disability)
          }
        >
          <MenuItem value="">
            <em>Select</em>
          </MenuItem>
          <MenuItem value="MotorSkills">Motor skills</MenuItem>
          <MenuItem value="AuditoryDisability">Auditory disability</MenuItem>
          <MenuItem value="VisualImpairment">Visual impairment</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

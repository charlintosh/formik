import React, { useEffect } from "react";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import * as Yup from "yup";
import FormLabel from "@mui/material/FormLabel";

type Props = {
  userPhone: number;
  userEmail: string;
  altUserEmail: string;
  foundUs: string;
  otherFoundUs: string;
  sofwareDevelop: string;
  degreeStudies: string;
  otherDegreeStudies: string;
  noFormalEducation: string;
};
const validationSchema = Yup.object().shape({
  userPhone: Yup.number().required("Required"),
  userEmail: Yup.string().required("Required"),
  sofwareDevelop: Yup.string().required("Required"),
});

const STUDIES_DEGREE = {
  UNIVERSITY: { value: "1", label: "Highschool or equivalent" },
  INCOMPLETE_DREGRE: { value: "2", label: "Incomplete dregree or in process" },
  UNIVERSITY_DEGREE: { value: "3", label: "University degree" },
  INCOMPLETE_MASTER: { value: "4", label: "ncomplete masters or in progress" },
};
export const ExtraPersonalInfo = (props: Props) => {
  const {
    handleChange,
    handleSubmit,
    values,
    touched,
    errors,
    isValid,
    setFieldValue,
  } = useFormik<Props>({
    initialValues: {
      userPhone: props.userPhone,
      userEmail: props.userEmail,
      altUserEmail: props.altUserEmail,
      foundUs: props.foundUs,
      otherFoundUs: props.otherFoundUs,
      sofwareDevelop: props.sofwareDevelop,
      degreeStudies: props.degreeStudies,
      otherDegreeStudies: props.otherDegreeStudies,
      noFormalEducation: props.noFormalEducation,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  const mapExtraDegrees = Object.values(STUDIES_DEGREE).map((values) => {
    return <MenuItem value={values.value}>{values.label}</MenuItem>;
  });

  useEffect(() => {
    console.log(touched, errors);
  }, [touched, errors]);
  return (
    <form onSubmit={handleSubmit}>
      <p>Personal Information</p>
      <TextField
        fullWidth
        id="userPhone"
        name="userPhone"
        label="Phone Number: "
        value={values.userPhone}
        onChange={handleChange}
        error={touched.userPhone && errors.userPhone ? true : false}
        helperText={
          touched.userPhone && errors.userPhone ? errors.userPhone : ""
        }
      />
      <TextField
        fullWidth
        id="userEmail"
        name="userEmail"
        label="Email: "
        value={values.userEmail}
        onChange={handleChange}
        error={touched.userEmail && errors.userEmail ? true : false}
        helperText={
          touched.userEmail && errors.userEmail ? errors.userEmail : ""
        }
      />
      <TextField
        fullWidth
        id="altUserEmail"
        name="altUserEmail"
        label="Alt. email: "
        value={values.altUserEmail}
        onChange={handleChange}
        error={touched.altUserEmail && errors.altUserEmail ? true : false}
        helperText={
          touched.altUserEmail && errors.altUserEmail ? errors.altUserEmail : ""
        }
      />
      <FormControl fullWidth>
        <InputLabel id="foundUs">How did you found about us? </InputLabel>
        <Select
          id="foundUs"
          name="foundUs"
          label="foundUs"
          value={values.foundUs}
          onChange={handleChange}
          error={touched.foundUs && Boolean(errors.foundUs)}
        >
          <MenuItem value="">
            <em>Select</em>
          </MenuItem>
          <MenuItem value="Recommendation">Recommendation</MenuItem>
          <MenuItem value="Facebook">Facebook</MenuItem>
          <MenuItem value="LinkedIn">LinkedIn</MenuItem>
          <MenuItem value="Instagram">Instagram</MenuItem>
          <MenuItem value="University">My University</MenuItem>
          <MenuItem value="Google">Google</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>
        {values.foundUs === "Other" && (
          <FormControl>
            <TextField
              id="otherFoundUs"
              name="otherFoundUs"
              label="otherFoundUs"
              value={values.otherFoundUs}
              onChange={handleChange}
              error={touched.otherFoundUs && errors.otherFoundUs ? true : false}
              helperText={
                touched.otherFoundUs && errors.otherFoundUs
                  ? errors.otherFoundUs
                  : ""
              }
            />
          </FormControl>
        )}
      </FormControl>
      <FormControl>
        <FormLabel>
          What do you like the most about Software Development?
        </FormLabel>
        <TextField
          multiline
          rows={4}
          id="sofwareDevelop"
          label="sofwareDevelop"
          variant="outlined"
          value={values.sofwareDevelop}
          onChange={handleChange}
          error={touched.sofwareDevelop && Boolean(errors.sofwareDevelop)}
          helperText={touched.sofwareDevelop && errors.sofwareDevelop}
        />
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="foundUs">
          What is your highest degree of studies?{" "}
        </InputLabel>
        <Select
          id="degreeStudies"
          name="degreeStudies"
          label="degreeStudies"
          value={values.degreeStudies}
          onChange={handleChange}
          error={touched.degreeStudies && Boolean(errors.degreeStudies)}
        >
          <MenuItem value="">
            <em>Select</em>
          </MenuItem>
          {mapExtraDegrees}
          <MenuItem value="Imcomplete PHD or in progress">
            Imcomplete PHD or in progress
          </MenuItem>
          <MenuItem value="PHD">PHD</MenuItem>
          <MenuItem value="No formal education ">No formal education </MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>
        {[
          STUDIES_DEGREE.INCOMPLETE_DREGRE.value,
          STUDIES_DEGREE.UNIVERSITY_DEGREE.value,
          STUDIES_DEGREE.INCOMPLETE_MASTER.value,
        ].includes(values.degreeStudies) ? (
          <div>Funciona</div>
        ) : null}
        {values.degreeStudies === "Other" && (
          <FormControl>
            <TextField
              id="otherDegreeStudies"
              name="otherDegreeStudies"
              label="otherDegreeStudies"
              value={values.otherDegreeStudies}
              onChange={handleChange}
              error={
                touched.otherDegreeStudies && errors.otherDegreeStudies
                  ? true
                  : false
              }
              helperText={
                touched.otherDegreeStudies && errors.otherDegreeStudies
                  ? errors.otherDegreeStudies
                  : ""
              }
            />
          </FormControl>
        )}
        {values.degreeStudies === "No formal education" && (
          <FormControl>
            <TextField
              multiline
              rows={4}
              id="noFormalEducation"
              name="noFormalEducation"
              label="No formal Education"
              value={values.noFormalEducation}
              onChange={handleChange}
              error={
                touched.noFormalEducation && errors.noFormalEducation
                  ? true
                  : false
              }
              helperText={
                touched.noFormalEducation && errors.noFormalEducation
                  ? errors.noFormalEducation
                  : ""
              }
            />
          </FormControl>
        )}
      </FormControl>

      <button disabled={!isValid} type="submit">
        Submit
      </button>
    </form>
  );
};

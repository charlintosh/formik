import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormLabel from "@mui/material/FormLabel";
import { CommonFormProps } from "../../types";

interface extraPersonalInformationProps extends CommonFormProps {}

const STUDIES_DEGREE = {
  UNIVERSITY: { value: "1", label: "Highschool or equivalent" },
  INCOMPLETE_DREGRE: { value: "2", label: "Incomplete dregree or in process" },
  UNIVERSITY_DEGREE: { value: "3", label: "University degree" },
  INCOMPLETE_MASTER: { value: "4", label: "ncomplete masters or in progress" },
  MASTER_DEGREE: { value: "5", label: "Masters degree" },
  INCOMPLETE_PHD: { value: "6", label: "Imcomplete PHD or in progress" },
  PHD_DEGREE: { value: "7", label: "PHD" },
};
export const ExtraPersonalInfo = ({
  handleChange,
  handleSubmit,
  values,
  touched,
  errors,
  setFieldValue,
  handleBlur,
}: extraPersonalInformationProps) => {
  const mapExtraDegrees = Object.values(STUDIES_DEGREE).map((values) => {
    return <MenuItem value={values.value}>{values.label}</MenuItem>;
  });

  return (
    <form onSubmit={handleSubmit}>
      <p>Personal Information</p>
      <TextField
        fullWidth
        id="userPhone"
        name="userPhone"
        label="Phone Number: "
        value={values.extraPersonalInformation.userPhone}
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          touched?.extraPersonalInformation?.userPhone &&
          errors?.extraPersonalInformation?.userPhone
            ? true
            : false
        }
        helperText={
          touched?.extraPersonalInformation?.userPhone &&
          errors?.extraPersonalInformation?.userPhone
            ? errors?.extraPersonalInformation?.userPhone
            : ""
        }
      />
      <TextField
        fullWidth
        id="userEmail"
        name="userEmail"
        label="Email: "
        value={values.extraPersonalInformation.userEmail}
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          touched?.extraPersonalInformation?.userEmail &&
          errors?.extraPersonalInformation?.userEmail
            ? true
            : false
        }
        helperText={
          touched?.extraPersonalInformation?.userEmail &&
          errors?.extraPersonalInformation?.userEmail
            ? errors?.extraPersonalInformation?.userEmail
            : ""
        }
      />
      <TextField
        fullWidth
        id="altUserEmail"
        name="altUserEmail"
        label="Alt. email: "
        value={values.extraPersonalInformation.altUserEmail}
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          touched?.extraPersonalInformation?.altUserEmail &&
          errors?.extraPersonalInformation?.altUserEmail
            ? true
            : false
        }
        helperText={
          touched?.extraPersonalInformation?.altUserEmail &&
          errors?.extraPersonalInformation?.altUserEmail
            ? errors?.extraPersonalInformation?.altUserEmail
            : ""
        }
      />
      <FormControl fullWidth>
        <InputLabel id="foundUs">How did you found about us? </InputLabel>
        <Select
          id="foundUs"
          name="foundUs"
          label="foundUs"
          value={values.extraPersonalInformation.foundUs}
          onChange={handleChange}
          onBlur={handleBlur}
          error={
            touched?.extraPersonalInformation?.foundUs &&
            Boolean(errors?.extraPersonalInformation?.foundUs)
          }
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
        {values?.extraPersonalInformation?.foundUs === "Other" && (
          <FormControl>
            <TextField
              id="otherFoundUs"
              name="otherFoundUs"
              label="otherFoundUs"
              value={values.extraPersonalInformation.otherFoundUs}
              onChange={handleChange}
              error={
                touched?.extraPersonalInformation?.otherFoundUs &&
                errors?.extraPersonalInformation?.otherFoundUs
                  ? true
                  : false
              }
              helperText={
                touched?.extraPersonalInformation?.otherFoundUs &&
                errors?.extraPersonalInformation?.otherFoundUs
                  ? errors?.extraPersonalInformation?.otherFoundUs
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
          value={values.extraPersonalInformation.sofwareDevelop}
          onChange={handleChange}
          onBlur={handleBlur}
          error={
            touched?.extraPersonalInformation?.sofwareDevelop &&
            Boolean(errors?.extraPersonalInformation?.sofwareDevelop)
          }
          helperText={
            touched?.extraPersonalInformation?.sofwareDevelop &&
            errors?.extraPersonalInformation?.sofwareDevelop
          }
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
          value={values.extraPersonalInformation.degreeStudies}
          onChange={handleChange}
          onBlur={handleBlur}
          error={
            touched?.extraPersonalInformation?.degreeStudies &&
            Boolean(errors?.extraPersonalInformation?.degreeStudies)
          }
        >
          <MenuItem value="">
            <em>Select</em>
          </MenuItem>
          {mapExtraDegrees}
          <MenuItem value="No formal education ">No formal education </MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>
        {[
          STUDIES_DEGREE.INCOMPLETE_DREGRE.value,
          STUDIES_DEGREE.UNIVERSITY_DEGREE.value,
          STUDIES_DEGREE.INCOMPLETE_MASTER.value,
          STUDIES_DEGREE.MASTER_DEGREE.value,
          STUDIES_DEGREE.INCOMPLETE_PHD.value,
          STUDIES_DEGREE.PHD_DEGREE.value,
        ].includes(values?.extraPersonalInformation?.degreeStudies) ? (
          <FormControl>
            <TextField
              fullWidth
              id="universityName"
              name="universityName"
              label="University Name: "
              value={values.extraPersonalInformation.universityName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched?.extraPersonalInformation?.universityName &&
                errors?.extraPersonalInformation?.universityName
                  ? true
                  : false
              }
              helperText={
                touched?.extraPersonalInformation?.universityName &&
                errors?.extraPersonalInformation?.universityName
                  ? errors?.extraPersonalInformation?.universityName
                  : ""
              }
            />
            <TextField
              fullWidth
              id="city"
              name="city"
              label="City: "
              value={values.extraPersonalInformation.city}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched?.extraPersonalInformation?.city &&
                errors?.extraPersonalInformation?.city
                  ? true
                  : false
              }
              helperText={
                touched?.extraPersonalInformation?.city &&
                errors?.extraPersonalInformation?.city
                  ? errors?.extraPersonalInformation?.city
                  : ""
              }
            />
            <TextField
              fullWidth
              id="state"
              name="state"
              label="state: "
              value={values.extraPersonalInformation.state}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched?.extraPersonalInformation?.state &&
                errors?.extraPersonalInformation?.state
                  ? true
                  : false
              }
              helperText={
                touched?.extraPersonalInformation?.state &&
                errors?.extraPersonalInformation?.state
                  ? errors?.extraPersonalInformation?.state
                  : ""
              }
            />
            <TextField
              fullWidth
              id="country"
              name="country"
              label="Country: "
              value={values.extraPersonalInformation.country}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched?.extraPersonalInformation?.country &&
                errors?.extraPersonalInformation?.country
                  ? true
                  : false
              }
              helperText={
                touched?.extraPersonalInformation?.country &&
                errors?.extraPersonalInformation?.country
                  ? errors?.extraPersonalInformation?.country
                  : ""
              }
            />
            <TextField
              fullWidth
              id="nameOfDegree"
              name="nameOfDegree"
              label="Name Of Degree: "
              value={values.extraPersonalInformation.nameOfDegree}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched?.extraPersonalInformation?.nameOfDegree &&
                errors?.extraPersonalInformation?.nameOfDegree
                  ? true
                  : false
              }
              helperText={
                touched?.extraPersonalInformation?.nameOfDegree &&
                errors?.extraPersonalInformation?.nameOfDegree
                  ? errors?.extraPersonalInformation?.nameOfDegree
                  : ""
              }
            />
            <FormControl fullWidth>
              <InputLabel id="finishClasses">
                Did you finish all your classes?
              </InputLabel>
              <Select
                id="finishClasses"
                name="finishClasses"
                label="finishClasses"
                value={values.extraPersonalInformation.finishClasses}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched?.extraPersonalInformation?.finishClasses &&
                  Boolean(errors?.extraPersonalInformation?.finishClasses)
                }
              >
                <MenuItem value="">
                  <em>Select</em>
                </MenuItem>
                <MenuItem value="No">No</MenuItem>
                <MenuItem value="Yes">Yes</MenuItem>
              </Select>
              {values?.extraPersonalInformation?.foundUs === "Yes" && (
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
              )}
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="haveDegree">Do you have your degree?</InputLabel>
              <Select
                id="haveDegree"
                name="haveDegree"
                label="haveDegree"
                value={values.extraPersonalInformation.haveDegree}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched?.extraPersonalInformation?.haveDegree &&
                  Boolean(errors?.extraPersonalInformation?.haveDegree)
                }
              >
                <MenuItem value="">
                  <em>Select</em>
                </MenuItem>
                <MenuItem value="No">No</MenuItem>
                <MenuItem value="Yes">Yes</MenuItem>
              </Select>
              {values?.extraPersonalInformation?.haveDegree === "Yes" && (
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
              )}
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="cedulaProfesional">
                Do you have your license (cedula profesional)?
              </InputLabel>
              <Select
                id="cedulaProfesional"
                name="cedulaProfesional"
                label="cedulaProfesional"
                value={values.extraPersonalInformation.cedulaProfesional}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched?.extraPersonalInformation?.cedulaProfesional &&
                  Boolean(errors?.extraPersonalInformation?.cedulaProfesional)
                }
              >
                <MenuItem value="">
                  <em>Select</em>
                </MenuItem>
                <MenuItem value="No">No</MenuItem>
                <MenuItem value="Yes">Yes</MenuItem>
              </Select>
              {values?.extraPersonalInformation?.cedulaProfesional ===
                "Yes" && (
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
              )}
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="scholarship">
                Did you have an scholarship?
              </InputLabel>
              <Select
                id="scholarship"
                name="scholarship"
                label="scholarship"
                value={values.extraPersonalInformation.scholarship}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched?.extraPersonalInformation?.scholarship &&
                  Boolean(errors?.extraPersonalInformation?.scholarship)
                }
              >
                <MenuItem value="">
                  <em>Select</em>
                </MenuItem>
                <MenuItem value="No">No</MenuItem>
                <MenuItem value="Yes">Yes</MenuItem>
              </Select>
              {values?.extraPersonalInformation?.cedulaProfesional ===
                "Yes" && (
                <FormControl>
                  <FormControl>
                    <InputLabel id="scholatshipLevel">
                      Scholarship Level
                    </InputLabel>
                    <Select
                      id="scholatshipLevel"
                      name="scholatshipLevel"
                      label="scholatshipLevel"
                      value={values.extraPersonalInformation.scholatshipLevel}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched?.extraPersonalInformation?.scholatshipLevel &&
                        Boolean(
                          errors?.extraPersonalInformation?.scholatshipLevel
                        )
                      }
                    />
                    <MenuItem value="">
                      <em>Select</em>
                    </MenuItem>
                    <MenuItem value="Highschool">Highschool</MenuItem>
                    <MenuItem value="University">University</MenuItem>
                    <MenuItem value="Masters">Masters</MenuItem>
                    <MenuItem value="PHD">PHD</MenuItem>
                  </FormControl>
                  <FormControl>
                    <InputLabel id="kindOfScholarship">
                      Kind of Schoolarship
                    </InputLabel>
                    <Select
                      id="kindOfScholarship"
                      name="kindOfScholarship"
                      label="kindOfScholarship"
                      value={values.extraPersonalInformation.kindOfScholarship}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched?.extraPersonalInformation?.kindOfScholarship &&
                        Boolean(
                          errors?.extraPersonalInformation?.kindOfScholarship
                        )
                      }
                    />
                    <MenuItem value="">
                      <em>Select</em>
                    </MenuItem>
                    <MenuItem value="Academic">Academic</MenuItem>
                    <MenuItem value="Sports">Sports</MenuItem>
                    <MenuItem value="Goberment">Goberment-backend</MenuItem>
                  </FormControl>
                  <FormControl>
                    <TextField
                      multiline
                      rows={4}
                      id="duration"
                      label="Duration"
                      variant="outlined"
                      value={values.extraPersonalInformation.duration}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched?.extraPersonalInformation?.duration &&
                        Boolean(errors?.extraPersonalInformation?.duration)
                      }
                      helperText={
                        touched?.extraPersonalInformation?.duration &&
                        errors?.extraPersonalInformation?.duration
                      }
                    />
                  </FormControl>
                </FormControl>
              )}
            </FormControl>
          </FormControl>
        ) : null}
        {values?.extraPersonalInformation?.degreeStudies === "Other" && (
          <FormControl>
            <TextField
              id="otherDegreeStudies"
              name="otherDegreeStudies"
              label="otherDegreeStudies"
              value={values.extraPersonalInformation.otherDegreeStudies}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched?.extraPersonalInformation?.otherDegreeStudies &&
                errors?.extraPersonalInformation?.otherDegreeStudies
                  ? true
                  : false
              }
              helperText={
                touched?.extraPersonalInformation?.otherDegreeStudies &&
                errors?.extraPersonalInformation?.otherDegreeStudies
                  ? errors?.extraPersonalInformation?.otherDegreeStudies
                  : ""
              }
            />
          </FormControl>
        )}
        {values.extraPersonalInformation.degreeStudies ===
          "No formal education" && (
          <FormControl>
            <TextField
              multiline
              rows={4}
              id="noFormalEducation"
              name="noFormalEducation"
              label="No formal Education"
              value={values?.extraPersonalInformation?.noFormalEducation}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched?.extraPersonalInformation?.noFormalEducation &&
                errors?.extraPersonalInformation?.noFormalEducation
                  ? true
                  : false
              }
              helperText={
                touched?.extraPersonalInformation?.noFormalEducation &&
                errors?.extraPersonalInformation?.noFormalEducation
                  ? errors?.extraPersonalInformation?.noFormalEducation
                  : ""
              }
            />
          </FormControl>
        )}
      </FormControl>
    </form>
  );
};

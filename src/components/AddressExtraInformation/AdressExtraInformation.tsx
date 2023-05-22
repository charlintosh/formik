import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { CommonFormProps } from "../../types";
interface extraAdressInformationProps extends CommonFormProps {}

export const AdressExtraInformation = ({
  handleChange,
  values,
  touched,
  errors,
}: extraAdressInformationProps) => {
  return (
    <div>
      <InputLabel id="typeOfResidency">Type of Residency</InputLabel>
      <Select
        fullWidth
        id="typeOfResidency"
        name="typeOfResidency"
        label="typeOfResidency"
        value={values.extraAdressInformation.typeOfResidency}
        onChange={handleChange}
        error={
          touched?.extraAdressInformation?.typeOfResidency &&
          Boolean(errors?.extraAdressInformation?.typeOfResidency)
        }
      >
        <MenuItem value="">
          <em>Select</em>
        </MenuItem>
        <MenuItem value="Rented">Rented</MenuItem>
        <MenuItem value="Owned">Owned (by me or my parents )</MenuItem>
        <MenuItem value="Other">Other</MenuItem>
      </Select>
      {values.extraAdressInformation?.typeOfResidency === "Other" && (
        <TextField
          id="preferredGender"
          name="preferredGender"
          label="Preferred Gender"
          value={values.extraAdressInformation?.otherResidency}
          onChange={handleChange}
          error={
            touched.extraAdressInformation?.otherResidency &&
            Boolean(errors.extraAdressInformation?.otherResidency)
          }
          helperText={
            touched.extraAdressInformation?.otherResidency &&
            errors.extraAdressInformation?.otherResidency
          }
        />
      )}
      <InputLabel id="typeOfResidency">Amount of People</InputLabel>
      <Select
        fullWidth
        id="amountOfPeople "
        name="amountOfPeople "
        label="amountOfPeople "
        value={values.extraAdressInformation?.amountOfPeople}
        onChange={handleChange}
        error={
          touched.extraAdressInformation?.amountOfPeople &&
          Boolean(errors.extraAdressInformation?.amountOfPeople)
        }
      >
        <MenuItem value="">
          <em>Select</em>
        </MenuItem>
        <MenuItem value="Alone">I live alone</MenuItem>
        <MenuItem value="Parents">I live with my parents</MenuItem>
        <MenuItem value="significantOther">
          I live with my significant other
        </MenuItem>
        <MenuItem value="significantOtherandKids">
          I live with my significant other and my kids
        </MenuItem>
      </Select>
    </div>
  );
};

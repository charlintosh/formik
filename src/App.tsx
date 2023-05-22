import { useState } from "react";
import "./App.css";
import RecruitmentForm from "./components/RecruitmentForm";
import AdressInformation from "./components/AddressInformation";
import AdressExtraInformation from "./components/AddressExtraInformation";
import ExtraPersonalInfo from "./components/ExtraPersonalInfo";
import BankAccountForm from "./components/BankAccountInformation";
import { skillsForm } from "./components/SkillsInformation/SkillsInformation";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useFormik } from "formik";
import { FormValues, STEP, FormStepComponentDefinition } from "./types";
import { validationSchema } from "./utils/form/validations";
import { initialValues } from "./utils/form/initialValues";
import { Button } from "@mui/material";

const stepsMap: Record<STEP, FormStepComponentDefinition> = {
  [STEP.FIRST_STEP]: {
    component: RecruitmentForm,
    label: "RecruitmentForm",
    moduleName: "recruitmentInfo",
  },
  [STEP.SECOND_STEP]: {
    component: AdressInformation,
    label: "AdressInformation",
    moduleName: "adressInformation",
  },
  [STEP.THIRD_STEP]: {
    component: AdressExtraInformation,
    label: "ExtraPersonalInformation",
    moduleName: "adressExtraInformation",
  },
  [STEP.FOURTH_STEP]: {
    component: ExtraPersonalInfo,
    label: "ExtraPersonalInfo",
    moduleName: "extraPersonalInfo",
  },
  [STEP.FIFTH_STEP]: {
    component: BankAccountForm,
    label: "BankAccountForm",
    moduleName: "BankAccountInformation",
  },
  [STEP.SIXTH_STEP]: {
    component: skillsForm,
    label: "Skills Form",
    moduleName: "skillsForm",
  },
};

function App() {
  const [step, setStep] = useState<STEP>(STEP.FIRST_STEP);

  const globalFormik = useFormik<FormValues>({
    initialValues,
    validationSchema,
    validateOnMount: true,
    onSubmit(values, formikHelpers) {
      console.log(values);
      console.log(formikHelpers);
    },
  });

  const gotToStep = (direction: "next" | "previous") => {
    const newStep = direction === "next" ? step + 1 : step - 1;
    setStep(newStep);
  };

  const { component: FormFragmentOutlet, moduleName } = stepsMap[step];

  const disabledCondition =
    !globalFormik.isValid && globalFormik.errors?.hasOwnProperty(moduleName);

  return (
    <div className="App">
      <Stepper activeStep={step} alternativeLabel>
        {Object.entries(stepsMap).map(([key, value]) => (
          <Step key={key}>
            <StepLabel>{value.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <form noValidate onSubmit={globalFormik.handleSubmit}>
        <FormFragmentOutlet {...globalFormik} />
        {step !== STEP.FIRST_STEP ? (
          <Button onClick={() => gotToStep("previous")}>Back</Button>
        ) : null}
        {step === STEP.SIXTH_STEP ? (
          <Button disabled={disabledCondition} type="submit">
            Submit
          </Button>
        ) : (
          <Button
            disabled={disabledCondition}
            type="button"
            onClick={() => gotToStep("next")}
          >
            Next
          </Button>
        )}
      </form>
    </div>
  );
}

export default App;

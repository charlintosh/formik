import { useFormik } from "formik";

type FormikHookReturnValue = ReturnType<typeof useFormik<FormValues>>;

export enum STEP {
  FIRST_STEP,
  SECOND_STEP,
  THIRD_STEP,
}

export interface FormValues {
  recruitmentInfo: RecruitmentFormValues;
}
export interface RecruitmentFormValues {
  userName: string;
  paternalLastName: string;
  maternalLastName: string;
  gender: string;
  preferredGender: string;
  dateOfBirth: string;
  placeOfBirth: string;
  city: string;
  state: string;
  country: string;
  curp: string;
  passportNumber: string;
  proofOfId: File | null;
}

export interface CommonFormProps extends FormikHookReturnValue {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}
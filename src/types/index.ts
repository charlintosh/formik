import { useFormik } from "formik";

type FormikHookReturnValue = ReturnType<typeof useFormik<FormValues>>;

export enum STEP {
  FIRST_STEP,
  SECOND_STEP,
  THIRD_STEP,
  FOURTH_STEP,
  FIFTH_STEP,
  SIXTH_STEP,
}

export interface FormStepComponentDefinition {
  label: string;
  component: React.FC<CommonFormProps>;
  moduleName: string;
}

export interface FormValues {
  recruitmentInfo: RecruitmentFormValues;
  adressInformation: AdressInformationFormValues;
  extraAdressInformation: ExtraAdressInformationFormValues;
  extraPersonalInformation: extraPersonalInformationFormValues;
  bankAccount:bankAccountInformationValues;
  skillsInformation:skillsInformationValues;
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
  
}

export interface AdressInformationFormValues {
  userStreet: string;
  userStreetA: string;
  userStreetB: string;
  userColony: string;
  userState: string;
  userPostalCode: number;
  userProofAdress: File | null;
}

export interface ExtraAdressInformationFormValues {
  typeOfResidency: string;
  otherResidency: string;
  amountOfPeople: string;
}

export interface extraPersonalInformationFormValues {
  userPhone: number;
  userEmail: string;
  altUserEmail: string;
  foundUs: string;
  otherFoundUs: string;
  sofwareDevelop: string;
  degreeStudies: string;
  otherDegreeStudies: string;
  noFormalEducation: string;
  universityName: string;
  city: string;
  state: string;
  country: string;
  nameOfDegree: string;
  finishClasses: string;
  haveDegree: string;
  cedulaProfesional: string;
  scholarship: string;
  scholatshipLevel:string;
  kindOfScholarship:string;
  duration:string;
}

export interface bankAccountInformationValues{
  accountNumber:number;
  CLABE:number;
  bank:string;
}

export interface skillsInformationValues{
  programmingLanguage:string;
  experienceInfo:string;
  disability:string;
}
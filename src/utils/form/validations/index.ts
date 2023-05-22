import * as Yup from "yup";
import { recruitmentFormValitionSchema } from "./schemas/recruitmentFormValidationSchema";
import { adressInformationValidationSchema } from "./schemas/adressInformationValidationSchema";
import { extraAdressInformationValidationSchema } from "./schemas/adressExtraInformationValidationSchema";
import { extraPersonalInformationValidationSchema } from "./schemas/extraPersonalInformationValidationSchema";
import { bankAccountValidationSchema } from "./schemas/bankAccountInformationSchema";
import { skillsInformationValidationSchema } from "./schemas/skillsInformationValidationSchema";

// TODO: Enable validations when step are fully ready
console.warn("enable validations utils/form/index.ts when steps are ready");
export const validationSchema = Yup.object().shape({
  // recruitmentInfo: recruitmentFormValitionSchema,
  // adressInformation: adressInformationValidationSchema,
  // extraAdressInformation: extraAdressInformationValidationSchema,
  // extraPersonalInformation: extraPersonalInformationValidationSchema,
  // bankAccountInformation: bankAccountValidationSchema,
  // skillsInformation: skillsInformationValidationSchema,
});

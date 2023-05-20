import * as Yup from "yup";
import { recruitmentFormValitionSchema } from "./schemas/recruitmentFormValidationSchema";

export const validationSchema = Yup.object().shape({
  recruitmentInfo: recruitmentFormValitionSchema,
});
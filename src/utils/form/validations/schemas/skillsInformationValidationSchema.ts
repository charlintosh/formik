import * as Yup from "yup";

export const skillsInformationValidationSchema=Yup.object().shape({
    programmingLanguage:Yup.string().required("The programming language is required"),
    experienceInfo:Yup.string().required("Experience Info is required"),
    disability:Yup.string().required("Disability is required")
})
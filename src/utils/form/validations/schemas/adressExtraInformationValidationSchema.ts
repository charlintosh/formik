import * as Yup from "yup";



export const extraAdressInformationValidationSchema=Yup.object({
    typeOfResidency: Yup.string().required("Required")
})
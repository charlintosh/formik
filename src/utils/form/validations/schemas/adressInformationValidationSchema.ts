import * as Yup from "yup";

export const adressInformationValidationSchema = Yup.object({
    userStreet: Yup.string().required("Street is required"),
    userStreetA: Yup.string().required("StreetA is required"),
    userStreetB: Yup.string().required("StreetB is required"),
    userColony: Yup.string().required("Colony is required"),
    userProofAdress: Yup.mixed().required("Proof of address is required"),
  });
  
  
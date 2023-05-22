
import * as Yup from "yup";

export const recruitmentFormValitionSchema = Yup.object().shape({
   userName: Yup.string().required("Required"),
    paternalLastName: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
    //dateOfBirth: Yup.date().required("Required"),
    placeOfBirth: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    state: Yup.string().required("Required"),
    //country: Yup.string().required("Required"),
    curp: Yup.string().test("curp", "Required", function (value) {
      const placeOfBirth = this.resolve(Yup.ref("placeOfBirth"));
      return placeOfBirth === "Mexico" ? !!value : true;
    }),
    passportNumber: Yup.string().test(
      "passportNumber",
      "Required",
      function (value) {
        const placeOfBirth = this.resolve(Yup.ref("placeOfBirth"));
        return placeOfBirth !== "Mexico" ? !!value : true;
      }
    ),
  })
import *as yup from "yup"

export const signUpInputs = [
    {
        name: "name",
        type: "text",
        holder: "User Name",
    }, {
        name: "email",
        type: "email",
        holder: "Your Email",
    },
    {
        name: "password",
        type: "password",
        holder: "Enter password",
    },
    {
        name: "rePassword",
        type: "password",
        holder: "Confirm password",
    }, {
        name: "phone",
        type: "text",
        holder: "Your Phone",
    }]


export const loginInputs = [{
    name: "email",
    type: "email",
    holder: "Your Email",
},
{
    name: "password",
    type: "password",
    holder: "Enter password",
},]

export const schemaLogin = yup.object({
    email: yup.string().email("invaild Email ").required("email is Required"),
    password: yup.string().required("field is Required"),
})
export const schemaSignUp = yup.object({
    name: yup.string().required("field is Required").min(2, "Must be at Least 2 Characters").max(30, "Must be at Bigest 30 Characters"),
    email: yup.string().email("invaild Email ").required("email is Required"),
    password: yup.string().min(6).max(12).required("field is Required"),
    rePassword: yup.string().oneOf([yup.ref("password")], "password Don't Match").required("confrim password is required"),
    phone: yup.string().matches(/^01[0125][0-9]{8}$/, "Sorry  Must Be Egyption Number").required("This Phone Is Required")
})

import *as yup from "yup"
export const inputsDataUser = [{
    name: "name",
    type: "text",
    holder: "User Name",
    IsDisabled: false
},
{
    name: "email",
    type: "email",
    holder: "Your Email",
    IsDisabled: true
},
{
    name: "phone",
    type: "text",
    holder: "Your Phone",
    IsDisabled: false
},
]

export const PasswordChanges = [
    {
        name: "currentPassword",
        type: "password",
        holder: "current Password",
    },
    {
        name: "password",
        type: "password",
        holder: "Enter New password",
    },
    {
        name: "rePassword",
        type: "password",
        holder: "Confirm password",
    },
]




export const DataProfileForm = {
    initialValues: {
        name: "",
        email: "",
        phone: "",
        isChagePassword: false,
        currentPassword: "",
        password: "",
        rePassword: ""
    },
    validationSchema: yup.object({
        name: yup.string().min(2, "Must be at Least 2 Characters").max(30, "Must be at Bigest 30 Characters"),
        phone: yup.string().matches(/^01[0125][0-9]{8}$/, "Sorry  Must Be Egyption Number"),
        isChagePassword: yup.boolean(),
        currentPassword: yup.string().when("isChagePassword", {
            is: true,
            then: (schema) => schema.required("field is Required"),
            otherwise: (schema) => schema.notRequired()
        }),
        password: yup.string().when("isChagePassword", {
            is: true,
            then: schema => schema.required("field is Required").min(6).max(12),
            otherwise: schema => schema.notRequired()
        }),
        rePassword: yup.string().when("isChagePassword", {
            is: true,
            then: schema => schema.oneOf([yup.ref("password")], "password Don't Match").required("confrim password is required"),
            otherwise: schema => schema.notRequired()
        })
    })
}

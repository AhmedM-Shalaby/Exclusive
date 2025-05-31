import *as yup from "yup"
export const inputsDataUser = [{
    name: "name",
    type: "text",
    holder: "User Name",
}, {
    name: "email",
    type: "email",
    holder: "Your Email",
}]

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
        isChagePassword: false,
        currentPassword: "",
        password: "",
        rePassword: ""
    },
    validationSchema: yup.object({
        name: yup.string().required("field is Required").min(2, "Must be at Least 2 Characters").max(30, "Must be at Bigest 30 Characters"),
        email: yup.string().email("invaild Email ").required("email is Required"),
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

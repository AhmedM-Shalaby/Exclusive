"use client";
import MyButtons from "@/components/MyButton/MyButton";
import Myinput from "@/components/Myinput/myInput";
import { useFormik } from "formik";
import Link from "next/link";
import { schemaSignUp, signUpInputs } from "../AuthConstants";

function FormSignUp() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    rePassword: "",
    phone: "",
  };
  const onSubmit = async (values) => {
    const res = await fetch(
      "https://ecommerce.routemisr.com/api/v1/auth/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );
    const data = await res.json();
    console.log(data);
  };
  const MyForm = useFormik({
    initialValues,
    validationSchema: schemaSignUp,
    onSubmit,
  });

  const MyFunc = {
    onChange: MyForm.handleChange,
    onBlur: MyForm.handleBlur,
    values: MyForm.values,
    touched: MyForm.touched,
    errors: MyForm.errors,
  };
  return (
    <div className="m-[20%]">
      <h1 className="text-[36px] mb-4">Create an account</h1>
      <p className="mb-4">Enter your details below</p>
      <form onSubmit={MyForm.handleSubmit}>
        {signUpInputs.map((input, index) => (
          <Myinput
            key={index}
            type={input.type}
            name={input.name}
            holder={input.holder}
            func={{ ...MyFunc }}
          />
        ))}
        <MyButtons context={"Create Account"} state="submit" />
        <div className="flex justify-center gap-2">
          <p>Already have account ? </p>
          <Link href="/login">Log in</Link>
        </div>
      </form>
    </div>
  );
}

export default FormSignUp;

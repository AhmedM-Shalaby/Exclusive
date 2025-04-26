"use client";

import MyButtons from "@/components/MyButton/MyButton";
import Myinput from "@/components/Myinput/myInput";
import { useFormik } from "formik";
import { loginInputs, schemaLogin } from "../AuthConstants";

function Login() {
  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = async (values) => {
    const res = await fetch(
      "https://ecommerce.routemisr.com/api/v1/auth/signin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );
    const data = await res.json();
  };

  const MyForm = useFormik({
    initialValues,
    validationSchema: schemaLogin,
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
      <h1 className="text-[36px] mb-4">Log in to Exclusive</h1>
      <p className="mb-4">Enter your details below</p>w
      <form onSubmit={MyForm.handleSubmit}>
        {loginInputs.map((inputs, idx) => (
          <Myinput
            key={idx}
            name={inputs.name}
            type={inputs.type}
            holder={inputs.holder}
            func={MyFunc}
          />
        ))}
        <div className="flex gap-4">
          <MyButtons context="Login" state="submit" width="50%" />
          <MyButtons
            context={"Forget Password ?"}
            bgcolor="transparent"
            textColor="var(--main-color)"
          />
        </div>
      </form>
    </div>
  );
}

export default Login;

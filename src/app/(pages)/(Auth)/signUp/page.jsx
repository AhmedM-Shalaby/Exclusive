"use client";
import MyButtons from "@/components/MyButton/MyButton";
import Myinput from "@/components/Myinput/myInput";
import { useFormik } from "formik";
import Link from "next/link";
import { schemaSignUp, signUpInputs } from "../AuthConstants";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useUserStore } from "@/store/user_store";
import { useRouter } from "next/navigation";
import { signUP } from "@/app/actions/Auth/signUp";

function FormSignUp() {
  const { setToken } = useUserStore();
  const router = useRouter();
  const initialValues = {
    name: "",
    email: "",
    password: "",
    rePassword: "",
    phone: "",
  };
  const onSubmit = async (values) => {
    const data = await signUP(values);
    if (data.token !== undefined) {
      Cookies.set("token", data.token, { expires: 7, path: "/" });
      const name = data.user.name.split(" ").slice(0, 1).join(" ");
      setToken(data.token);
      toast.success(`${data.message} `);
      router.push("/");
    }
    if (data.statusMsg == "fail") {
      toast.error(data.message);
    }
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
    <div className="m-[5%] md:m[20%]">
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
          <Link href="/login" className="text-[var(--main-color)]">
            Log in
          </Link>
        </div>
      </form>
    </div>
  );
}

export default FormSignUp;

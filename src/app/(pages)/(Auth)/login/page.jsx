"use client";
import MyButtons from "@/components/MyButton/MyButton";
import Myinput from "@/components/Myinput/myInput";
import { useFormik } from "formik";
import { loginInputs, schemaLogin } from "../AuthConstants";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useUserStore } from "@/store/user_store";
import { useRouter } from "next/navigation";
import { loginUser } from "@/app/actions/Auth/login";
import Link from "next/link";

function Login() {
  const { setToken } = useUserStore();
  const router = useRouter();
  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = async (values) => {
    const data = await loginUser(values);
    if (data.token) {
      Cookies.set("token", data.token, { expires: 7, path: "/" });
      setToken(data.token);
      toast.success(`${data.message}`);
      router.push("/");
    } else {
      toast.error(`${data.message}  `, {
        autoClose: false,
      });
      MyForm.errors.password = data.message;
      MyForm.errors.email = data.message;
    }
    console.log(data);
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
    <div className="m-[5%] md:m[20%]">
      <h1 className="text-[36px] mb-4">Log in to Exclusive</h1>
      <p className="mb-4">Enter your details below</p>
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
            customStyle={{ backgroundColor: "transparent" }}
            textColor="var(--main-color)"
          />
        </div>
        <div className="text-center">
          I Don&lsquo;t Have Any Account ?{" "}
          <Link href={"/signUp"} className="text-[var(--main-color)]">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;

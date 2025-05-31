"use client";
import MyButtons from "@/components/MyButton/MyButton";
import {
  DataProfileForm,
  inputsDataUser,
  PasswordChanges,
} from "./profileconstant";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useFormik } from "formik";
import InputProfile from "@/components/Myinput/inputProfile";
import {
  UpdataUserPassword,
  UpdateLoggedUserData,
} from "@/app/actions/profile/apiProfile";
import { useUserStore } from "@/store/user_store";
const crumbs = [
  { name: "Home", path: "/" },
  { name: "Profile", path: "/profile" },
];
function Profile() {
  const { token } = useUserStore();
  const onSubmit = async (values) => {
    const res = await UpdateLoggedUserData(
      {
        name: values.name,
        email: values.email,
      },
      token
    );
    if (res.message == "fail") {
      setFieldError(res.errors.param, res.errors.msg);
    }

    if (values.isChagePassword) {
      const body = {
        currentPassword: values.currentPassword,
        password: values.password,
        rePassword: values.rePassword,
      };
      const updataPassword = await UpdataUserPassword(body, token);
      console.log(updataPassword);
    }
    console.log(res);
  };
  const formik = useFormik({
    ...DataProfileForm,
    onSubmit,
  });
  const {
    setFieldError,
    values,
    handleChange,
    handleBlur,
    touched,
    errors,
    handleSubmit,
    dirty,
    isValid,
    resetForm,
  } = formik;
  useEffect(() => {
    const cookie = Cookies.get("user");
    const user = JSON.parse(cookie);
    if (user) {
      resetForm({
        values: {
          name: user.name,
          email: user.email,
          isChagePassword: false,
          currentPassword: "",
          password: "",
          rePassword: "",
        },
      });
    }
  }, []);

  return (
    <div className="container m-auto ">
      <div className="my-20 flex justify-between items-center">
        <Breadcrumb crumbs={crumbs} />
        <h4>
          Welcome{" "}
          <span className="text-[var(--main-color)] font-bold ">
            {values.name}
          </span>
        </h4>
      </div>
      <form
        onSubmit={handleSubmit}
        className="p-6 rounded-lg max-w-[870px] mx-auto"
        style={{ boxShadow: "0 0  20px #a6a6a6" }}
      >
        <div>
          <p className="mb-8 text-xl font-semibold text-[var(--main-color)]">
            Edit Your Profile
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-6 mb-6">
            {inputsDataUser.map((element) => (
              <InputProfile
                key={element.name}
                element={element}
                elementFormik={{
                  handleChange,
                  handleBlur,
                  value: values?.[element.name],
                  error: errors?.[element.name] || "",
                  touched: touched?.[element.name],
                }}
              />
            ))}
          </div>
          <div className="flex gap-4  items-center mb-8 ">
            <input
              type="checkbox"
              id="passwordChange"
              className="cursor-pointer"
              onChange={handleChange}
              checked={values.isChagePassword}
              name="isChagePassword"
            />
            <label
              htmlFor="passwordChange"
              className=" text-xl font-semibold cursor-pointer"
            >
              Password Changes
            </label>
          </div>
          <div
            className={`grid grid-cols-1 item-center mb-6 overflow-hidden  ${
              values.isChagePassword ? "h-[300px]" : "h-0 "
            } transition-all`}
          >
            {PasswordChanges.map((element) => (
              <InputProfile
                key={element.name}
                element={element}
                elementFormik={{
                  handleChange,
                  handleBlur,
                  value: values?.[element.name],
                  error: errors?.[element.name] || "",
                  touched: touched?.[element.name],
                }}
              />
            ))}
          </div>
        </div>
        <div className="text-end">
          <MyButtons
            isDisabled={!dirty || !values.isChagePassword}
            context={"Save Change"}
            width="fit-content"
            state="submit"
            customStyle={{
              opacity: dirty && isValid ? 1 : 0.5,
              cursor: dirty && isValid ? "pointer" : "not-allowed",
            }}
          />
        </div>
      </form>
    </div>
  );
}

export default Profile;

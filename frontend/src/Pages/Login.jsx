import React, { useState } from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useAuth } from "../Contexts/AuthContext";
import * as Yup from "yup";
import { useFormik } from "formik";

const Login = () => {
  const navigate = useNavigate();
  const { updateUser } = useAuth();

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("نام کاربری الزامی است.")
      .min(5, "نام کاربری حداقل باید 5 کاراکتر باشد.")
      .max(20, "نام کاربری حداکثر باید 20 کاراکتر باشد."),
    password: Yup.string()
      .required("رمز عبور الزامی است")
      .min(5, "رمز عبور حداقل باید 5 کاراکتر باشد.")
      .max(20, "رمز عبور حداکثر باید 20 کاراکتر باشد."),
  });

  const form = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const res = await fetch(`http://localhost:3000/users`);
      const users = await res.json();

      const user = users.find(
        (u) => u.username === values.username && u.password === values.password
      );
      console.log(user);
      if (user) {
        const token = generateRandomToken();
        localStorage.setItem("token", token);
        updateUser({
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
          phone: user.phone,
          token,
        });

        localStorage.setItem("userId", user.id);

        swal({
          title: "ورود شما با موفقیت انجام شد",
          icon: "success",
          buttons: "بسیار عالی!",
        }).then(() => {
          navigate("/dashboard");
        });
      } else {
        swal({
          title: "ورود شما با مشکل مواجه شد",
          icon: "error",
          buttons: "چه بد!",
        });
      }
    },
  });

  return (
    <div className="px-8 sm:container min-h-screen flex items-center justify-center bg-light-gradient dark:bg-dark-gradient">
      <div className="bg-gray-100 w-[400px] dark:bg-zinc-800 relative z-30 p-12 rounded-2xl shadow-2xl ">
        <div className="mb-8 text-center">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-[12rem] mx-auto mb-4"
          />
          <h2 className="text-3xl text-red-400">خوش آمدید!</h2>
          <div className="my-6 rounded-xl flex items-center justify-between gap-4 p-6">
            <span className="text-2xl text-slate-600 dark:text-red-400">
              کاربر جدید هستید؟
            </span>
            <Link
              className="bg-rose-700 !text-white text-xl mr-2 rounded-lg py-2 px-4"
              to="/register"
            >
              ثبت نام
            </Link>
          </div>
        </div>
        <form className="flex flex-col gap-6" onSubmit={form.handleSubmit}>
          <div className="mb-2 space-y-4">
            <label
              className="block mb-2 text-red-400 text-2xl "
              htmlFor="email"
            >
              نام کاربری
            </label>
            <div className="relative">
              <input
                className="w-full px-14 py-4 border border-gray-300 dark:bg-zinc-600 dark:text-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                type="text"
                id="username"
                placeholder="نام کاربری"
                value={form.values.username}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer">
                <AiOutlineMail className="text-slate-500 text-3xl" />
              </div>
            </div>
            {form.errors.username && form.touched.username && (
              <div className="text-red-600"> {form.errors.username}</div>
            )}
          </div>
          <div className="mb-6 space-y-4">
            <label
              className="block mb-2 text-red-400 text-2xl "
              htmlFor="password"
            >
              رمز عبور:
            </label>
            <div className="relative">
              <input
                className="w-full px-14 py-4 border border-gray-300 dark:bg-zinc-600 dark:text-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                type="password"
                id="password"
                placeholder="رمز عبور"
                value={form.values.password}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer">
                <RiLockPasswordLine className="text-slate-500 text-3xl" />
              </div>
            </div>
            {form.errors.password && form.touched.password && (
              <div className="text-red-600"> {form.errors.password}</div>
            )}
          </div>
          <button
            className={`w-full bg-emerald-600 ${
              !form.isValid ||
              form.isSubmitting ||
              !form.touched.username ||
              !form.touched.password
                ? "bg-slate-400 hover:bg-slate-400"
                : ""
            } text-white py-3 px-6 rounded-2xl  hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500`}
            type="submit"
            disabled={
              !form.isValid ||
              form.isSubmitting ||
              !form.touched.username ||
              !form.touched.password
            }
          >
            ورود
          </button>
        </form>
      </div>
    </div>
  );
};

function generateRandomToken() {
  let token = "";

  for (let i = 0; i < 30; i++) {
    token += Math.random().toString(36).substring(2, 15);
  }

  return token;
}

export default Login;

import React, { useContext, useState } from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiUser } from "react-icons/bi";
import { BsPhone } from "react-icons/bs";
import { BiSolidUserAccount } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useAuth } from "../Contexts/AuthContext";
import * as Yup from "yup";
import { useFormik } from "formik";

const Register = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("نام کاربری الزامی است.")
      .min(5, "نام کاربری حداقل باید 5 کاراکتر باشد.")
      .max(20, "نام کاربری حداکثر باید 20 کاراکتر باشد."),
    name: Yup.string()
      .required("نام الزامی است.")
      .min(5, "نام حداقل باید 5 کاراکتر باشد")
      .max(20, "نام حداکثر باید 20 کاراکتر باشد."),
    email: Yup.string()
      .required("ایمیل الزامی است.")
      .email("ایمیل معتبر نیست")
      .max(30, "ایمیل حداکثر باید 30 کاراکتر باشد."),
    password: Yup.string()
      .required("رمز عبور الزامی است")
      .min(5, "رمز عبور حداقل باید 8 کاراکتر باشد.")
      .max(20, "رمز عبور حداکثر باید 20 کاراکتر باشد."),
    phone: Yup.string()
      .matches(/^09[0-9]{9}$/, "شماره تلفن معتبر نیست.")
      .required("شماره تلفن الزامی است."),
  });

  const form = useFormik({
    initialValues: {
      username: "",
      name: "",
      email: "",
      password: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const res = await fetch(`http://localhost:3000/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const newUser = await res.json();

      if (res.ok) {
        const token = generateRandomToken();
        localStorage.setItem("token", token);
        localStorage.setItem("userId", user.id);

        swal({
          title: "ثبت نام شما با موفقیت انجام شد",
          icon: "success",
          buttons: "بسیار عالی!",
        }).then(() => {
          navigate("/dashboard");
        });
      } else {
        swal({
          title: "ثبت نام شما با مشکل مواجه شد",
          icon: "error",
          buttons: "چه بد!",
        });
      }
    },
  });

  return (
    <div className="px-8 sm:container min-h-screen flex items-center justify-center bg-light-gradient dark:bg-dark-gradient">
      <div className="bg-gray-100 w-[600px] dark:bg-zinc-800 relative z-30 p-12 rounded-2xl shadow-2xl ">
        <div className="mb-8 text-center">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-[12rem] mx-auto mb-4"
          />
          <h2 className="text-3xl text-red-400">خوش آمدید!</h2>
          <div className="my-6 rounded-xl flex items-center justify-between gap-4 p-6">
            <span className="text-2xl text-slate-600 dark:text-red-400">
              قبلا ثبت نام کرده‌اید؟
            </span>
            <Link
              className="bg-rose-700 !text-white text-xl mr-2 rounded-lg py-2 px-4"
              to="/login"
            >
              لاگین
            </Link>
          </div>
        </div>

        <form className="flex flex-wrap gap-6" onSubmit={form.handleSubmit}>
          <div className="space-y-4">
            <label
              className="block mb-2 text-red-400 text-2xl "
              htmlFor="text"
            >
              نام کاربری
            </label>
            <div className="relative">
              <input
                className="w-full px-14 py-4 border border-gray-300 dark:bg-zinc-600 dark:text-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                type="text"
                name="username"
                id="username"
                placeholder="نام کاربری"
                value={form.values.username}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer">
                <BiSolidUserAccount className="text-slate-500 text-3xl" />
              </div>
            </div>
            {form.errors.username && form.touched.username && (
              <div className="text-red-600"> {form.errors.username}</div>
            )}
          </div>
          <div className="space-y-4">
            <label
              className="block mb-2 text-red-400 text-2xl "
              htmlFor="text"
            >
              نام و نام خانوادگی
            </label>
            <div className="relative">
              <input
                className="w-full px-14 py-4 border border-gray-300 dark:bg-zinc-600 dark:text-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                type="text"
                name="name"
                id="name"
                placeholder="نام و نام خانوادگی"
                value={form.values.name}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer">
                <BiUser className="text-slate-500 text-3xl" />
              </div>
            </div>
            {form.errors.name && form.touched.name && (
              <div className="text-red-600"> {form.errors.name}</div>
            )}
          </div>
          <div className="space-y-4">
            <label
              className="block mb-2 text-red-400 text-2xl "
              htmlFor="email"
            >
              ایمیل
            </label>
            <div className="relative">
              <input
                className="w-full px-14 py-4 border border-gray-300 dark:bg-zinc-600 dark:text-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                type="email"
                id="email"
                name="email"
                placeholder="ایمیل"
                value={form.values.email}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer">
                <AiOutlineMail className="text-slate-500 text-3xl" />
              </div>
            </div>
            {form.errors.email && form.touched.email && (
              <div className="text-red-600"> {form.errors.email}</div>
            )}
          </div>
          <div className="space-y-4">
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
                name="password"
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
          <div className="space-y-4">
            <label
              className="block mb-2 text-red-400 text-2xl "
              htmlFor="text"
            >
              شماره تلفن
            </label>
            <div className="relative">
              <input
                className="w-full px-14 py-4 border border-gray-300 dark:bg-zinc-600 dark:text-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                type="text"
                name="phone"
                id="phone"
                placeholder="شماره تلفن"
                value={form.values.phone}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer">
                <BsPhone className="text-slate-500 text-3xl" />
              </div>
            </div>
            {form.errors.phone && form.touched.phone && (
              <div className="text-red-600"> {form.errors.phone}</div>
            )}
          </div>
          <button
            className={`w-full bg-emerald-600 ${
              !form.isValid ||
              form.isSubmitting ||
              !form.touched.username ||
              !form.touched.email
                ? "bg-slate-400 hover:bg-slate-400"
                : ""
            } text-white py-3 px-6 rounded-2xl  hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500`}
            type="submit"
            disabled={
              !form.isValid ||
              form.isSubmitting ||
              !form.touched.username ||
              !form.touched.email
            }
          >
            ثبت نام
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

export default Register;

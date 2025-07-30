import React from "react";
import { BiEdit } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import swal from "sweetalert";

const AccountInfos = () => {
  return (
    <div className="w-full flex-1 lg:flex-[3] bg-white dark:bg-zinc-900 text-slate-600 dark:text-slate-300 mt-8 rounded-xl shadow-lg p-8">
      <h1 className="text-4xl pb-6 w-[20.5rem] rounded-md border-b-4 border-s-red-600 text-slate-600 dark:text-white">
        اطلاعات حساب کاربری
      </h1>
      <div className="mt-20 grid gap-8 grid-cols-1 sm:grid-cols-2">
        <div className="shadow-lg rounded-xl p-8 bg-slate-200 space-y-6 dark:bg-black">
          <div className="flex justify-between items-center">
            <h1>نام کاربری</h1>
            <BiEdit
              className="text-4xl text-red-400 cursor-pointer"
              onClick={() => {
                swal({
                  title: "نام کاربری جدید را وارد کنید",
                  content: "input",
                  buttons: "تایید",
                }).then((value) => console.log(value));
              }}
            />
          </div>
          <h1>رضا حمزه‌ ای</h1>
        </div>
        <div className="shadow-lg rounded-xl p-8 bg-slate-200 space-y-6 dark:bg-black">
          <div className="flex justify-between items-center">
            <h1>کد ملی</h1>
            <AiOutlinePlus
              className="text-4xl text-red-400 cursor-pointer"
              onClick={() => {
                swal({
                  title: "کد ملی جدید را وارد کنید",
                  content: "input",
                  buttons: "تایید",
                }).then((value) => console.log(value));
              }}
            />
          </div>
          <h1>ثبت نشده</h1>
        </div>
        <div className="shadow-lg rounded-xl p-8 bg-slate-200 space-y-6 dark:bg-black">
          <div className="flex justify-between items-center">
            <h1>شماره موبایل</h1>
            <BiEdit
              className="text-4xl text-red-400 cursor-pointer"
              onClick={() => {
                swal({
                  title: "شماره موبایل جدید را وارد کنید",
                  content: "input",
                  buttons: "تایید",
                }).then((value) => console.log(value));
              }}
            />
          </div>
          <h1>09000000000</h1>
        </div>
        <div className="shadow-lg rounded-xl p-8 bg-slate-200 space-y-6 dark:bg-black">
          <div className="flex justify-between items-center">
            <h1>ایمیل</h1>
            <BiEdit
              className="text-4xl text-red-400 cursor-pointer"
              onClick={() => {
                swal({
                  title: "ایمیل جدید را وارد کنید",
                  content: "input",
                  buttons: "تایید",
                }).then((value) => console.log(value));
              }}
            />
          </div>
          <h1>rezahm1892@gmail.com</h1>
        </div>
        <div className="shadow-lg rounded-xl p-8 bg-slate-200 space-y-6 dark:bg-black">
          <div className="flex justify-between items-center">
            <h1>کلمه عبور</h1>
            <BiEdit
              className="text-4xl text-red-400 cursor-pointer"
              onClick={() => {
                swal({
                  title: "کلمه عبور جدید را وارد کنید",
                  content: "input",
                  buttons: "تایید",
                }).then((value) => console.log(value));
              }}
            />
          </div>
          <h1>*********</h1>
        </div>
        <div className="shadow-lg rounded-xl p-8 bg-slate-200 space-y-6 dark:bg-black">
          <div className="flex justify-between items-center">
            <h1>تاریخ تولد</h1>
            <BiEdit
              className="text-4xl text-red-400 cursor-pointer"
              onClick={() => {
                swal({
                  title: "تاریخ تولد جدید را وارد کنید",
                  content: "input",
                  buttons: "تایید",
                }).then((value) => console.log(value));
              }}
            />
          </div>
          <h1>08 / 04 / 1375</h1>
        </div>
      </div>
    </div>
  );
};

export default AccountInfos;

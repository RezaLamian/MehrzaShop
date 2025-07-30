import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
const Addresses = () => {
  const [isCommentTextareaFocused, setisCommentTextareaFocused] =
    useState(false);

  return (
    <div className="w-full flex-1 lg:flex-[3] bg-white dark:bg-zinc-900 text-slate-600 dark:text-slate-300 mt-8 rounded-xl shadow-lg p-8">
      <h1 className="text-4xl pb-6 w-28 rounded-md border-b-4 border-s-red-600 text-slate-600 dark:text-white">
        آدرس‌ها
      </h1>

      <div className="mt-20 shadow-lg rounded-xl p-8 space-y-8 text-slate-500 dark:text-slate-300 bg-slate-200 dark:bg-black">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl">
            استان تهران - خیابان گاندی جنوبی - نبش خیابان 21 - پلاک 28
          </h1>
          <BsThreeDotsVertical className="text-4xl cursor-pointer" />
        </div>
        <h1 className="text-2xl">رضا حمزه‌ ای</h1>
      </div>

      <div className="mt-24 shadow-lg rounded-xl p-8 space-y-8 bg-slate-200 dark:bg-black ">
        <div className="relative">
          <textarea
            type="text"
            id="inputField"
            className="w-full px-4 py-2 min-h-[10rem] bg-unset rounded-xl focus:outline-none focus:border-indigo-500"
            onFocus={() => setisCommentTextareaFocused(true)}
            onBlur={(e) => setisCommentTextareaFocused(e.target.value !== "")}
          />
          <label
            htmlFor="inputField"
            className={`absolute top-2 right-3 cursor-pointer text-2xl transition-all ${
              isCommentTextareaFocused
                ? "text-slate-500 dark:text-slate-400 text-2xl -top-20 -right-4"
                : "text-slate-500 dark:text-slate-400 text-2xl"
            }`}
          >
            آدرس جدید را وارد کنید:
          </label>
        </div>
      </div>
      <button className="bg-rose-700 float-left mt-16 text-white py-2 px-4 rounded-lg hover:bg-rose-700/90">
        ثبت آدرس جدید
      </button>
    </div>
  );
};

export default Addresses;

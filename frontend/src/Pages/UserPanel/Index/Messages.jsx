import React from "react";
import { LuShoppingBag } from "react-icons/lu";
import { FaAngleLeft } from "react-icons/fa";

const Messages = () => {
  return (
    <div className="w-full flex-1 lg:flex-[3] bg-white dark:bg-zinc-900 text-slate-600 dark:text-slate-300 mt-8 rounded-xl shadow-lg p-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl pb-6 w-24 rounded-md border-b-4 border-s-red-600 text-slate-600 dark:text-white">
          پیام‌ها
        </h1>
        <button className="bg-red-500 text-white py-2 px-4 rounded-xl hover:bg-red-500/90">
          حذف همه
        </button>
      </div>
      <div className="mt-20 rounded-xl p-8 space-y-8">
        <div className="flex items-center gap-4 text-sky-500">
          <LuShoppingBag className="text-4xl" />
          <h2>سفارش شما ثبت شده و در حال پردازش است.</h2>
        </div>
        <h3>وضعیت سفارش خود را می‌توانید از این‌جا پیگیری کنید.</h3>
        <div className="grid gap-4 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          <div className="rounded-xl border border-slate-300 dark:border-slate-600 p-2 flex flex-wrap justify-center items-center gap-4">
            <img src="/images/p1.png" className="w-40 h-40" alt="" />
            <h3>کفش اسپورت نایک NKslwS2</h3>
          </div>
          <div className="rounded-xl border border-slate-300 dark:border-slate-600 p-2 flex flex-wrap justify-center items-center gap-4">
            <img src="/images/p1.png" className="w-40 h-40" alt="" />
            <h3>کفش اسپورت نایک NKslwS2</h3>
          </div>
          <div className="rounded-xl border border-slate-300 dark:border-slate-600 p-2 flex flex-wrap justify-center items-center gap-4">
            <img src="/images/p1.png" className="w-40 h-40" alt="" />
            <h3>کفش اسپورت نایک NKslwS2</h3>
          </div>
          <div className="rounded-xl border border-slate-300 dark:border-slate-600 p-2 flex flex-wrap justify-center items-center gap-4">
            <img src="/images/p1.png" className="w-40 h-40" alt="" />
            <h3>کفش اسپورت نایک NKslwS2</h3>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center xs:w-60 float-left gap-4 bg-rose-700 hover:bg-rose-700/90 rounded-lg mt-8 p-4 text-white cursor-pointer">
        پیگیری سفارش
        <FaAngleLeft />
      </div>
    </div>
  );
};

export default Messages;

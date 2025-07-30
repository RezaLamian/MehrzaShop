import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaAngleLeft } from "react-icons/fa";
import toPersianNumber from "../toPersianNumber";
import { BsFillClipboardDataFill } from "react-icons/bs";

const OrderBox = () => {
  return (
    <div className="rounded-xl p-8 my-16">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-3xl text-rose-500/70 dark:text-rose-500">
          <AiOutlineCheckCircle className="text-5xl" />
          پرداخت شده
        </div>
        <FaAngleLeft className="text-4xl" />
      </div>
      <div className="flex flex-wrap justify-between items-center gap-16 mt-12">
        <div className="flex flex-wrap justify-center gap-8 items-center mt-8">
          <h2>
            شماره سفارش{" "}
            <span className="text-slate-400 dark:text-white mr-4">
              {toPersianNumber(102030)}#
            </span>
          </h2>

          <h2>
            مبلغ کل
            <span className="text-red-400 mr-4">
              {toPersianNumber(122800000)} تومان
            </span>
          </h2>

          <h2>
            تاریخ
            <span className="dark:text-white font-bold mr-4">
              1402 / شهریور / 03
            </span>
          </h2>
        </div>
        <div className="flex flex-grow flex-col gap-6">
          <div className="flex items-center gap-4 text-yellow-500 dark:text-yellow-400">
            <BsFillClipboardDataFill />
            در انتظار تایید
          </div>
          <div className="relative h-4 w-full rounded-full bg-gray-200 dark:bg-zinc-700">
            <span className="absolute inset-y-0 right-0 rounded-full bg-yellow-500 dark:bg-yellow-400 w-1/4"></span>
          </div>
          <div className="flex flex-wrap justify-center gap-2 items-center sm:ustify-between text-yellow-500 dark:text-yellow-400">
            <span> 11 / 06 / 1402</span>
            <span> ساعت 08 : 20 </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
        <div className="rounded-xl border border-slate-300 dark:border-slate-600 py-4 px-8 flex flex-wrap justify-center items-center gap-4">
          <img src="/images/p1.png" className="w-40 h-40" alt="" />
          <h3>کفش اسپورت نایک NKslwS2</h3>
        </div>
        <div className="rounded-xl border border-slate-300 dark:border-slate-600 py-4 px-8 flex flex-wrap justify-center items-center gap-4">
          <img src="/images/p1.png" className="w-40 h-40" alt="" />
          <h3>کفش اسپورت نایک NKslwS2</h3>
        </div>
        <div className="rounded-xl border border-slate-300 dark:border-slate-600 py-4 px-8 flex flex-wrap justify-center items-center gap-4">
          <img src="/images/p1.png" className="w-40 h-40" alt="" />
          <h3>کفش اسپورت نایک NKslwS2</h3>
        </div>
      </div>
    </div>
  );
};

export default OrderBox;

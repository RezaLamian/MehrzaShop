import React from "react";
import toPersianNumber from "../toPersianNumber";
import { FaAngleLeft } from "react-icons/fa";
import { RiErrorWarningLine } from "react-icons/ri";

const PaymentPending = ({ title }) => {
  return (
    <div>
      <h2 className="flex items-center gap-8">
        <span className="w-4 h-4 bg-rose-700 rounded-full"></span>
        {title}
      </h2>
      <div className="shadow-lg p-8 rounded-xl mt-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-3xl text-yellow-500/70 dark:text-yellow-500">
            <RiErrorWarningLine className="text-5xl" />
            در انتظار پرداخت
          </div>
          <FaAngleLeft className="text-4xl text-yellow-500/70 dark:text-yellow-500" />
        </div>
        <div className="flex flex-wrap gap-8 items-center mt-12 sm:mt-8 text-xl xs:text-2xl">
          <h2 className="flex justify-between items-center">
            زمان باقیمانده{" "}
            <span className="text-red-400 mr-4">
              {toPersianNumber(10)} دقیقه
            </span>
          </h2>

          <h2 className="flex justify-between items-center">
            شماره سفارش{" "}
            <span className="text-slate-400 dark:text-white mr-4">
              {toPersianNumber(102030)}#
            </span>
          </h2>
          <h2 className="flex justify-between items-center">
            مبلغ کل
            <span className="text-red-400 font-bold mr-4">
              {toPersianNumber(1200000)} تومان
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PaymentPending;

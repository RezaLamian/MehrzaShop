import React from "react";
import PaymentPending from "../../../Components/PaymentPending";
import OrderBox from "../../../Components/OrderBox";

const Orders = () => {
  return (
    <div className="w-full flex-1 lg:flex-[3] bg-white dark:bg-zinc-900 text-slate-600 dark:text-slate-300 mt-8 rounded-xl shadow-lg p-8">
      <h1 className="text-4xl pb-6 w-32 rounded-md border-b-4 border-s-red-600 text-slate-600 dark:text-white">
        سفارش‌ها
      </h1>
      <div className="mt-20">
        <PaymentPending title="سفارشات در انتظار پرداخت" />
      </div>
      <div className="mt-20">
        <h2 className="flex items-center gap-8">
          <span className="w-4 h-4 bg-rose-700 rounded-full"></span>
          سایر سفارشات
        </h2>
        <ul className="flex flex-wrap justify-center lg:justify-start items-center p-8 gap-12 mt-16">
          <li className="flex items-center gap-4 hover:text-red-400 cursor-pointer transition-all duration-200 ease-linear">
            فعلی{" "}
            <span className="bg-rose-700 py-2 px-4 text-white rounded-[30%]">
              3
            </span>
          </li>
          <li className="flex items-center gap-4 hover:text-red-400 cursor-pointer transition-all duration-200 ease-linear">
            تحویل شده{" "}
            <span className="bg-rose-700 py-2 px-4 text-white rounded-[30%]">
              1
            </span>
          </li>
          <li className="flex items-center gap-4 hover:text-red-400 cursor-pointer transition-all duration-200 ease-linear">
            لغو شده{" "}
            <span className="bg-rose-700 py-2 px-4 text-white rounded-[30%]">
              1
            </span>
          </li>
          <li className="flex items-center gap-4 hover:text-red-400 cursor-pointer transition-all duration-200 ease-linear">
            مرجوع شده{" "}
            <span className="bg-rose-700 py-2 px-4 text-white rounded-[30%]">
              1
            </span>
          </li>
        </ul>
        <div className="mt-20">
          <OrderBox />
          <OrderBox />
          <OrderBox />
          <OrderBox />
        </div>
      </div>
    </div>
  );
};

export default Orders;

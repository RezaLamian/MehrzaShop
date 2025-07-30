import React from "react";
import toPersianNumber from "../toPersianNumber";

const AddToCart = () => {
  return (
    <div className="fixed lg:hidden inset-x-0 bottom-0 z-10 bg-white p-5 dark:bg-zinc-900">
      <div className="flex items-center justify-between gap-x-6">
        <div className="flex grow">
          <button className=" w-full bg-emerald-600 hover:bg-emerald-600/90 rounded-xl text-white py-4">
            افزودن به سبد خرید
          </button>
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-x-2">
            <div>
              <del className="text-sm text-zinc-500 decoration-red-600 dark:text-zinc-400 dark:decoration-red-500 md:text-base">
                {toPersianNumber(10000000)}
              </del>
            </div>
            <div className="flex w-10 items-center justify-center rounded-full bg-red-500 py-0.5 text-sm font-bold text-white dark:bg-red-600">
              50%
            </div>
          </div>
          <div className="text-rose-500 dark:text-red-400">
            <span className="font-semibold">{toPersianNumber(1200000)}</span>
            <span className="text-sm font-light">تومان</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;

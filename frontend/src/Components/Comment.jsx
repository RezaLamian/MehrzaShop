import React from "react";
import { FiThumbsDown, FiThumbsUp } from "react-icons/fi";

const Comment = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold text-slate-600 dark:text-slate-300">با این قیمت کاملا مناسب و خوبه</h1>
      <div className="flex items-center gap-8 border-b border-slate-300 dark:border-slate-600 pb-8">
        <div className="flex items-center gap-4 text-red-400">
          <FiThumbsUp />
          پیشنهاد می‌کنم
        </div>
        <h3 className="text-2xl text-slate-400">10 شهریور 1402</h3>
        <h3 className="text-2xl text-slate-400">خریدار</h3>
      </div>
      <h3 className=" border-b border-slate-300 dark:border-slate-600 pb-8">
        برای کسانی که نمی‌خوان هزینه‌ی بالایی کنند گزینه‌ی خیلی خوبیه.
      </h3>
      <div className="flex items-center justify-end gap-8">
        <h4 className="text-slate-400 text-2xl">آیا این دیدگاه برای‌تان مفید بود؟</h4>
        <div className="flex items-center gap-2 text-red-400">
          32
          <FiThumbsUp />
        </div>
        <div className="flex items-center gap-2 text-red-500">
          46
          <FiThumbsDown />
        </div>
      </div>
    </div>
  );
};

export default Comment;

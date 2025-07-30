import React from "react";
import { AiOutlineFieldTime } from "react-icons/ai";

const ProdDetailsBox = () => {
  return (
    <div className="flex items-center gap-4 border border-slate-300 dark:border-slate-700 rounded-xl bg-transparent text-slate-600 dark:text-slate-400 p-8">
      <AiOutlineFieldTime className="text-4xl" />
      هفت روز ضمانت بازگشت کالا
    </div>
  );
};

export default ProdDetailsBox;

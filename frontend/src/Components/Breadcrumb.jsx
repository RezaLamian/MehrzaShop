import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Breadcrumb = () => {
  return (
    <div className="w-full sm:w-[30rem] p-6 rounded-lg mt-8 shadow-lg bg-white dark:bg-zinc-900 text-slate-600 dark:text-slate-300 flex justify-between items-center gap-4">
      <Link>مهرزا شاپ</Link>
      <FaAngleLeft className="text-3xl font-bold" />
      <Link>مردانه</Link>
      <FaAngleLeft className="text-3xl font-bold" />
      <Link>کتونی مردانه </Link>
    </div>
  );
};

export default Breadcrumb;

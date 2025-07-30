import React from "react";
import ProductCard from "../../../Components/ProductCard";

const Recents = () => {
  return (
    <div className="w-full flex-1 lg:flex-[3] bg-white dark:bg-zinc-800 text-slate-600 dark:text-slate-300 mt-8 rounded-xl shadow-lg p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl pb-6 w-56 rounded-md border-b-4 border-s-red-600 text-slate-600 dark:text-white">
          بازدیدهای اخیر
        </h1>
        <button className="bg-red-500 text-white py-2 px-4 rounded-xl hover:bg-red-500/90">حذف همه</button>
      </div>

      <div className="mt-20 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Recents;

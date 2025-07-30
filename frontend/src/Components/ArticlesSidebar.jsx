import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

const ArticlesSidebar = () => {
  const [categories, setCategories] = useState(false);

  return (
    <div className="sticky top-60 h-screen mt-20 xs:mt-0 sm:mt-12 lg:mt-0 p-8 space-y-12 bg-white dark:bg-zinc-900 overflow-y-scroll overflow-x-hidden shadow-lg  rounded-2xl">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl text-slate-600 dark:text-slate-300">فیلترها</h1>
        <h2 className="text-2xl text-red-400 cursor-pointer">حذف همه</h2>
      </div>
      <ul className="space-y-14">
        <li className="">
          <input
            type="text"
            className="bg-slate-200 w-full rounded-lg py-4 px-6"
            placeholder="جستجو در بین نتایج..."
          />
        </li>

        <li className="flex items-center flex-col gap-4 cursor-pointer">
          <div
            className="w-full flex justify-between items-center gap-4 hover:text-red-400 transition-all duration-200 ease-linear"
            onClick={() => setCategories(!categories)}
          >
            دسته‌بندی‌ها
            {categories ? <FaAngleDown /> : <FaAngleLeft />}
          </div>
          {categories && (
            <ul className="w-full flex justify-start px-8 mt-8 flex-col gap-8">
              <li className="text-start">دسته بندی 1</li>
              <li className="text-start">دسته بندی 2</li>
              <li className="text-start">دسته بندی 3</li>
            </ul>
          )}
        </li>

        <li>
          <label
            class="flex cursor-pointer items-center justify-between py-3"
            for="onlySpecialDesktop"
          >
            <div class="text-zinc-700 dark:text-white">داغ‌ترین‌ها</div>
            <div class="relative inline-flex cursor-pointer items-center">
              <input
                class="peer sr-only"
                id="onlySpecialDesktop"
                type="checkbox"
              />

              <div class="peer h-9 w-16 rounded-full bg-gray-500 dark:bg-slate-200 after:absolute after:left-[2px] after:top-0.5 after:h-7 after:w-7 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-rose-800 peer-checked:after:translate-x-full peer-focus:ring-emerald-500 after:dark:bg-slate-600 peer-checked:dark:bg-rose-700 peer-focus:dark:ring-emerald-400"></div>
            </div>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default ArticlesSidebar;

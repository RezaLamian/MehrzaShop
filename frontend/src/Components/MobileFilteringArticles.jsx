import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaAngleDown, FaAngleLeft } from "react-icons/fa";

const MobileSortingArticles = ({ close }) => {
  const [categories, setCategories] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40 h-auto w-full rounded-t-3xl bg-white transition-transform duration-300 dark:bg-zinc-900 transform-none">
        <div className="flex items-center justify-between gap-x-4 border-b border-gray-100 p-4 pb-5 dark:border-white/5">
          <h5 className="text-3xl text-zinc-600 dark:text-zinc-300">
            مرتب سازی بر اساس
          </h5>
          <button
            className="inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-zinc-600 hover:bg-zinc-100 hover:text-gray-900 dark:text-zinc-300 dark:hover:bg-black dark:hover:text-white"
            type="button"
            onClick={() => close(false)}
          >
            <AiOutlineClose className="text-4xl" />
          </button>
        </div>

        <div className="h-full space-y-2 divide-y divide-gray-100 overflow-y-auto p-4 dark:divide-white/5">
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
      </div>
      <div className="bg-black/40 dark:bg-zinc-900/40 backdrop-blur-md fixed inset-0 z-30"></div>
    </>
  );
};

export default MobileSortingArticles;

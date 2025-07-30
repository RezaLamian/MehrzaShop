import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const MobileSortingArticles = ({ close }) => {
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
          <ul className="flex flex-col items-center justify-center gap-8">
            <li
              className="text-2xl font-bold cursor-pointer hover:bg-slate-200 hover:dark:text-slate-600 border border-slate-300 dark:border-slate-600 flex justify-center w-full rounded-lg px-4 py-2 transition-all duration-300 ease-linear"
              onClick={() => close(false)}
            >
              جدیدترین
            </li>
            <li
              className="text-2xl font-bold cursor-pointer hover:bg-slate-200 hover:dark:text-slate-600 border border-slate-300 dark:border-slate-600 flex justify-center w-full rounded-lg px-4 py-2 transition-all duration-300 ease-linear"
              onClick={() => close(false)}
            >
              پربازدیدترین
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-black/40 dark:bg-zinc-900/40 backdrop-blur-md fixed inset-0 z-30"></div>
    </>
  );
};

export default MobileSortingArticles;

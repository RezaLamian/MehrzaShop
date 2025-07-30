import React, { useState } from "react";
import { FaAngleDown, FaAngleLeft } from "react-icons/fa";
import toPersianNumber from "../toPersianNumber";
import { AiOutlineClose } from "react-icons/ai";

const MobileProductsFiltering = ({ close }) => {
  const [categories, setCategories] = useState(false);
  const [brands, setBrands] = useState(false);
  const [colors, setColors] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 h-full w-full p-8 bg-white transition-transform duration-300 dark:bg-zinc-900 transform-none">
        <div className="flex items-center justify-between gap-x-4 border-b border-gray-100 p-4 pb-5 dark:border-white/5">
          <h5 className="text-3xl text-zinc-600 dark:text-zinc-300">
            فیلتر محصولات
          </h5>
          <button
            className="inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-zinc-600 hover:bg-zinc-100 hover:text-gray-900 dark:text-zinc-300 dark:hover:bg-black dark:hover:text-white"
            type="button"
            onClick={() => close(false)}
          >
            <AiOutlineClose className="text-4xl" />
          </button>
        </div>

        <div className="h-full pb-[150px]">
          <ul className="space-y-14">
            <li className="">
              <input
                type="text"
                className="bg-slate-200 w-full rounded-lg py-4 px-6"
                placeholder="جستجو در بین نتایج..."
              />
            </li>
            <li>
              <div className="flex flex-col gap-8">
                <p className="mb-4 text-slate-600 dark:text-slate-300">
                  محدوده قیمت
                </p>
                <input
                  type="range"
                  min="0"
                  max="100"
                  className="slider appearance-none w-full h-2 rounded-full bg-rose-700 accent-emerald-600 dark:accent-slate-300 cursor-pointer outline-none"
                />
                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <div className="text-rose-500 dark:text-red-400 flex gap-2 items-center">
                      <span className="text-2xl font-bold">
                        {toPersianNumber(100000)}
                      </span>
                      <span className="text-lg">تومان</span>
                    </div>
                    <div className="text-rose-500 dark:text-red-400 flex gap-2 items-center">
                      <span className="text-2xl font-bold">
                        {toPersianNumber(1000000)}
                      </span>
                      <span className="text-lg">تومان</span>
                    </div>
                  </div>
                </div>
              </div>
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
              <div
                className="w-full flex justify-between items-center cursor-pointer hover:text-red-400 transition-all duration-200 ease-linear"
                onClick={() => setBrands(!brands)}
              >
                برندها
                {brands ? <FaAngleDown /> : <FaAngleLeft />}
              </div>
              {brands && (
                <div className="flex flex-col gap-8 mt-8">
                  <input
                    type="text"
                    placeholder="جستجوی برند..."
                    className="bg-slate-200 w-full rounded-lg py-4 px-6"
                  />
                  <div className="flex justify-between items-center">
                    <label htmlFor="" className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="cursor-pointer w-6 h-6"
                      />
                      نایک
                    </label>
                    <p>Nike</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <label htmlFor="" className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="cursor-pointer w-6 h-6"
                      />
                      آدیداس
                    </label>
                    <p>Adidas</p>
                  </div>
                </div>
              )}
            </li>
            <li>
              <div
                className="w-full flex justify-between items-center cursor-pointer hover:text-red-400 transition-all duration-200 ease-linear"
                onClick={() => setColors(!colors)}
              >
                رنگ‌ها
                {colors ? <FaAngleDown /> : <FaAngleLeft />}
              </div>
              {colors && (
                <div className="flex flex-col gap-8 mt-8">
                  <input
                    type="text"
                    placeholder="جستجوی رنگ..."
                    className="bg-slate-200 w-full rounded-lg py-4 px-6"
                  />

                  <div className="flex justify-between items-center cursor-pointer">
                    <label htmlFor="" className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="cursor-pointer w-6 h-6"
                      />
                      قرمز
                    </label>
                    <div className="w-6 h-6 rounded-[50%] bg-red-600"></div>
                  </div>
                  <div className="flex justify-between items-center cursor-pointer">
                    <label htmlFor="" className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="cursor-pointer w-6 h-6"
                      />
                      آبی
                    </label>
                    <div className="w-6 h-6 rounded-[50%] bg-blue-600"></div>
                  </div>
                </div>
              )}
            </li>
            <li>
              <label
                className="flex cursor-pointer items-center justify-between py-3"
                for="onlyAvailableDesktop"
              >
                <div className="text-zinc-700 dark:text-white">
                  فقط کالا های موجود
                </div>
                <div className="relative inline-flex cursor-pointer items-center">
                  <input
                    className="peer sr-only"
                    id="onlyAvailableDesktop"
                    type="checkbox"
                  />

                  <div className="peer h-9 w-16 rounded-full bg-gray-500 dark:bg-slate-200 after:absolute after:left-[2px] after:top-0.5 after:h-7 after:w-7 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-rose-800 peer-checked:after:translate-x-full peer-focus:ring-emerald-500 after:dark:bg-slate-600 peer-checked:dark:bg-rose-700 peer-focus:dark:ring-emerald-400"></div>
                </div>
              </label>
            </li>
            <li>
              <label
                className="flex cursor-pointer items-center justify-between py-3"
                for="onlySpecialDesktop"
              >
                <div className="text-zinc-700 dark:text-white">
                  فقط محصولات ویژه
                </div>
                <div className="relative inline-flex cursor-pointer items-center">
                  <input
                    className="peer sr-only"
                    id="onlySpecialDesktop"
                    type="checkbox"
                  />

                  <div className="peer h-9 w-16 rounded-full bg-gray-500 dark:bg-slate-200 after:absolute after:left-[2px] after:top-0.5 after:h-7 after:w-7 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-rose-800 peer-checked:after:translate-x-full peer-focus:ring-emerald-500 after:dark:bg-slate-600 peer-checked:dark:bg-rose-700 peer-focus:dark:ring-emerald-400"></div>
                </div>
              </label>
            </li>
          </ul>
        </div>

        <div className="sticky bottom-0 left-0 right-0 flex items-center justify-between border-t border-gray-100 bg-white p-4 px-6 py-4 dark:border-white/5 dark:bg-zinc-900">
          <button
            className="bg-rose-700 float-left mt-16 text-white px-4 rounded-lg hover:bg-rose-700/90 w-full py-3 text-2xl"
            type="button"
            onClick={() => close(false)}
          >
            مشاهده 200 محصول
          </button>
        </div>
      </div>
      <div className="bg-black/40 dark:bg-zinc-900/40 backdrop-blur-md fixed inset-0 z-30"></div>
    </>
  );
};

export default MobileProductsFiltering;

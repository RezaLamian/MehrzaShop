import React, { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import toPersianNumber from "../toPersianNumber";

const ProductsSidebar = ({ priceValue, onValueChange }) => {
  const [categories, setCategories] = useState(false);
  const [brands, setBrands] = useState(false);
  const [colors, setColors] = useState(false);

  return (
    <div className="sticky top-44 h-screen mt-20 xs:mt-0 sm:mt-12 lg:mt-0 p-8 space-y-12 bg-white dark:bg-zinc-900 overflow-y-scroll overflow-x-hidden shadow-lg rounded-2xl hidden md:block">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl text-slate-600 dark:text-slate-300">فیلترها</h1>
        <h2 className="text-2xl text-red-400 cursor-pointer">حذف همه</h2>
      </div>
      <ul className="space-y-14">
        <li className="relative">
          <input
            type="text"
            className="bg-slate-200 dark:text-slate-600 w-full rounded-lg py-4 px-6"
            placeholder="جستجو در بین نتایج..."
          />
          <button className="absolute left-0 bg-rose-700 text-white rounded-e-lg p-4 hover:bg-rose-700/90">
            جستجو
          </button>
        </li>
        <li>
          <div className="flex flex-col gap-8">
            <p className="mb-4 text-slate-600 dark:text-slate-300">
              محدوده قیمت
            </p>
            <input
              type="range"
              value={priceValue[1]}
              min={0}
              max={100}
              onChange={(e) => {
                onValueChange([0, Number(e.target.value)]);
              }}
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
            class="flex cursor-pointer items-center justify-between py-3"
            for="onlySpecialDesktop"
          >
            <div class="text-zinc-700 dark:text-white">فقط محصولات ویژه</div>
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

export default ProductsSidebar;

import React from "react";
import { RiErrorWarningLine, RiUserSettingsLine } from "react-icons/ri";
import toPersianNumber from "../../../toPersianNumber";
import { Link } from "react-router-dom";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuShoppingBag } from "react-icons/lu";
import { PiHandCoinsBold } from "react-icons/pi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { TbTruckReturn } from "react-icons/tb";
import { FaAngleLeft } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsFillClipboardDataFill } from "react-icons/bs";
import PaymentPending from "../../../Components/PaymentPending";

const Index = () => {
  return (
    <div className="w-full flex-1 lg:flex-[3] bg-white dark:bg-zinc-900 text-slate-600 dark:text-slate-300 mt-8 rounded-xl shadow-lg p-8">
      <h1 className="text-4xl pb-6 w-32 rounded-md border-b-4 border-s-red-600 text-slate-600 dark:text-white">
        پیشخوان
      </h1>
      <div className="my-20">
        <h2 className="flex items-center gap-8">
          <span className="w-4 h-4 bg-rose-700 rounded-full"></span>
          حساب کاربری
        </h2>
        <div className="grid grid-cols-2 2xl:grid-cols-4 mt-12 gap-8">
          <Link
            to="account-infos"
            className="flex flex-wrap lg:flex-nowrap p-4 sm:p-0 justify-center text-center xs:justify-start items-center gap-8 bg-sky-600 rounded-xl cursor-pointer !text-white hover:!text-white "
          >
            <div className="p-4 m-3 bg-sky-500/50 rounded-xl">
              <RiUserSettingsLine className="text-5xl" />
            </div>
            تکمیل مشخصات
          </Link>
          <Link
            to="account-infos"
            className="flex flex-wrap p-4 sm:p-0 items-center justify-center xs:justify-start text-center gap-8 bg-red-600 rounded-xl cursor-pointer !text-white hover:!text-white"
          >
            <div className="p-4 m-3 bg-red-500/50 rounded-xl">
              <RiLockPasswordLine className="text-5xl" />
            </div>
            ثبت کلمه عبور
          </Link>
          <Link
            to="favs"
            className="flex flex-wrap p-4 sm:p-0 items-center justify-center xs:justify-start text-center gap-8 bg-rose-600 rounded-xl cursor-pointer !text-white hover:!text-white"
          >
            <div className="p-4 m-3 bg-rose-500/50 rounded-xl">
              <AiOutlineHeart className="text-5xl" />
            </div>
            {toPersianNumber(5)} علاقه‌مندی
          </Link>
          <Link
            to="messages"
            className="flex flex-wrap p-4 sm:p-0 items-center justify-center xs:justify-start text-center gap-8 bg-emerald-600 rounded-xl cursor-pointer !text-white hover:!text-white"
          >
            <div className="p-4 m-3 bg-rose-800/50 rounded-xl">
              <IoIosNotificationsOutline className="text-5xl" />
            </div>
            {toPersianNumber(5)} پیام جدید
          </Link>
        </div>
      </div>
      <div className="my-20">
        <div className="flex flex-wrap justify-center gap-6 items-center xs:justify-between">
          <h2 className="flex items-center gap-8">
            <span className="w-4 h-4 bg-rose-700 rounded-full"></span>
            حساب کاربری
          </h2>
          <Link
            className="flex items-center gap-2 text-red-400"
            to="orders"
          >
            مشاهده همه
            <FaAngleLeft />
          </Link>
        </div>

        <div className="grid grid-cols-2 2xl:grid-cols-4 mt-12 gap-8 text-white">
          <div className="flex flex-wrap lg:flex-nowrap justify-center p-4 text-center xs:justify-start items-center gap-8 bg-sky-600 rounded-xl">
            <div className="p-4 m-3 bg-sky-500/50 rounded-xl">
              <LuShoppingBag className="text-6xl" />
            </div>
            <div className="flex flex-col gap-2 p-4">
              <div className="">{toPersianNumber(0)} سفارش</div>
              <div className="">فعلی</div>
            </div>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap justify-center p-4 text-center xs:justify-start items-center gap-8 bg-emerald-600 rounded-xl">
            <div className="p-4 m-3 bg-rose-800/50 rounded-xl">
              <PiHandCoinsBold className="text-6xl" />
            </div>
            <div className="flex flex-col gap-2 p-4">
              <div className="">{toPersianNumber(0)} سفارش</div>
              <div className="">تحویل شده</div>
            </div>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap justify-center p-4 text-center xs:justify-start items-center gap-8 bg-red-600 rounded-xl">
            <div className="p-4 m-3 bg-red-500/50 rounded-xl">
              <AiOutlineCloseCircle className="text-6xl" />
            </div>
            <div className="flex flex-col gap-2 p-4">
              <div className="">{toPersianNumber(0)} سفارش</div>
              <div className="">لغو شده</div>
            </div>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap justify-center p-4 text-center xs:justify-start items-center gap-8 bg-yellow-600 rounded-xl">
            <div className="p-4 m-3 bg-yellow-500/50 rounded-xl">
              <TbTruckReturn className="text-6xl" />
            </div>
            <div className="flex flex-col gap-2 p-4">
              <div className="">{toPersianNumber(0)} سفارش </div>
              <div className="">مرجوع شده</div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-20">
        <PaymentPending title="سفارشات فعلی" />
        <div className="shadow-lg p-8 rounded-xl mt-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-3xl text-rose-500/70 dark:text-rose-500">
              <AiOutlineCheckCircle className="text-5xl" />
              پرداخت شده
            </div>
            <FaAngleLeft className="text-4xl text-rose-500/70 dark:text-rose-500" />
          </div>
          <div className="flex flex-wrap gap-20 items-center">
            <div className="flex flex-wrap gap-8 items-center mt-8 text-xl xs:text-2xl">
              <h2 className="flex justify-between items-center">
                شماره سفارش{" "}
                <span className="text-slate-400 dark:text-white mr-4">
                  {toPersianNumber(102030)}#
                </span>
              </h2>

              <h2 className="flex justify-between items-center">
                مبلغ کل
                <span className="text-red-400 mr-4">
                  {toPersianNumber(122800000)} تومان
                </span>
              </h2>

              <h2 className="flex justify-between items-center">
                تاریخ
                <span className="dark:text-white sm:font-bold mr-4">
                  1402 / شهریور / 03
                </span>
              </h2>
            </div>
            <div className="flex flex-grow flex-col gap-6 text-xl xs:text-2xl">
              <div className="flex items-center gap-4 text-yellow-500 dark:text-yellow-400">
                <BsFillClipboardDataFill />
                در انتظار تایید
              </div>
              <div className="relative h-4 w-full rounded-full bg-gray-200 dark:bg-zinc-700">
                <span className="absolute inset-y-0 right-0 rounded-full bg-yellow-500 dark:bg-yellow-400 w-1/4"></span>
              </div>
              <div className="flex flex-wrap justify-center gap-2 items-center xs:justify-between text-yellow-500 dark:text-yellow-400">
                <span> 11 / 06 / 1402</span>
                <span> ساعت 08 : 20 </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

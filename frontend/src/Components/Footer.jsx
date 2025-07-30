import React from "react";
import { FaAngleUp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiAparat } from "react-icons/si";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  const scrollToTopHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <footer className="px-6 relative border-t w-full rounded-t-2xl border-gray-100 bg-white dark:bg-zinc-900">
      <div className="absolute inset-x-0 -top-3 flex items-center justify-center">
        <div className="relative flex h-10 w-14 justify-center">
          <div className="absolute inset-0 -top-[2px] h-full w-full rounded-full bg-white blur-[6px] dark:blur-[10px]"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="135"
            height="90"
            className="relative h-10 w-10 text-gray-200"
            viewBox="0 0 14 14"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="7" cy="7" r="6.5"></circle>
              <path d="M.5 7h13m-4 0A11.22 11.22 0 017 13.5 11.22 11.22 0 014.5 7 11.22 11.22 0 017 .5 11.22 11.22 0 019.5 7z"></path>
            </g>
          </svg>
        </div>
      </div>
      <div className="flex flex-wrap gap-8 justify-center mt-16 md:justify-between items-center">
        <div className="flex gap-12 items-center">
          <h3 className="text-slate-500 dark:text-slate-300 text-2xl border-l-2 border-slate-300 pl-8">
            تلفن پشتیبانی 021 - 0000000
          </h3>
          <h3 className="text-slate-500 dark:text-slate-300 text-2xl">
            7 روز هفته، 24 ساعته پاسخگوی شما هستیم.
          </h3>
        </div>
        <div
          className="flex items-center gap-4 border border-slate-300 dark:text-slate-300 hover:dark:bg-slate-500 py-2 px-4 text-2xl rounded-lg outline-none cursor-pointer hover:bg-slate-100 transition-all duration-300 ease-linear"
          onClick={scrollToTopHandler}
        >
          برگشت به بالا
          <FaAngleUp />
        </div>
      </div>
      <div className="flex flex-wrap dark:bg-black gap-8 justify-center md:justify-between items-center py-8 px-16 my-12 bg-gray-100 rounded-2xl shadow-2xl backdrop-blur-3xl">
        <div className="">
          <h3 className="text-2xl text-center text-slate-600 dark:text-slate-300">
            از جدیدترین تخفیف‌ها باخبر شوید
          </h3>
        </div>
        <div className="relative w-[400px] py-4 px-6 bg-white dark:bg-zinc-800 dark:text-slate-300 rounded-xl shadow-md">
          <input
            type="text"
            className="bg-unset w-full"
            placeholder="ایمیل شما"
          />
          <button className="absolute -bottom-16 left-[3rem] xs:left-2 xs:top-2 xs:bottom-2 bg-rose-700 py-3 px-5 text-2xl rounded-2xl font-bold text-white hover:bg-emerald-300 transition-all duration-200 ease-linear">
            ثبت
          </button>
        </div>
        <div className="flex items-center mt-12 sm:mt-0 gap-8">
          <FaXTwitter className="text-4xl cursor-pointer dark:text-white hover:text-red-400 hover:dark:text-red-400 transition-all duration-300 ease-linear" />{" "}
          <SiAparat className="text-4xl cursor-pointer dark:text-white hover:text-red-400 hover:dark:text-red-400 transition-all duration-300 ease-linear" />{" "}
          <AiOutlineInstagram className="text-4xl cursor-pointer dark:text-white hover:text-red-400 hover:dark:text-red-400 transition-all duration-300 ease-linear" />
        </div>
      </div>
      <div className="flex flex-wrap gap-8 justify-center md:justify-between items-center my-16 border-b-2 border-slate-200 pb-12">
        <div className="flex gap-4 sm:gap-60">
          <div className="flex flex-col gap-12">
            <h3 className="text-3xl text-slate-600 dark:text-slate-500 font-bold">
              مهرزا شاپ
            </h3>
            <ul className="space-y-8">
              <li className="text-2xl font-bold text-slate-400 hover:text-red-400 cursor-pointer transition-all duration-200 ease-linear">
                شرایط مرجوعی
              </li>
              <li className="text-2xl font-bold text-slate-400 hover:text-red-400 cursor-pointer transition-all duration-200 ease-linear">
                راهنمای خرید
              </li>
              <li className="text-2xl font-bold text-slate-400 hover:text-red-400 cursor-pointer transition-all duration-200 ease-linear">
                قوانین و مقررات
              </li>
              <li className="text-2xl font-bold text-slate-400 hover:text-red-400 cursor-pointer transition-all duration-200 ease-linear">
                چرا مهرزا شاپ
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-12">
            <h3 className="text-3xl text-slate-600 dark:text-slate-500 font-bold">
              دسترسی سریع
            </h3>
            <ul className="space-y-8">
              <li className="text-2xl font-bold text-slate-400 hover:text-red-400 cursor-pointer transition-all duration-200 ease-linear">
                پیگیری سفارشات
              </li>
              <li className="text-2xl font-bold text-slate-400 hover:text-red-400 cursor-pointer transition-all duration-200 ease-linear">
                تماس با ما
              </li>
              <li className="text-2xl font-bold text-slate-400 hover:text-red-400 cursor-pointer transition-all duration-200 ease-linear">
                سوالات متداول
              </li>
              <li className="text-2xl font-bold text-slate-400 hover:text-red-400 cursor-pointer transition-all duration-200 ease-linear">
                درباره ما
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap relative items-center justify-center sm:justify-between gap-32 ">
          <img src="/images/namad.png" className="blur-[4px]" alt="" />
          <img src="/images/samandehi.png" alt="" className="blur-[4px]" />
          <button className="bg-red-400 py-2 px-4 rounded-lg text-white cursor-default absolute left-16 top-30">
            تستی
          </button>
          <button className="bg-red-400 py-2 px-4 rounded-lg text-white cursor-default absolute right-14">
            تستی
          </button>
        </div>
      </div>
      <div className="pb-12">
        <h1 className="text-center text-2xl font-bold text-slate-500 dark:text-slate-300">
          کلیه حقوق این سایت متعلق به فروشگاه مهرزا شاپ می‌باشد.
        </h1>
      </div>
    </footer>
  );
};

export default Footer;

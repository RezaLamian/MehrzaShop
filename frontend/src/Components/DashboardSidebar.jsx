import React, { useState } from "react";
import { BiEdit, BiExit, BiHeart } from "react-icons/bi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { LuPanelTopOpen, LuShoppingBag } from "react-icons/lu";
import { BsClockHistory } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiUserSettingsLine } from "react-icons/ri";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import DashboardSidebarMobileSize from "./DashboardSidebarMobileSize";
import { useAuth } from "../Contexts/AuthContext";

const DashboardSidebar = () => {
  const [isMobileSidebarShown, setIsMobileSidebarShown] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      {/* // Desktop Dashboard Sidebar */}
      <div className="hidden lg:block flex-1 bg-white dark:bg-zinc-900 text-slate-600 dark:text-slate-300 mt-8 rounded-xl shadow-lg p-8 sticky top-60 h-screen">
        <div className="flex justify-between items-center gap-4 border-b border-slate-300 dark:border-slate-700 pb-8">
          <div className="flex items-center gap-4">
            <img src="/images/user.png" className="w-16 h-16" alt="" />
            <div className="">
              <h3>{user.name}</h3>
              <h3>{user.phone}</h3>
            </div>
          </div>
          <div className="cursor-pointer">
            <BiEdit className="text-5xl text-red-400" />
          </div>
        </div>
        <div className="mt-8">
          <ul className="flex flex-col gap-2">
            <li className="hover:bg-slate-200 dark:hover:bg-zinc-700 rounded-xl">
              <NavLink
                to="/dashboard/"
                className="sidebar-link flex items-center gap-6 dark:text-white text-2xl p-6"
              >
                <LuPanelTopOpen className="text-4xl font-bold" />
                پیشخوان
              </NavLink>
            </li>
            <li className="hover:bg-slate-200 dark:hover:bg-zinc-700 rounded-xl">
              <NavLink
                to="orders"
                className="sidebar-link flex items-center gap-6 dark:text-white text-2xl p-6"
              >
                <LuShoppingBag className="text-4xl font-bold" />
                سفارش‌ها
              </NavLink>
            </li>
            <li className="hover:bg-slate-200 dark:hover:bg-zinc-700 rounded-xl">
              <NavLink
                to="favs"
                className="sidebar-link flex items-center gap-6 dark:text-white text-2xl p-6"
              >
                <BiHeart className="text-4xl font-bold" />
                علاقه‌مندی‌ها
              </NavLink>
            </li>
            <li className="hover:bg-slate-200 dark:hover:bg-zinc-700 rounded-xl">
              <NavLink
                to="recent-views"
                className="sidebar-link flex items-center gap-6 dark:text-white text-2xl p-6"
              >
                <BsClockHistory className="text-4xl font-bold" />
                بازدیدهای اخیر
              </NavLink>
            </li>
            <li className="hover:bg-slate-200 dark:hover:bg-zinc-700 rounded-xl">
              <NavLink
                to="messages"
                className="sidebar-link flex items-center gap-6 dark:text-white text-2xl p-6"
              >
                <IoIosNotificationsOutline className="text-4xl font-bold" />
                پیام‌‌ها
              </NavLink>
            </li>
            <li className="hover:bg-slate-200 dark:hover:bg-zinc-700 rounded-xl">
              <NavLink
                to="addresses"
                className="sidebar-link flex items-center gap-6 dark:text-white text-2xl p-6"
              >
                <HiOutlineLocationMarker className="text-4xl font-bold" />
                آدرس‌ها
              </NavLink>
            </li>
            <li className="hover:bg-slate-200 dark:hover:bg-zinc-700 rounded-xl">
              <NavLink
                to="account-infos"
                className="sidebar-link flex items-center gap-6 dark:text-white text-2xl p-6"
              >
                <RiUserSettingsLine className="text-4xl font-bold" />
                اطلاعات حساب کاربری
              </NavLink>
            </li>
            <li
              className="hover:bg-red-600/20  transition-none"
              onClick={() => {
                logout();
                navigate("/login");
              }}
            >
              <NavLink
                to="/"
                className="hover:!text-red-400 flex items-center gap-8 transition-none dark:text-white text-2xl p-6"
              >
                <BiExit className="text-4xl font-bold" />
                خروج
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* // Mobile Dashboard Sidebar */}
      <div className="rounded-xl bg-white w-full dark:bg-zinc-900 shadow-lg mt-12 p-8 lg:hidden">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="relative">
              <img
                src="/images/user.png"
                className="w-24 h-24 only:rounded-full"
                alt=""
              />
              <Link to="account-infos">
                <BiEdit className="bg-rose-800 rounded-full text-white text-4xl p-1 absolute -right-2 -top-2" />
              </Link>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="line-clamp-1 dark:text-white">{user.name}</p>
              <p className="dark:text-slate-400 text-2xl">{user.phone}</p>
            </div>
            <div className="">
              <button
                className="inline-flex justify-center items-center gap-4 rounded-lg py-2 px-4 text-white bg-rose-800 hover:bg-rose-800/90"
                onClick={() => setIsMobileSidebarShown(true)}
              >
                <AiOutlineMenu className="text-3xl" />
                منوی پنل کاربری
              </button>
            </div>
          </div>
        </div>
        {isMobileSidebarShown && (
          <DashboardSidebarMobileSize close={setIsMobileSidebarShown} />
        )}
      </div>
      {isMobileSidebarShown && (
        <div className="bg-black/40 dark:bg-zinc-400/40 backdrop-blur-md fixed inset-0 z-30"></div>
      )}
    </>
  );
};

export default DashboardSidebar;

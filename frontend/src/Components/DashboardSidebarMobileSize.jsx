import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiExit, BiHeart } from "react-icons/bi";
import { BsClockHistory } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuPanelTopOpen, LuShoppingBag } from "react-icons/lu";
import { RiUserSettingsLine } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

const DashboardSidebarMobileSize = ({ close }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 w-full rounded-t-3xl bg-white transition-transform duration-300 dark:bg-zinc-900 transform-none">
      <div className="flex items-center justify-between gap-x-4 border-b border-gray-100 p-4 pb-5 dark:border-white/5">
        <h5 className="text-3xl text-zinc-600 dark:text-zinc-300">
          منوی پنل کاربری
        </h5>
        <button
          className="inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-zinc-600 hover:bg-zinc-100 hover:text-gray-900 dark:text-zinc-300 dark:hover:bg-black dark:hover:text-white"
          type="button"
          onClick={() => close(false)}
        >
          <AiOutlineClose className="text-3xl" />
        </button>
      </div>
      <div className="p-4">
        <ul className="flex flex-col gap-2">
          <li
            className="hover:bg-slate-200 dark:hover:bg-zinc-700 rounded-xl"
            onClick={() => close(false)}
          >
            <NavLink
              to="/dashboard/"
              className="sidebar-link flex items-center gap-6 dark:text-white text-2xl p-6"
            >
              <LuPanelTopOpen className="text-4xl font-bold" />
              پیشخوان
            </NavLink>
          </li>
          <li
            className="hover:bg-slate-200 dark:hover:bg-zinc-700 rounded-xl"
            onClick={() => close(false)}
          >
            <NavLink
              to="orders"
              className="sidebar-link flex items-center gap-6 dark:text-white text-2xl p-6"
            >
              <LuShoppingBag className="text-4xl font-bold" />
              سفارش‌ها
            </NavLink>
          </li>
          <li
            className="hover:bg-slate-200 dark:hover:bg-zinc-700 rounded-xl"
            onClick={() => close(false)}
          >
            <NavLink
              to="favs"
              className="sidebar-link flex items-center gap-6 dark:text-white text-2xl p-6"
            >
              <BiHeart className="text-4xl font-bold" />
              علاقه‌مندی‌ها
            </NavLink>
          </li>
          <li
            className="hover:bg-slate-200 dark:hover:bg-zinc-700 rounded-xl"
            onClick={() => close(false)}
          >
            <NavLink
              to="recent-views"
              className="sidebar-link flex items-center gap-6 dark:text-white text-2xl p-6"
            >
              <BsClockHistory className="text-4xl font-bold" />
              بازدیدهای اخیر
            </NavLink>
          </li>
          <li
            className="hover:bg-slate-200 dark:hover:bg-zinc-700 rounded-xl"
            onClick={() => close(false)}
          >
            <NavLink
              to="messages"
              className="sidebar-link flex items-center gap-6 dark:text-white text-2xl p-6"
            >
              <IoIosNotificationsOutline className="text-4xl font-bold" />
              پیام‌‌ها
            </NavLink>
          </li>
          <li
            className="hover:bg-slate-200 dark:hover:bg-zinc-700 rounded-xl"
            onClick={() => close(false)}
          >
            <NavLink
              to="addresses"
              className="sidebar-link flex items-center gap-6 dark:text-white text-2xl p-6"
            >
              <HiOutlineLocationMarker className="text-4xl font-bold" />
              آدرس‌ها
            </NavLink>
          </li>
          <li
            className="hover:bg-slate-200 dark:hover:bg-zinc-700 rounded-xl"
            onClick={() => close(false)}
          >
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
  );
};

export default DashboardSidebarMobileSize;

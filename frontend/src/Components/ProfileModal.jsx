import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineClose, AiOutlineHeart } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiExit } from "react-icons/bi";
import { useAuth } from "../Contexts/AuthContext";

const ProfileModal = ({ setShowProfileModal }) => {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const closeMenu = () => {
    setIsMobileMenuShown(true);
  };

  return (
    <>
      {/* // Desktop Profile Modal  */}
      <div className="z-40 absolute hidden top-32 left-10 bottom-auto m-0 !ml-5 w-[20rem] overflow-hidden rounded-xl shadow-lg border-t-2 border-t-emerald-500 bg-white dark:border-t-emerald-400 dark:bg-zinc-800 lg:block">
        <ul className="space-y-1 p-2">
          <li>
            <Link
              className="flex items-center justify-between gap-x-2 rounded-lg p-4 text-slate-600 hover:text-rose-500 dark:text-slate-300 dark:hover:text-red-400"
              to={user.name !== "" ? "/dashboard" : "/login"}
              onClick={() => setShowProfileModal(false)}
            >
              <span className="flex items-center gap-x-4">
                <span className="min-w-fit">
                  <img
                    alt="profile"
                    className="h-8 w-8 rounded-full"
                    src="/images/user.png"
                  />
                </span>
                <span>
                  {user.name !== ""
                    ? user.name
                    : "برای ورود به پنل کاربری لاگین کنید"}
                </span>
              </span>
              <span>
                <FaAngleLeft className="text-4xl" />
              </span>
            </Link>
          </li>

          <li>
            <Link className="flex items-center justify-between rounded-lg p-4 text-slate-600 hover:text-rose-500 dark:text-slate-300 dark:hover:text-red-400">
              <span className="flex items-center gap-x-2">
                <BiShoppingBag className="text-4xl" />
                <span> سفارش ها </span>
              </span>
            </Link>
          </li>
          <li>
            <Link className="flex items-center justify-between rounded-lg p-4 text-slate-600 hover:text-rose-500 dark:text-slate-300 dark:hover:text-red-400">
              <span className="flex items-center gap-x-2">
                <AiOutlineHeart className="text-4xl" />
                <span> علاقه‌مندی ها </span>
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center justify-between rounded-lg p-4 text-slate-600 hover:text-rose-500 dark:text-slate-300 dark:hover:text-red-400"
              href="./profile-notification.html"
            >
              <span className="flex items-center gap-x-2">
                <IoIosNotificationsOutline className="text-4xl" />
                <span> پیام ها </span>
              </span>

              <span className="relative flex h-8 w-8">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-800 opacity-75"></span>
                <span className="relative inline-flex h-full w-full items-center justify-center rounded-full bg-rose-800 text-sm text-white dark:text-white">
                  2
                </span>
              </span>
            </Link>
          </li>
          <li>
            <div className="my-2 h-px w-full rounded-full bg-gray-100 dark:bg-white/5"></div>
          </li>
          <li
            onClick={() => {
              setShowProfileModal(false);
              logout();
            }}
          >
            <Link className="flex items-center justify-between rounded-lg p-4 text-red-500 hover:bg-red-500/10 dark:text-red-400 dark:hover:bg-red-400/10">
              <div className="flex items-center gap-x-2">
                <BiExit className="text-4xl" />
                <span> خروج </span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      {/* // Mobile Profile Modal Drawer  */}
      <div
        className={` ${
          isMobileMenuShown ? "hidden" : "block"
        } lg:hidden z-40 w-[320px] fixed left-0 top-0 h-full overflow-y-auto bg-white p-8 pb-20 transition-transform duration-300 dark:bg-gray-800`}
      >
        <div className="text-3xl text-slate-600 dark:text-slate-300 flex justify-between border-b border-slate-400 pb-8">
          <div className="">
            <AiOutlineClose
              onClick={() => {
                closeMenu();
                setShowProfileModal(false);
              }}
            />
          </div>
          حساب کاربری
        </div>
        <ul className="space-y-4 p-2 mt-8">
          <li onClick={() => setShowProfileModal(false)}>
            <Link
              className="flex items-center justify-between gap-x-2 rounded-lg p-4 text-slate-600 hover:text-rose-500 dark:text-slate-300 dark:hover:text-red-400"
              to={user.name !== "" ? "/dashboard" : "/login"}
            >
              <span className="flex items-center gap-x-4">
                <span className="min-w-fit">
                  <img
                    alt="profile"
                    className="h-16 w-16 rounded-full"
                    src="/images/user.png"
                  />
                </span>
                <span>
                  {" "}
                  {user.name !== ""
                    ? user.name
                    : "برای ورود به پنل کاربری لاگین کنید"}
                </span>
              </span>
              <span>
                <FaAngleLeft className="text-4xl" />
              </span>
            </Link>
          </li>

          <li>
            <Link className="flex items-center justify-between rounded-lg p-4 text-slate-600 hover:text-rose-500 dark:text-slate-300 dark:hover:text-red-400">
              <span className="flex items-center gap-x-2">
                <BiShoppingBag className="text-4xl" />
                <span> سفارش ها </span>
              </span>
            </Link>
          </li>
          <li>
            <Link className="flex items-center justify-between rounded-lg p-4 text-slate-600 hover:text-rose-500 dark:text-slate-300 dark:hover:text-red-400">
              <span className="flex items-center gap-x-2">
                <AiOutlineHeart className="text-4xl" />
                <span> علاقه‌مندی ها </span>
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center justify-between rounded-lg p-4 text-slate-600 hover:text-rose-500 dark:text-slate-300 dark:hover:text-red-400"
              href="./profile-notification.html"
            >
              <span className="flex items-center gap-x-2">
                <IoIosNotificationsOutline className="text-4xl" />
                <span> پیام ها </span>
              </span>

              <span className="relative flex h-8 w-8">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-800 opacity-75"></span>
                <span className="relative inline-flex h-full w-full items-center justify-center rounded-full bg-rose-800 text-sm text-white dark:text-white">
                  2
                </span>
              </span>
            </Link>
          </li>
          <li>
            <div className="my-2 h-px w-full rounded-full bg-gray-100 dark:bg-white/5"></div>
          </li>
          <li
            onClick={() => {
              navigate("/login");
              logout();
              setShowProfileModal(false);
            }}
          >
            <Link className="flex items-center justify-between rounded-lg p-4 text-red-500 hover:bg-red-500/10 dark:text-red-400 dark:hover:bg-red-400/10">
              <div className="flex items-center gap-x-2">
                <BiExit className="text-4xl" />
                <span> خروج </span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      {!isMobileMenuShown && (
        <div className="bg-black/40 dark:bg-zinc-900/40 backdrop-blur-md fixed inset-0 z-30"></div>
      )}
    </>
  );
};

export default ProfileModal;

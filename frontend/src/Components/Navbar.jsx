import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import MegaMenu from "./MegaMenu";
import { AiOutlineClose } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";
import { BiSolidUserCircle } from "react-icons/bi";
import { useAuth } from "../Contexts/AuthContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const { user } = useAuth();

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        id="mobile-menu-btn"
        className="w-full flex justify-center sm:hidden bg-rose-700 py-2 px-4 text-white rounded-t-[30%] hover:bg-rose-800 transition-all duration-300 ease-linear"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <AiOutlineClose className=" text-4xl text-white cursor-pointer" />
        ) : (
          <AiOutlineMenu className=" text-4xl text-white cursor-pointer" />
        )}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="bg-white sm:hidden p-4 dark:bg-zinc-700">
          <ul className="flex flex-col gap-4 text-center">
            <li
              className={`categories flex justify-center z-50 relative ${
                isMegaMenuOpen ? "text-slate-200" : "text-slate-500"
              } gap-4 cursor-pointer hover:bg-rose-700 hover:text-white rounded-lg px-4 transition-all duration-200 ease-linear select-none dark:text-slate-200`}
              onMouseEnter={() => setIsMenuOpen(true)}
              onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
            >
              {isMegaMenuOpen ? (
                <AiOutlineClose
                  className={`text-4xl ${
                    isMegaMenuOpen ? "text-slate-200" : "text-slate-500"
                  } cursor-pointer dark:text-slate-300`}
                />
              ) : (
                <AiOutlineMenu
                  className={`text-4xl ${
                    isMegaMenuOpen ? "text-slate-200" : "text-slate-500"
                  } cursor-pointer dark:text-slate-300`}
                />
              )}
              دسته بندی
            </li>
            {isMegaMenuOpen && (
              <MegaMenu className="mega-menu" setMenuStatus={setIsMenuOpen} />
            )}
            {isMegaMenuOpen ? null : (
              <>
                <li className="select-none text-slate-500 py-2 px-4 cursor-pointer hover:bg-slate-200 transition-all duration-200 ease-in-out rounded-xl dark:text-slate-300">
                  <Link to="/allproducts">محصولات</Link></li>
                <li className="select-none text-slate-500 py-2 px-4 cursor-pointer rounded-lg hover:bg-slate-200 transition-all duration-200 ease-in-out dark:text-slate-300"><Link to="/">فروش ویژه</Link>
                </li>
                <li className="select-none text-slate-500 py-2 px-4 cursor-pointer hover:bg-slate-200 transition-all duration-200 ease-in-out rounded-xl dark:text-slate-300">
                  <Link to="/">چرا مهرزا شاپ</Link>
                </li>
                <li className="select-none text-slate-500 py-2 px-4 cursor-pointer hover:bg-slate-200 transition-all duration-200 ease-in-out rounded-xl dark:text-slate-300">
                  <Link to="/">راهنمای خرید</Link>
                </li>
                <li className="select-none others relative text-slate-500 py-2 px-4 cursor-pointer hover:bg-slate-200 transition-all duration-200 ease-in-out rounded-xl dark:text-slate-300 hover:dark:text-red-400">
                  <span className="cursor-pointer">سایر ...</span>
                  <ul className="others-menu absolute top-full shadow-2xl w-full left-0 right-0 sm:left-0 border-t-4 border-s-red-600 bg-white opacity-0 transition-all duration-300 ease-in-out rounded-lg p-4 space-y-4 dark:bg-zinc-700">
                    <li className="hover:bg-slate-200 rounded-xl py-2 px-4">
                      <Link to="/">تماس با ما</Link>
                    </li>
                    <li className="hover:bg-slate-200 rounded-xl py-2 px-4">
                      <Link to="/">درباره ما</Link>
                    </li>
                    <li className="hover:bg-slate-200 rounded-xl py-2 px-4">
                      <Link to="/">سوالات متداول</Link>
                    </li>
                  </ul>
                </li>
              </>
            )}
          </ul>
        </div>
      )}

      {/* Desktop Menu  */}
      <div className="hidden items-center gap-4 p-4 sm:flex sm:justify-between">
        <ul className="flex gap-8">
          <div className="categories">
            <li
              className={`relative ${
                isMenuOpen ? "text-slate-200" : "text-slate-500"
              } flex gap-4 z-50 cursor-pointer hover:bg-rose-700 hover:text-white rounded-lg p-2 transition-all duration-200 ease-linear select-none dark:text-slate-300 hover:dark:text-white`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <AiOutlineClose
                  className={`text-4xl ${
                    isMenuOpen ? "text-slate-200" : "text-slate-500"
                  } cursor-pointer dark:text-slate-300 hover:dark:text-white`}
                />
              ) : (
                <AiOutlineMenu
                  className={`text-4xl ${
                    isMenuOpen ? "text-slate-200" : "text-slate-500"
                  } cursor-pointer dark:text-slate-300 hover:dark:text-white`}
                />
              )}
              دسته بندی
            </li>
            {isMenuOpen && (
              <MegaMenu className="mega-menu" setMenuStatus={setIsMenuOpen} />
            )}
          </div>

          <li className="select-none text-slate-500 cursor-pointer rounded-lg hover:border-b-4 p-2  hover:border-s-red-600 transition-all duration-100 ease-linear dark:text-slate-300">
            <Link to="/allproducts">محصولات</Link></li>
          <li className="select-none text-slate-500 cursor-pointer rounded-lg hover:border-b-4 p-2 hover:border-s-red-600 transition-all duration-100 ease-linear dark:text-slate-300"><Link>فروش ویژه</Link>
          </li>
          <li className="select-none text-slate-500 cursor-pointer rounded-lg hover:border-b-4 p-2  hover:border-s-red-600 transition-all duration-100 ease-linear dark:text-slate-300">
            <Link>چرا مهرزا شاپ</Link>
          </li>
          <li className="select-none text-slate-500 cursor-pointer rounded-lg hover:border-b-4 p-2  hover:border-s-red-600 transition-all duration-100 ease-linear dark:text-slate-300">
            <Link>راهنمای خرید</Link>
          </li>
          <li className="select-none others relative text-slate-500 cursor-pointer rounded-lg p-2 hover:border-b-4  hover:border-s-red-600 transition-all duration-100 ease-linear dark:text-slate-300">
            سایر ...
            <ul className="others-menu invisible absolute top-16 bg-white opacity-0 transition-all duration-300 ease-in-out rounded-lg w-60 p-8 space-y-8 dark:bg-zinc-700">
              <li>
                <Link>تماس با ما</Link>
              </li>
              <li>
                <Link>درباره ما</Link>
              </li>
              <li>
                <Link>سوالات متداول</Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className="flex">
          {user.name ? (
            <Link
              className="bg-rose-700 py-2 px-4 rounded-lg text-white flex justify-center items-center gap-2 hover:text-white hover:bg-rose-700/90"
              to="/dashboard"
            >
              {user.name}
              <BiSolidUserCircle className="text-3xl" />
            </Link>
          ) : (
            <Link
              className="bg-rose-700 py-2 px-4 rounded-lg text-white flex justify-center items-center gap-2 hover:text-white hover:bg-rose-700/90"
              to="/login"
            >
              ورود / ثبت نام
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;

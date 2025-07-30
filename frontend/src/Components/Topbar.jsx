import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { PiMoonStarsBold } from "react-icons/pi";
import { BsFillSunFill } from "react-icons/bs";
import ProfileModal from "./ProfileModal";
import CartModal from "./CartModal";

const Topbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [globalSearchValue, setGlobalSearchValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const isDarkMode = JSON.parse(localStorage.getItem("darkMode"));
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }

    return () => {
      document.documentElement.classList.remove("dark");
    };
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    const isDarkMode = document.documentElement.classList.contains("dark");
    localStorage.setItem("darkMode", isDarkMode);
  };

  const goToSearchPage = (event) => {
    event.preventDefault();
    navigate(`/search/${globalSearchValue}/`);
    setGlobalSearchValue("");
  };

  return (
    <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 p-4 pt-8">
      <div className="w-[12rem] h-[3rem] lg:w-[20rem] lg:h-[5rem]">
        <Link to="/">
          <img src="/images/logo.png" className="w-full h-full" />
        </Link>
      </div>
      <div className="flex bg-slate-100 rounded-lg w-[150px] xs:w-[200px] md:w-[500px] relative px-12 py-2  dark:bg-black dark:text-slate-300">
        <AiOutlineSearch
          className="cursor-pointer absolute right-2 top-5 text-4xl text-slate-500"
          onClick={goToSearchPage}
        />
        <input
          type="text"
          className="bg-unset py-2 w-full"
          placeholder="جستجو کنید..."
          value={globalSearchValue}
          onChange={(event) => setGlobalSearchValue(event.target.value)}
        />
      </div>
      <div className="flex gap-8">
        <div className="cursor-pointer">
          <BsPerson
            className="text-5xl text-slate-500 lg:z-50 lg:relative dark:text-slate-300"
            onClick={() => {
              setShowProfileModal(!showProfileModal);
              setShowCartModal(false);
            }}
          />
          {showProfileModal && (
            <ProfileModal setShowProfileModal={setShowProfileModal} />
          )}
        </div>
        <div className="relative cursor-pointer">
          <AiOutlineShoppingCart
            className="text-5xl text-slate-500 lg:z-50 lg:relative dark:text-slate-300"
            onClick={() => {
              setShowCartModal(!showCartModal);
              setShowProfileModal(false);
            }}
          />
          <div className="absolute lg:z-50 -top-1 right-0 bg-rose-800 rounded-[50%] text-white text-[10px] p-1">
            10
          </div>
          {showCartModal && <CartModal setShowCartModal={setShowCartModal} />}
        </div>
        <div
          className="cursor-pointer"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? (
            <PiMoonStarsBold
              className="text-5xl text-slate-500 dark:text-slate-300"
              onClick={toggleDarkMode}
            />
          ) : (
            <BsFillSunFill
              className="text-5xl text-slate-500 dark:text-slate-300"
              onClick={toggleDarkMode}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;

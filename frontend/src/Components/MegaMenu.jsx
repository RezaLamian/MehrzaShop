import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import axios from "axios";

const MegaMenu = ({ setMenuStatus }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [mensCategory, setMensCategory] = useState([]);
  const [womensCategory, setWomensCategory] = useState([]);
  const [childrenCategory, setChildrenCategory] = useState([]);
  const [watchesCategory, setWatchesCategory] = useState([]);
  const [cosmeticCategory, setCosmeticCategory] = useState([]);
  const [perfumeCategory, setPerfumeCategory] = useState([]);

  const handleCategoryHover = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res1 = await axios.get(
        `http://localhost:3000/products?category=مردانه`
      );
      const res2 = await axios.get(
        `http://localhost:3000/products?category=زنانه`
      );
      const res3 = await axios.get(
        `http://localhost:3000/products?category=ساعت`
      );
      const res4 = await axios.get(
        `http://localhost:3000/products?category=عطر`
      );
      const res5 = await axios.get(
        `http://localhost:3000/products?category=کودکان`
      );
      const res6 = await axios.get(
        `http://localhost:3000/products?category=آرایشی`
      );
      setMensCategory(res1.data);
      setWomensCategory(res2.data);
      setWatchesCategory(res3.data);
      setPerfumeCategory(res4.data);
      setChildrenCategory(res5.data);
      setCosmeticCategory(res6.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="absolute mega-menu z-50 px-8 md:px-0 top-full right-0 left-0 sm:w-full max-w-[1000px] border-t-4 border-s-red-600 transition-all duration-200 ease-in-out ">
        <div
          className="relative rounded-b-xl bg-white dark:bg-zinc-700"
          id="desktopMegamenu"
        >
          <div className="absolute top-0 flex w-full justify-center">
            <div className="left-0 h-0.5 animate-border-width-reverse rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-emerald-500 to-[rgba(17,17,17,0)] transition-all duration-200 group-hover:animate-border-width dark:via-emerald-400"></div>
          </div>
          <div className="flex flex-col sm:flex-row sm:h-[450px] max-h-[450px] w-full overflow-hidden rounded-b-lg pt-0.5">
            <div
              className="main-scroll w-50 overflow-y-auto border-gray-100 bg-gray-100 dark:border-white/5 dark:bg-zinc-800"
              dir="ltr"
            >
              <ul
                dir="rtl"
                id="mega-menu-parents"
                className="flex p-4 flex-wrap justify-between items-center sm:block dark:bg-zinc-800"
              >
                <li className="text-white rounded-xl hover:bg-rose-700">
                  <Link
                    className="flex py-4 pr-4 text-zinc-700 dark:text-white mega-menu-active hover:text-white text-base sm:text-2xl font-bold"
                    to="/allproducts"
                    onMouseEnter={() => handleCategoryHover("men")}
                  >
                    مردانه
                  </Link>
                </li>
                <li className="text-white  hover:bg-rose-700 rounded-xl">
                  <Link
                    className=" flex py-4 pr-4 text-zinc-700 text-center dark:text-white text-base sm:text-2xl font-bold hover:text-white"
                    to="/allproducts"
                    onMouseEnter={() => handleCategoryHover("women")}
                  >
                    زنانه
                  </Link>
                </li>
                <li className="text-white  hover:bg-rose-700 rounded-xl">
                  <Link
                    className="flex py-4 pr-4 text-zinc-700 dark:text-white text-base sm:text-2xl font-bold hover:text-white"
                    to="/allproducts"
                    onMouseEnter={() => handleCategoryHover("children")}
                  >
                    بچه گانه
                  </Link>
                </li>
                <li className="text-white  hover:bg-rose-700 rounded-xl">
                  <Link
                    className="flex py-4 pr-4 text-zinc-700 dark:text-white text-base sm:text-2xl font-bold hover:text-white"
                    to="/allproducts"
                    onMouseEnter={() => handleCategoryHover("watches")}
                  >
                    ساعت
                  </Link>
                </li>
                <li className="text-white  hover:bg-rose-700 rounded-xl">
                  <Link
                    className="flex py-4 pr-4 text-zinc-700 dark:text-white text-base sm:text-2xl font-bold hover:text-white"
                    to="/allproducts"
                    onMouseEnter={() => handleCategoryHover("bags")}
                  >
                    کیف
                  </Link>
                </li>
                <li className="text-white  hover:bg-rose-700 rounded-xl">
                  <Link
                    className="flex py-4 pr-4 text-zinc-700 dark:text-white text-base sm:text-2xl font-bold hover:text-white"
                    to="/allproducts"
                    onMouseEnter={() => handleCategoryHover("cosmetic")}
                  >
                    آرایشی و بهداشتی
                  </Link>
                </li>
                <li className="text-white  hover:bg-rose-700 rounded-xl">
                  <Link
                    className="flex py-4 pr-4 text-zinc-700 dark:text-white text-base sm:text-2xl font-bold hover:text-white"
                    to="/allproducts"
                    onMouseEnter={() => handleCategoryHover("perfume")}
                  >
                    عطر و ادکلن
                  </Link>
                </li>
              </ul>
            </div>

            <div
              className="h-[450px] max-h-[450px] w-full overflow-auto"
              dir="ltr"
            >
              <div className="flex flex-grow" dir="rtl" id="mega-menu-childs">
                {selectedCategory === null && (
                  <div className=" p-5">
                    <div className="mb-4">
                      <Link
                        className="flex items-center gap-x-1 py-2 text-md text-rose-500 dark:text-red-400"
                        to="/allproducts"
                      >
                        <div className="flex items-center gap-4">
                          مشاهده همه
                          <FaAngleLeft />
                        </div>
                      </Link>
                    </div>
                    <div className="flex flex-grow flex-wrap gap-x-14 gap-y-8">
                      <div className="space-y-2">
                        <Link
                          className="flex items-center gap-x-2 text-zinc-700 hover:text-rose-500 dark:text-white hover:dark:text-red-400"
                          to="/allproducts"
                        >
                          <span className="h-5 w-0.5 rounded-full bg-rose-800 dark:bg-rose-800"></span>
                          <div>لباس مردانه</div>
                        </Link>
                        <ul>
                          {mensCategory
                            .filter((men) => men.subcategory === "لباس مردانه")
                            .map((clothes) => (
                              <li>
                                <Link
                                  className="block py-2 text-md text-zinc-600 hover:text-rose-500 dark:text-zinc-300 hover:dark:text-red-400"
                                  to={`/product-details/${clothes.shortName}`}
                                >
                                  {clothes.title}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <Link
                          className="flex items-center gap-x-2 text-zinc-700 hover:text-rose-500 dark:text-white hover:dark:text-red-400"
                          to="/allproducts"
                        >
                          <span className="h-5 w-0.5 rounded-full bg-rose-800 dark:bg-rose-800"></span>
                          <div>کفش مردانه</div>
                        </Link>
                        <ul>
                          {mensCategory
                            .filter((men) => men.subcategory === "کفش مردانه")
                            .map((shoes) => (
                              <li>
                                <Link
                                  className="block py-2 text-md text-zinc-600 hover:text-rose-500 dark:text-zinc-300 hover:dark:text-red-400"
                                  to={`/product-details/${shoes.shortName}`}
                                >
                                  {shoes.title}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <Link
                          className="flex items-center gap-x-2 text-zinc-700 hover:text-rose-500 dark:text-white hover:dark:text-red-400"
                          to="/allproducts"
                        >
                          <span className="h-5 w-0.5 rounded-full bg-rose-800 dark:bg-rose-800"></span>
                          <div>اکسسوری</div>
                        </Link>
                        <ul>
                          {mensCategory
                            .filter(
                              (men) => men.subcategory === "اکسسوری مردانه"
                            )
                            .map((accessory) => (
                              <li>
                                <Link
                                  className="block py-2 text-md text-zinc-600 hover:text-rose-500 dark:text-zinc-300 hover:dark:text-red-400"
                                  to={`/product-details/${accessory.shortName}`}
                                >
                                  {accessory.title}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {selectedCategory === "men" && (
                  <div className=" p-5">
                    <div className="mb-4">
                      <Link
                        className="flex items-center gap-x-1 py-2 text-md text-rose-500 dark:text-red-400"
                        to="/allproducts"
                      >
                        <div className="flex items-center gap-4">
                          مشاهده همه
                          <FaAngleLeft />
                        </div>
                      </Link>
                    </div>
                    <div className="flex flex-grow flex-wrap gap-x-14 gap-y-8">
                      <div className="space-y-2">
                        <Link
                          className="flex items-center gap-x-2 text-zinc-700 hover:text-rose-500 dark:text-white hover:dark:text-red-400"
                          to="/allproducts"
                        >
                          <span className="h-5 w-0.5 rounded-full bg-rose-800 dark:bg-rose-800"></span>
                          <div className="flex items-center gap-4">
                            لباس مردانه
                            <FaAngleLeft />
                          </div>
                        </Link>
                        <ul>
                          {mensCategory
                            .filter((men) => men.subcategory === "لباس مردانه")
                            .map((clothes) => (
                              <li
                                key={clothes.id}
                                onClick={() => setMenuStatus(false)}
                              >
                                <Link
                                  className="block py-2 text-md text-zinc-600 hover:text-rose-500 dark:text-zinc-300 hover:dark:text-red-400"
                                  to={`/product-details/${clothes.shortName}`}
                                >
                                  {clothes.title}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <Link
                          className="flex items-center gap-x-2 text-zinc-700 hover:text-rose-500 dark:text-white hover:dark:text-red-400"
                          to="/allproducts"
                        >
                          <span className="h-5 w-0.5 rounded-full bg-rose-800 dark:bg-rose-800"></span>
                          <div className="flex items-center gap-4">
                            کفش مردانه
                            <FaAngleLeft />
                          </div>
                        </Link>
                        <ul>
                          {mensCategory
                            .filter((men) => men.subcategory === "کفش مردانه")
                            .map((shoes) => (
                              <li
                                key={shoes.id}
                                onClick={() => setMenuStatus(false)}
                              >
                                <Link
                                  className="block py-2 text-md text-zinc-600 hover:text-rose-500 dark:text-zinc-300 hover:dark:text-red-400"
                                  to={`/product-details/${shoes.shortName}`}
                                >
                                  {shoes.title}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <Link
                          className="flex items-center gap-x-2 text-zinc-700 hover:text-rose-500 dark:text-white hover:dark:text-red-400"
                          to="/allproducts"
                        >
                          <span className="h-5 w-0.5 rounded-full bg-rose-800 dark:bg-rose-800"></span>
                          <div className="flex items-center gap-4">
                            اکسسوری
                            <FaAngleLeft />
                          </div>
                        </Link>
                        <ul>
                          {mensCategory
                            .filter(
                              (men) => men.subcategory === "اکسسوری مردانه"
                            )
                            .map((accessory) => (
                              <li
                                key={accessory.id}
                                onClick={() => setMenuStatus(false)}
                              >
                                <Link
                                  className="block py-2 text-md text-zinc-600 hover:text-rose-500 dark:text-zinc-300 hover:dark:text-red-400"
                                  to={`/product-details/${accessory.shortName}`}
                                >
                                  {accessory.title}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {selectedCategory === "women" && (
                  <div className="p-5">
                    <div className="mb-4">
                      <Link
                        className="flex items-center gap-x-1 py-2 text-md text-rose-500 dark:text-red-400"
                        to="/allproducts"
                      >
                        <div className="flex items-center gap-4">
                          مشاهده همه
                          <FaAngleLeft />
                        </div>
                      </Link>
                    </div>
                    <div className="flex flex-grow flex-wrap gap-x-14 gap-y-8">
                      <div className="space-y-2">
                        <Link
                          className="flex items-center gap-x-2 text-zinc-700 hover:text-rose-500 dark:text-white hover:dark:text-red-400"
                          to="/allproducts"
                        >
                          <span className="h-5 w-0.5 rounded-full bg-rose-800 dark:bg-rose-800"></span>
                          <div className="flex items-center gap-4">
                            لباس زنانه
                            <FaAngleLeft />
                          </div>
                        </Link>
                        <ul>
                          {womensCategory
                            .filter(
                              (women) => women.subcategory === "لباس زنانه"
                            )
                            .map((clothes) => (
                              <li
                                key={clothes.id}
                                onClick={() => setMenuStatus(false)}
                              >
                                <Link
                                  className="block py-2 text-md text-zinc-600 hover:text-rose-500 dark:text-zinc-300 hover:dark:text-red-400"
                                  to={`/product-details/${clothes.shortName}`}
                                >
                                  {clothes.title}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <Link
                          className="flex items-center gap-x-2 text-zinc-700 hover:text-rose-500 dark:text-white hover:dark:text-red-400"
                          to="/allproducts"
                        >
                          <span className="h-5 w-0.5 rounded-full bg-rose-800 dark:bg-rose-800"></span>
                          <div className="flex items-center gap-4">
                            کفش زنانه
                            <FaAngleLeft />
                          </div>
                        </Link>
                        <ul>
                          {womensCategory
                            .filter(
                              (women) => women.subcategory === "کفش زنانه"
                            )
                            .map((shoes) => (
                              <li
                                key={shoes.id}
                                onClick={() => setMenuStatus(false)}
                              >
                                <Link
                                  className="block py-2 text-md text-zinc-600 hover:text-rose-500 dark:text-zinc-300 hover:dark:text-red-400"
                                  to={`/product-details/${shoes.shortName}`}
                                >
                                  {shoes.title}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <Link
                          className="flex items-center gap-x-2 text-zinc-700 hover:text-rose-500 dark:text-white hover:dark:text-red-400"
                          to="/allproducts"
                        >
                          <span className="h-5 w-0.5 rounded-full bg-rose-800 dark:bg-rose-800"></span>
                          <div className="flex items-center gap-4">
                            اکسسوری
                            <FaAngleLeft />
                          </div>
                        </Link>
                        <ul>
                          {womensCategory
                            .filter(
                              (women) => women.subcategory === "اکسسوری زنانه"
                            )
                            .map((accessory) => (
                              <li
                                key={accessory.id}
                                onClick={() => setMenuStatus(false)}
                              >
                                <Link
                                  className="block py-2 text-md text-zinc-600 hover:text-rose-500 dark:text-zinc-300 hover:dark:text-red-400"
                                  to={`/product-details/${accessory.shortName}`}
                                >
                                  {accessory.title}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {selectedCategory === "children" && (
                  <div className=" p-5">
                    <div className="mb-4">
                      <Link
                        className="flex items-center gap-x-1 py-2 text-md text-rose-500 dark:text-red-400"
                        to="/allproducts"
                      >
                        <div className="flex items-center gap-4">
                          مشاهده همه
                          <FaAngleLeft />
                        </div>
                      </Link>
                    </div>
                    <div className="flex flex-wrap gap-x-14 gap-y-8">
                      <div className="space-y-2">
                        <Link
                          className="flex items-center gap-x-2 text-zinc-700 hover:text-rose-500 dark:text-white hover:dark:text-red-400"
                          to="/allproducts"
                        >
                          <span className="h-5 w-0.5 rounded-full bg-rose-800 dark:bg-rose-800"></span>
                          <div className="flex items-center gap-4">
                            لباس پسرانه
                            <FaAngleLeft />
                          </div>
                        </Link>
                        <ul>
                          {childrenCategory
                            .filter(
                              (boys) => boys.subcategory === "لباس پسرانه"
                            )
                            .map((clothes) => (
                              <li
                                key={clothes.id}
                                onClick={() => setMenuStatus(false)}
                              >
                                <Link
                                  className="block py-2 text-md text-zinc-600 hover:text-rose-500 dark:text-zinc-300 hover:dark:text-red-400"
                                  to={`/product-details/${clothes.shortName}`}
                                >
                                  {clothes.title}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <Link
                          className="flex items-center gap-x-2 text-zinc-700 hover:text-rose-500 dark:text-white hover:dark:text-red-400"
                          to="/allproducts"
                        >
                          <span className="h-5 w-0.5 rounded-full bg-rose-800 dark:bg-rose-800"></span>
                          <div className="flex items-center gap-4">
                            کفش پسرانه
                            <FaAngleLeft />
                          </div>
                        </Link>
                        <ul>
                          {childrenCategory
                            .filter((boys) => boys.subcategory === "کفش پسرانه")
                            .map((shoes) => (
                              <li
                                key={shoes.id}
                                onClick={() => setMenuStatus(false)}
                              >
                                <Link
                                  className="block py-2 text-md text-zinc-600 hover:text-rose-500 dark:text-zinc-300 hover:dark:text-red-400"
                                  to={`/product-details/${shoes.shortName}`}
                                >
                                  {shoes.title}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <Link
                          className="flex items-center gap-x-2 text-zinc-700 hover:text-rose-500 dark:text-white hover:dark:text-red-400"
                          to="/allproducts"
                        >
                          <span className="h-5 w-0.5 rounded-full bg-rose-800 dark:bg-rose-800"></span>
                          <div className="flex items-center gap-4">
                            اکسسوری پسرانه
                            <FaAngleLeft />
                          </div>
                        </Link>
                        <ul>
                          {childrenCategory
                            .filter(
                              (boys) => boys.subcategory === "اکسسوری پسرانه"
                            )
                            .map((accessory) => (
                              <li
                                key={accessory.id}
                                onClick={() => setMenuStatus(false)}
                              >
                                <Link
                                  className="block py-2 text-md text-zinc-600 hover:text-rose-500 dark:text-zinc-300 hover:dark:text-red-400"
                                  to={`/product-details/${accessory.shortName}`}
                                >
                                  {accessory.title}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <Link
                          className="flex items-center gap-x-2 text-zinc-700 hover:text-rose-500 dark:text-white hover:dark:text-red-400"
                          to="/allproducts"
                        >
                          <span className="h-5 w-0.5 rounded-full bg-rose-800 dark:bg-rose-800"></span>
                          <div className="flex items-center gap-4">
                            لباس دخترانه
                            <FaAngleLeft />
                          </div>
                        </Link>
                        <ul>
                          {childrenCategory
                            .filter(
                              (girls) => girls.subcategory === "لباس دخترانه"
                            )
                            .map((clothes) => (
                              <li
                                key={clothes.id}
                                onClick={() => setMenuStatus(false)}
                              >
                                <Link
                                  className="block py-2 text-md text-zinc-600 hover:text-rose-500 dark:text-zinc-300 hover:dark:text-red-400"
                                  to={`/product-details/${clothes.shortName}`}
                                >
                                  {clothes.title}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <Link
                          className="flex items-center gap-x-2 text-zinc-700 hover:text-rose-500 dark:text-white hover:dark:text-red-400"
                          to="/allproducts"
                        >
                          <span className="h-5 w-0.5 rounded-full bg-rose-800 dark:bg-rose-800"></span>
                          <div className="flex items-center gap-4">
                            کفش دخترانه
                            <FaAngleLeft />
                          </div>
                        </Link>
                        <ul>
                          {childrenCategory
                            .filter(
                              (girls) => girls.subcategory === "کفش دخترانه"
                            )
                            .map((shoes) => (
                              <li
                                key={shoes.id}
                                onClick={() => setMenuStatus(false)}
                              >
                                <Link
                                  className="block py-2 text-md text-zinc-600 hover:text-rose-500 dark:text-zinc-300 hover:dark:text-red-400"
                                  to={`/product-details/${shoes.shortName}`}
                                >
                                  {shoes.title}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <Link
                          className="flex items-center gap-x-2 text-zinc-700 hover:text-rose-500 dark:text-white hover:dark:text-red-400"
                          to="/allproducts"
                        >
                          <span className="h-5 w-0.5 rounded-full bg-rose-800 dark:bg-rose-800"></span>
                          <div className="flex items-center gap-4">
                            اکسسوری دخترانه
                            <FaAngleLeft />
                          </div>
                        </Link>
                        <ul>
                          {childrenCategory
                            .filter(
                              (girls) => girls.subcategory === "اکسسوری دخترانه"
                            )
                            .map((accessory) => (
                              <li
                                key={accessory.id}
                                onClick={() => setMenuStatus(false)}
                              >
                                <Link
                                  className="block py-2 text-md text-zinc-600 hover:text-rose-500 dark:text-zinc-300 hover:dark:text-red-400"
                                  to={`/product-details/${accessory.shortName}`}
                                >
                                  {accessory.title}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {selectedCategory === "watches" && (
                  <div className="p-5">
                    <div className="mb-4">
                      <Link
                        className="flex items-center gap-x-1 py-2 text-md text-rose-500 dark:text-red-400"
                        to="/allproducts"
                      >
                        <div className="flex items-center gap-4">
                          مشاهده همه
                          <FaAngleLeft />
                        </div>
                      </Link>
                    </div>
                    <div className="flex flex-grow flex-wrap gap-x-14 gap-y-8">
                      <div className="space-y-2">
                        <Link
                          className="flex items-center gap-x-2 text-zinc-700 hover:text-rose-500 dark:text-white hover:dark:text-red-400"
                          to="/allproducts"
                        >
                          <span className="h-5 w-0.5 rounded-full bg-rose-800 dark:bg-rose-800"></span>
                          <div className="flex items-center gap-4">
                            ساعت مردانه
                            <FaAngleLeft />
                          </div>
                        </Link>
                        <ul>
                          {watchesCategory
                            .filter((men) => men.subcategory === "ساعت مردانه")
                            .map((watches) => (
                              <li
                                key={watches.id}
                                onClick={() => setMenuStatus(false)}
                              >
                                <Link
                                  className="block py-2 text-md text-zinc-600 hover:text-rose-500 dark:text-zinc-300 hover:dark:text-red-400"
                                  to={`/product-details/${watches.shortName}`}
                                >
                                  {watches.title}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <Link
                          className="flex items-center gap-x-2 text-zinc-700 hover:text-rose-500 dark:text-white hover:dark:text-red-400"
                          to="/allproducts"
                        >
                          <span className="h-5 w-0.5 rounded-full bg-rose-800 dark:bg-rose-800"></span>
                          <div className="flex items-center gap-4">
                            ساعت زنانه
                            <FaAngleLeft />
                          </div>
                        </Link>
                        <ul>
                          {watchesCategory
                            .filter(
                              (women) => women.subcategory === "ساعت زنانه"
                            )
                            .map((watches) => (
                              <li
                                key={watches.id}
                                onClick={() => setMenuStatus(false)}
                              >
                                <Link
                                  className="block py-2 text-md text-zinc-600 hover:text-rose-500 dark:text-zinc-300 hover:dark:text-red-400"
                                  to={`/product-details/${watches.shortName}`}
                                >
                                  {watches.title}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <Link
                          className="flex items-center gap-x-2 text-zinc-700 hover:text-rose-500 dark:text-white hover:dark:text-red-400"
                          to="/allproducts"
                        >
                          <span className="h-5 w-0.5 rounded-full bg-rose-800 dark:bg-rose-800"></span>
                          <div className="flex items-center gap-4">
                            ساعت پسرانه
                            <FaAngleLeft />
                          </div>
                        </Link>
                        <ul>
                          {watchesCategory
                            .filter(
                              (boys) => boys.subcategory === "ساعت پسرانه"
                            )
                            .map((watches) => (
                              <li
                                key={watches.id}
                                onClick={() => setMenuStatus(false)}
                              >
                                <Link
                                  className="block py-2 text-md text-zinc-600 hover:text-rose-500 dark:text-zinc-300 hover:dark:text-red-400"
                                  to={`/product-details/${watches.shortName}`}
                                >
                                  {watches.title}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <Link
                          className="flex items-center gap-x-2 text-zinc-700 hover:text-rose-500 dark:text-white hover:dark:text-red-400"
                          to="/allproducts"
                        >
                          <span className="h-5 w-0.5 rounded-full bg-rose-800 dark:bg-rose-800"></span>
                          <div className="flex items-center gap-4">
                            ساعت دخترانه
                            <FaAngleLeft />
                          </div>
                        </Link>
                        <ul>
                          {watchesCategory
                            .filter(
                              (girls) => girls.subcategory === "ساعت دخترانه"
                            )
                            .map((watches) => (
                              <li
                                key={watches.id}
                                onClick={() => setMenuStatus(false)}
                              >
                                <Link
                                  className="block py-2 text-md text-zinc-600 hover:text-rose-500 dark:text-zinc-300 hover:dark:text-red-400"
                                  to={`/product-details/${watches.shortName}`}
                                >
                                  {watches.title}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {selectedCategory === "bags" && (
                  <div className="p-5">
                    <div className="mb-4">
                      <Link
                        className="flex items-center gap-x-1 py-2 text-md text-rose-500 dark:text-red-400"
                        to="/allproducts"
                      >
                        <div className="flex items-center gap-4">
                          مشاهده همه
                          <FaAngleLeft />
                        </div>
                      </Link>
                    </div>
                    <div className="flex flex-grow flex-wrap gap-x-14 gap-y-8">
                      <div className="space-y-2">
                        <Link
                          className="flex items-center gap-x-2 text-zinc-700 hover:text-rose-500 dark:text-white hover:dark:text-red-400"
                          to="/allproducts"
                        >
                          <span className="h-5 w-0.5 rounded-full bg-rose-800 dark:bg-rose-800"></span>
                          <div className="flex items-center gap-4">
                            کیف مردانه
                            <FaAngleLeft />
                          </div>
                        </Link>
                        <ul>
                          {mensCategory
                            .filter((men) => men.title.includes("کیف"))
                            .map((bags) => (
                              <li
                                key={bags.id}
                                onClick={() => setMenuStatus(false)}
                              >
                                <Link
                                  className="block py-2 text-md text-zinc-600 hover:text-rose-500 dark:text-zinc-300 hover:dark:text-red-400"
                                  to={`/product-details/${bags.shortName}`}
                                >
                                  {bags.title}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <Link
                          className="flex items-center gap-x-2 text-zinc-700 hover:text-rose-500 dark:text-white hover:dark:text-red-400"
                          to="/allproducts"
                        >
                          <span className="h-5 w-0.5 rounded-full bg-rose-800 dark:bg-rose-800"></span>
                          <div className="flex items-center gap-4">
                            کیف زنانه
                            <FaAngleLeft />
                          </div>
                        </Link>
                        <ul>
                          {womensCategory
                            .filter((women) => women.title.includes("کیف"))
                            .map((bags) => (
                              <li
                                key={bags.id}
                                onClick={() => setMenuStatus(false)}
                              >
                                <Link
                                  className="block py-2 text-md text-zinc-600 hover:text-rose-500 dark:text-zinc-300 hover:dark:text-red-400"
                                  to={`/product-details/${bags.shortName}`}
                                >
                                  {bags.title}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <Link
                          className="flex items-center gap-x-2 text-zinc-700 hover:text-rose-500 dark:text-white hover:dark:text-red-400"
                          to="/allproducts"
                        >
                          <span className="h-5 w-0.5 rounded-full bg-rose-800 dark:bg-rose-800"></span>
                          <div className="flex items-center gap-4">
                            کیف پسرانه
                            <FaAngleLeft />
                          </div>
                        </Link>
                        <ul>
                          {childrenCategory
                            .filter((boys) => boys.title.includes("کیف پسرانه"))
                            .map((bags) => (
                              <li
                                key={bags.id}
                                onClick={() => setMenuStatus(false)}
                              >
                                <Link
                                  className="block py-2 text-md text-zinc-600 hover:text-rose-500 dark:text-zinc-300 hover:dark:text-red-400"
                                  to={`/product-details/${bags.shortName}`}
                                >
                                  {bags.title}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <Link
                          className="flex items-center gap-x-2 text-zinc-700 hover:text-rose-500 dark:text-white hover:dark:text-red-400"
                          to="/allproducts"
                        >
                          <span className="h-5 w-0.5 rounded-full bg-rose-800 dark:bg-rose-800"></span>
                          <div className="flex items-center gap-4">
                            کیف دخترانه
                            <FaAngleLeft />
                          </div>
                        </Link>
                        <ul>
                          {childrenCategory
                            .filter((girls) =>
                              girls.title.includes("کیف دخترانه")
                            )
                            .map((bags) => (
                              <li
                                key={bags.id}
                                onClick={() => setMenuStatus(false)}
                              >
                                <Link
                                  className="block py-2 text-md text-zinc-600 hover:text-rose-500 dark:text-zinc-300 hover:dark:text-red-400"
                                  to={`/product-details/${bags.shortName}`}
                                >
                                  {bags.title}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {selectedCategory === "cosmetic" && (
                  <div className="p-5">
                    <div className="mb-4">
                      <Link
                        className="flex items-center gap-x-1 py-2 text-md text-rose-500 dark:text-red-400"
                        to="/allproducts"
                      >
                        <div className="flex items-center gap-4">
                          مشاهده همه
                          <FaAngleLeft />
                        </div>
                      </Link>
                    </div>
                    <div className="flex flex-grow flex-wrap gap-x-14 gap-y-8">
                      <div className="space-y-2">
                        <Link
                          className="flex items-center gap-x-2 text-zinc-700 hover:text-rose-500 dark:text-white hover:dark:text-red-400"
                          to="/allproducts"
                        >
                          <span className="h-5 w-0.5 rounded-full bg-rose-800 dark:bg-rose-800"></span>
                          <div className="flex items-center gap-4">
                            آرایشی
                            <FaAngleLeft />
                          </div>
                        </Link>
                        <ul>
                          {cosmeticCategory
                            .filter((cos) => cos.subcategory === "آرایشی")
                            .map((cosmetic) => (
                              <li
                                key={cosmetic.id}
                                onClick={() => setMenuStatus(false)}
                              >
                                <Link
                                  className="block py-2 text-md text-zinc-600 hover:text-rose-500 dark:text-zinc-300 hover:dark:text-red-400"
                                  to={`/product-details/${cosmetic.shortName}`}
                                >
                                  {cosmetic.title}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <Link
                          className="flex items-center gap-x-2 text-zinc-700 hover:text-rose-500 dark:text-white hover:dark:text-red-400"
                          to="/allproducts"
                        >
                          <span className="h-5 w-0.5 rounded-full bg-rose-800 dark:bg-rose-800"></span>
                          <div className="flex items-center gap-4">
                            پوست
                            <FaAngleLeft />
                          </div>
                        </Link>
                        <ul>
                          {cosmeticCategory
                            .filter((cos) => cos.subcategory === "مراقبت پوست")
                            .map((skin) => (
                              <li
                                key={skin.id}
                                onClick={() => setMenuStatus(false)}
                              >
                                <Link
                                  className="block py-2 text-md text-zinc-600 hover:text-rose-500 dark:text-zinc-300 hover:dark:text-red-400"
                                  to={`/product-details/${skin.shortName}`}
                                >
                                  {skin.title}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <Link
                          className="flex items-center gap-x-2 text-zinc-700 hover:text-rose-500 dark:text-white hover:dark:text-red-400"
                          to="/allproducts"
                        >
                          <span className="h-5 w-0.5 rounded-full bg-rose-800 dark:bg-rose-800"></span>
                          <div className="flex items-center gap-4">
                            مو
                            <FaAngleLeft />
                          </div>
                        </Link>
                        <ul>
                          {cosmeticCategory
                            .filter((cos) => cos.subcategory === "مو")
                            .map((hair) => (
                              <li
                                key={hair.id}
                                onClick={() => setMenuStatus(false)}
                              >
                                <Link
                                  className="block py-2 text-md text-zinc-600 hover:text-rose-500 dark:text-zinc-300 hover:dark:text-red-400"
                                  to={`/product-details/${hair.shortName}`}
                                >
                                  {hair.title}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {selectedCategory === "perfume" && (
                  <div className="p-5">
                    <div className="mb-4">
                      <Link
                        className="flex items-center gap-x-1 py-2 text-md text-rose-500 dark:text-red-400"
                        to="/allproducts"
                      >
                        <div className="flex items-center gap-4">
                          مشاهده همه
                          <FaAngleLeft />
                        </div>
                      </Link>
                    </div>
                    <div className="flex flex-grow flex-wrap gap-x-14 gap-y-8">
                      <div className="space-y-2">
                        <Link
                          className="flex items-center gap-x-2 text-zinc-700 hover:text-rose-500 dark:text-white hover:dark:text-red-400"
                          to="/allproducts"
                        >
                          <span className="h-5 w-0.5 rounded-full bg-rose-800 dark:bg-rose-800"></span>
                          <div className="flex items-center gap-4">
                            عطر و ادکلن مردانه
                            <FaAngleLeft />
                          </div>
                        </Link>
                        <ul>
                          {perfumeCategory
                            .filter((mens) => mens.subcategory === "عطر مردانه")
                            .map((perfume) => (
                              <li
                                key={perfume.id}
                                onClick={() => setMenuStatus(false)}
                              >
                                <Link
                                  className="block py-2 text-md text-zinc-600 hover:text-rose-500 dark:text-zinc-300 hover:dark:text-red-400"
                                  to={`/product-details/${perfume.shortName}`}
                                >
                                  {perfume.title}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <Link
                          className="flex items-center gap-x-2 text-zinc-700 hover:text-rose-500 dark:text-white hover:dark:text-red-400"
                          to="/allproducts"
                        >
                          <span className="h-5 w-0.5 rounded-full bg-rose-800 dark:bg-rose-800"></span>
                          <div className="flex items-center gap-4">
                            عطر و ادکلن زنانه
                            <FaAngleLeft />
                          </div>
                        </Link>
                        <ul>
                          {perfumeCategory
                            .filter(
                              (women) => women.subcategory === "عطر زنانه"
                            )
                            .map((perfume) => (
                              <li
                                key={perfume.id}
                                onClick={() => setMenuStatus(false)}
                              >
                                <Link
                                  className="block py-2 text-md text-zinc-600 hover:text-rose-500 dark:text-zinc-300 hover:dark:text-red-400"
                                  to={`/product-details/${perfume.shortName}`}
                                >
                                  {perfume.title}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black/40 dark:bg-zinc-900/40 backdrop-blur-md fixed inset-0 z-30"></div>
    </>
  );
};

export default MegaMenu;

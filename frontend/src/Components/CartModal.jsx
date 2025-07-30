import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Quantity from "./Quantity";

const CartModal = ({ setShowCartModal }) => {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);

  const closeMenu = () => {
    setIsMobileMenuShown(true);
  };

  return (
    <>
      {/* // Desktop Cart Modal */}
      <div className="z-40 absolute hidden top-20 -left-12 bottom-auto m-0 !ml-5 w-[400px] overflow-hidden rounded-lg border-t-2 border-t-emerald-500 bg-white dark:border-t-emerald-400 dark:bg-zinc-900 lg:block">
        <div className="flex items-center justify-between p-5 pb-2">
          <div className="text-xl text-zinc-600 dark:text-zinc-300">4 مورد</div>
          <Link
            className="flex items-center gap-x-1 text-xl text-rose-500 dark:text-red-400"
            to="/shopping-cart"
            onClick={() => setShowCartModal(false)}
          >
            <div>مشاهده سبد خرید</div>
            <div>
              <FaAngleLeft />
            </div>
          </Link>
        </div>
        <div className="h-60">
          <ul className="main-scroll h-full space-y-2 divide-y divide-gray-100 overflow-y-auto p-5 pl-2 dark:divide-white/5">
            <li>
              <div className="flex gap-x-2 py-5">
                <div className="relative min-w-fit">
                  <Link
                    to="product-details"
                    onClick={() => setShowCartModal(false)}
                  >
                    <img
                      alt=""
                      className="h-[120px] w-[120px]"
                      loading="lazy"
                      src="/images/p1.png"
                    />
                  </Link>
                  <button
                    className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-black"
                    type="button"
                  >
                    <div className="h-6 w-6 text-red-600 dark:text-red-500">
                      <AiOutlineClose onClick={() => setShowCartModal(false)} />
                    </div>
                  </button>
                </div>

                <div className="w-full space-y-1.5">
                  <Link
                    className="line-clamp-2 h-12 text-zinc-700 dark:text-white"
                    to="product-details"
                    onClick={() => setShowCartModal(false)}
                  >
                    تیشرت اسپورت مردانه
                  </Link>
                  <div className="flex items-center gap-x-2 text-xl text-zinc-500 dark:text-gray-300">
                    <div>تعداد : 2</div>
                    <div className="h-3 w-px rounded-full bg-gray-200 dark:bg-white/5"></div>
                    <div className="flex items-center gap-x-2">
                      <span className="h-4 w-4 rounded-full"></span>
                      <span> طوسی</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-x-2">
                    <div className="text-rose-500 dark:text-red-400 flex items-center gap-1">
                      <span className="text-lg font-bold">1,800,000</span>
                      <span className="text-xl">تومان</span>
                    </div>
                    <Quantity />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="flex gap-x-2 py-5">
                <div className="relative min-w-fit">
                  <Link
                    to="product-details"
                    onClick={() => setShowCartModal(false)}
                  >
                    <img
                      alt=""
                      className="h-[120px] w-[120px]"
                      loading="lazy"
                      src="/images/p2.png"
                    />
                  </Link>
                  <button
                    className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-black"
                    type="button"
                  >
                    <div className="h-6 w-6 text-red-600 dark:text-red-500">
                      <AiOutlineClose />
                    </div>
                  </button>
                </div>

                <div className="w-full space-y-1.5">
                  <Link
                    className="line-clamp-2 h-12 text-zinc-700 dark:text-white"
                    to="product-details"
                    onClick={() => setShowCartModal(false)}
                  >
                    کلاه اسپورت مردانه
                  </Link>
                  <div className="flex items-center gap-x-2 text-xl text-zinc-500 dark:text-gray-300">
                    <div>تعداد : 2</div>
                    <div className="h-3 w-px rounded-full bg-gray-200 dark:bg-white/5"></div>
                    <div className="flex items-center gap-x-2">
                      <span className="h-4 w-4 rounded-full"></span>
                      <span> طوسی</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-x-2">
                    <div className="text-rose-500 dark:text-red-400 flex items-center gap-1">
                      <span className="text-lg font-bold">1,800,000</span>
                      <span className="text-xl">تومان</span>
                    </div>
                    <Quantity />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-between border-t border-gray-100 p-5 dark:border-white/5">
          <div className="flex flex-col items-center gap-y-1">
            <div className="text-xl text-zinc-500 dark:text-zinc-400">
              مبلغ قابل پرداخت
            </div>

            <div className="text-zinc-600 dark:text-zinc-300 flex items-center gap-2">
              <span className="font-bold">1,200,000</span>
              <span className="text-xl">تومان</span>
            </div>
          </div>
          <Link to="">
            <button
              className="flex-grow bg-emerald-600 hover:bg-emerald-600/90 rounded-xl text-white cursor-pointer py-4 flex justify-center items-center w-32 text-xl"
              type="button"
            >
              ثبت سفارش
            </button>
          </Link>
        </div>
      </div>
      {/* // Mobile Cart Modal Drawer */}
      <div className="fixed left-0 top-0 z-40 block lg:hidden h-full w-[320px] bg-white transition-transform duration-300 dark:bg-zinc-900 ">
        {/* Drawer header */}
        <div className="flex items-center justify-between gap-x-4 border-b border-gray-100 p-4 pb-5 dark:border-white/5">
          <button
            className="inline-flex items-center rounded-lg bg-transparent p-1.5 text-xl text-zinc-600 hover:bg-zinc-100 hover:text-gray-900 dark:text-zinc-300 dark:hover:bg-black dark:hover:text-white"
            type="button"
          >
            <AiOutlineClose
              className="h-8 w-8"
              onClick={() => {
                closeMenu();
                setShowCartModal(false);
              }}
            />
            <span className="sr-only">Close menu</span>
          </button>

          <h5 className="text-lg text-zinc-600 dark:text-zinc-300">
            سبد خرید <span className="text-xl">( 4 )</span>
          </h5>
        </div>

        {/* Products list */}
        <div className="h-full pb-[150px]">
          <ul className="h-full space-y-2 divide-y divide-gray-100 overflow-y-auto p-4 dark:divide-white/5">
            {/* Product */}
            <li>
              <div className="flex gap-x-2 py-5">
                <div className="relative min-w-fit">
                  <Link
                    to="product-details"
                    onClick={() => setShowCartModal(false)}
                  >
                    <img alt="" className="h-20 w-20" src="/images/p1.png" />
                  </Link>

                  <button className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-black">
                    <AiOutlineClose className="h-6 w-6 text-red-600 dark:text-red-500" />
                  </button>
                </div>

                <div className="w-full space-y-1.5">
                  <Link
                    className="line-clamp-2 h-10 text-xl text-zinc-700 dark:text-white"
                    to="product-details"
                    onClick={() => setShowCartModal(false)}
                  >
                    تیشرت اسپورت مردانه
                  </Link>

                  <div className="flex items-center gap-x-2 text-xs text-zinc-500 dark:text-gray-300">
                    <div>تعداد : 2</div>
                    <div className="h-3 w-px rounded-full bg-gray-200 dark:bg-white/5" />
                    <div className="flex items-center gap-x-2">
                      <span
                        className="h-4 w-4 rounded-full"
                        style={{ background: "rgb(128, 128, 128)" }}
                      />
                      <span> طوسی</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-x-2">
                    <div className="text-rose-500 dark:text-red-400">
                      <span className="font-bold">1,800,000</span>
                      <span className="text-xs">تومان</span>
                    </div>

                    <Quantity />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="flex gap-x-2 py-5">
                <div className="relative min-w-fit">
                  <Link
                    to="product-details"
                    onClick={() => setShowCartModal(false)}
                  >
                    <img alt="" className="h-20 w-20" src="/images/p1.png" />
                  </Link>

                  <button className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-black">
                    <AiOutlineClose className="h-6 w-6 text-red-600 dark:text-red-500" />
                  </button>
                </div>

                <div className="w-full space-y-1.5">
                  <Link
                    className="line-clamp-2 h-10 text-xl text-zinc-700 dark:text-white"
                    to="product-details"
                    onClick={() => setShowCartModal(false)}
                  >
                    تیشرت اسپورت مردانه
                  </Link>

                  <div className="flex items-center gap-x-2 text-xs text-zinc-500 dark:text-gray-300">
                    <div>تعداد : 2</div>
                    <div className="h-3 w-px rounded-full bg-gray-200 dark:bg-white/5" />
                    <div className="flex items-center gap-x-2">
                      <span
                        className="h-4 w-4 rounded-full"
                        style={{ background: "rgb(128, 128, 128)" }}
                      />
                      <span> طوسی</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-x-2">
                    <div className="text-rose-500 dark:text-red-400">
                      <span className="font-bold">1,800,000</span>
                      <span className="text-xs">تومان</span>
                    </div>

                    <Quantity />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="flex gap-x-2 py-5">
                <div className="relative min-w-fit">
                  <Link
                    to="product-details"
                    onClick={() => setShowCartModal(false)}
                  >
                    <img alt="" className="h-20 w-20" src="/images/p1.png" />
                  </Link>

                  <button className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-black">
                    <AiOutlineClose className="h-6 w-6 text-red-600 dark:text-red-500" />
                  </button>
                </div>

                <div className="w-full space-y-1.5">
                  <Link
                    className="line-clamp-2 h-10 text-xl text-zinc-700 dark:text-white"
                    to="product-details"
                    onClick={() => setShowCartModal(false)}
                  >
                    تیشرت اسپورت مردانه
                  </Link>

                  <div className="flex items-center gap-x-2 text-xs text-zinc-500 dark:text-gray-300">
                    <div>تعداد : 2</div>
                    <div className="h-3 w-px rounded-full bg-gray-200 dark:bg-white/5" />
                    <div className="flex items-center gap-x-2">
                      <span
                        className="h-4 w-4 rounded-full"
                        style={{ background: "rgb(128, 128, 128)" }}
                      />
                      <span> طوسی</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-x-2">
                    <div className="text-rose-500 dark:text-red-400">
                      <span className="font-bold">1,800,000</span>
                      <span className="text-xs">تومان</span>
                    </div>

                    <Quantity />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="flex gap-x-2 py-5">
                <div className="relative min-w-fit">
                  <Link
                    to="product-details"
                    onClick={() => setShowCartModal(false)}
                  >
                    <img alt="" className="h-20 w-20" src="/images/p1.png" />
                  </Link>

                  <button className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-black">
                    <AiOutlineClose className="h-6 w-6 text-red-600 dark:text-red-500" />
                  </button>
                </div>

                <div className="w-full space-y-1.5">
                  <Link
                    className="line-clamp-2 h-10 text-xl text-zinc-700 dark:text-white"
                    to="product-details"
                    onClick={() => setShowCartModal(false)}
                  >
                    تیشرت اسپورت مردانه
                  </Link>

                  <div className="flex items-center gap-x-2 text-xs text-zinc-500 dark:text-gray-300">
                    <div>تعداد : 2</div>
                    <div className="h-3 w-px rounded-full bg-gray-200 dark:bg-white/5" />
                    <div className="flex items-center gap-x-2">
                      <span
                        className="h-4 w-4 rounded-full"
                        style={{ background: "rgb(128, 128, 128)" }}
                      />
                      <span> طوسی</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-x-2">
                    <div className="text-rose-500 dark:text-red-400">
                      <span className="font-bold">1,800,000</span>
                      <span className="text-xs">تومان</span>
                    </div>

                    <Quantity />
                  </div>
                </div>
              </div>
            </li>

            {/* More products... */}
          </ul>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 left-0 right-0 flex items-center justify-between border-t border-gray-100 p-4 px-6 py-4 dark:border-white/5">
          <div className="flex flex-col items-center gap-y-1">
            <div className="text-xl text-zinc-500 dark:text-zinc-400">
              مبلغ قابل پرداخت
            </div>
            <div className="text-zinc-600 dark:text-zinc-300">
              <span className="font-bold">1,200,000</span>
              <span className="text-xl">تومان</span>
            </div>
          </div>

          <Link
            className="bg-emerald-600 hover:bg-emerald-600/90 rounded-xl text-white cursor-pointer py-4 flex justify-center items-center w-48 text-xl"
            to=""
          >
            مشاهده سبد خرید
          </Link>
        </div>
      </div>
      <div className="bg-black/40 dark:bg-zinc-900/40 backdrop-blur-md fixed inset-0 z-30"></div>
    </>
  );
};

export default CartModal;

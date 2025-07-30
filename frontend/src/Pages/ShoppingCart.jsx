import React, { useContext, useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaTruckArrowRight } from "react-icons/fa6";
import { MdPayment } from "react-icons/md";
import { BiTrash } from "react-icons/bi";
import ShoppingCartItem from "../Components/ShoppingCartItem";
import toPersianNumber from "../toPersianNumber";
import { Link } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

const ShoppingCart = () => {
  const [userCart, setUserCart] = useState([]);
  const { user } = useAuth();
  console.log(userCart);

  const totalPrice = userCart.reduce((acc, product) => {
    return acc + product.productData.price;
  }, 0);
  const totalDiscount = userCart.reduce((acc, product) => {
    const discountedPrice =
      product.productData.price * (1 - product.productData.discount / 100);
    return acc + discountedPrice;
  }, 0);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:3000/cart?userId=${user.id}`)
        .then((res) => res.json())
        .then((data) => setUserCart(data));
    }
  }, [user]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {userCart && (
        <div className="px-8 sm:container text-slate-600 dark:text-slate-300 grid grid-cols-12 gap-4 overflow-hidden  mb-16">
          <div className="col-span-12 rounded-xl bg-white dark:bg-zinc-900 mt-12">
            <ul className="grid grid-cols-1 sm:grid-cols-3 overflow-hidden rounded-xl">
              <li className="flex flex-col items-center justify-center gap-2 p-8 bg-rose-800/10 dark:bg-rose-700/10 text-rose-500 ">
                {" "}
                <AiOutlineShoppingCart className="text-4xl" />
                سبد خرید
              </li>
              <li className="flex flex-col items-center justify-center gap-2 p-8 text-rose-500 opacity-50">
                {" "}
                <FaTruckArrowRight className="text-4xl" />
                شیوه ارسال
              </li>
              <li className="flex flex-col items-center justify-center gap-2 p-8 text-rose-500 opacity-50">
                {" "}
                <MdPayment className="text-4xl" />
                پرداخت
              </li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-8 rounded-xl bg-white dark:bg-zinc-900 p-8">
            <div className="flex flex-wrap gap-4 justify-center xs:justify-between items-center">
              <div className="flex items-center gap-4">
                <h1 className="text-3xl dark:text-white">سبد خرید</h1>
                <p className="text-xl text-slate-400"></p>
              </div>
              <div className="flex items-center gap-2 text-3xl text-red-400 cursor-pointer">
                <BiTrash />
                حذف همه
              </div>
            </div>

            <ul className="divide-y divide-slate-300 dark:divide-slate-800">
              {userCart.map((item) => (
                <ShoppingCartItem key={item.id} {...item} />
              ))}
            </ul>
          </div>
          <div className="col-span-12 md:col-span-4 rounded-xl bg-white dark:bg-zinc-900 p-8">
            {/* // desktop  */}
            <div className="hidden md:block">
              <div className="space-y-8 divide-y divide-gray-100 dark:divide-white/5">
                <div className="flex items-center gap-x-2 py-6 justify-between">
                  <div className="text-2xl">قیمت کالاها</div>
                  <div className="text-2xl flex items-center gap-2 text-red-400">
                    <span>{toPersianNumber(totalPrice)}</span>
                    <span>تومان</span>
                  </div>
                </div>
                <div className="flex items-center gap-x-2 py-6 justify-between">
                  <div className="">قیمت با احتساب تخفیف</div>
                  <div className="flex items-center gap-2 text-red-400">
                    <span className="font-bold">
                      {toPersianNumber(totalDiscount)}
                    </span>
                    <span>تومان</span>
                  </div>
                </div>
                <div className="flex items-center gap-x-2 py-6 justify-between">
                  <div className="">مبلغ قابل پرداخت</div>
                  <div className="flex items-center gap-2 text-red-400">
                    <span>{toPersianNumber(totalDiscount)}</span>
                    <span>تومان</span>
                  </div>
                </div>
                <div className="flex-grow bg-emerald-600 hover:bg-emerald-600/90 rounded-xl text-white cursor-pointer py-4 flex justify-center items-center">
                  <Link className="hover:text-white">ادامه فرایند خرید</Link>
                </div>
              </div>
            </div>
            {/* // Mobile  */}
            <div className="fixed z-50 inset-x-0 bottom-0 flex items-center gap-x-6 rounded-t-2xl bg-white p-4 dark:bg-zinc-900 md:hidden">
              <Link className="flex-grow bg-emerald-600 hover:bg-emerald-600/90 rounded-xl text-white cursor-pointer py-4 flex justify-center items-center">
                ادامه فرایند خرید
              </Link>
              <div className="flex flex-col items-center gap-y-1">
                <div className="text-xl">مبلغ قابل پرداخت</div>
                <div className="">
                  <span className="font-bold">{toPersianNumber(1200000)}</span>
                  <span>تومان</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShoppingCart;

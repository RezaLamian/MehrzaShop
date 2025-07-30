import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import toPersianNumber from "../toPersianNumber";
import Quantity from "./Quantity";

const ShoppingCartItem = (props) => {
  const [shoppingCartCounter, setShoppingCartCounter] = useState(1);

  return (
    <div className="py-4 sm:py-6 mt-8 md:mt-2">
      <div className="grid grid-cols-2 items-center justify-start gap-2 xs:grid-cols-3 xs:gap-6 sm:grid-cols-4 xl:grid-cols-6">
        <div className="relative row-span-2 min-w-fit xs:mx-auto">
          <Link to="product-details">
            <img
              src={props.productData.cover}
              className="w-25 rounded-lg sm:w-28"
              alt=""
            />
          </Link>
          <button className="absolute top-0 sm:-top-3 sm:-right-10 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-black">
            <AiOutlineClose className="text-3xl h-8 w-8 text-red-600 dark:text-red-500" />
          </button>
        </div>
        <div className="row-span-2 space-y-4 xs:col-span-2 sm:col-span-3 xl:col-span-5">
          <Link
            to="product-details"
            className="dark:text-white line-clamp-2 text-3xl font-bold"
          >
            {props.productData.title}
          </Link>
          <div className="flex items-center gap-2">
            <span>رنگ ها:</span>{" "}
            {props.productData?.colors?.map((color) => (
              <span className="text-lg xs:text-2xl">{color}</span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-x-2 xs:justify-center mt-4 md:mt-0">
          <Quantity
            counter={shoppingCartCounter}
            setCounter={setShoppingCartCounter}
          />
        </div>
        <div className="text-rose-500 dark:text-red-400 xs:col-span-2 sm:col-span-3 lg:text:xl xl:col-span-5 mt-4 md:mt-0 mr-8 lg:mr-0">
          <span className="font-bold ml-2">
            {" "}
            {props.productData.discount
              ? toPersianNumber(
                  props.productData.price * shoppingCartCounter -
                    (props.productData.price * props.productData.discount) / 100
                )
              : toPersianNumber(props.productData.price * shoppingCartCounter)}
          </span>
          <span>تومان</span>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartItem;

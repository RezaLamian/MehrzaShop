import React, { useRef, useState } from "react";
import toPersianNumber from "../toPersianNumber";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const ref = useRef();
  const [hoverPos, setHoverPos] = useState(null);

  const handleMouseMove = (e) => {
    setHoverPos({ x: e.clientX, y: e.clientY });
  };

  const getHoverBorderClasses = (hoverPosition) => {
    const classes = [];
    if (hoverPosition) {
      const { x, y } = hoverPosition;
      const { left, bottom, right, top } = ref.current.getBoundingClientRect();
      const xMid = (left + right) / 2;
      const yMid = (top + bottom) / 2;

      const isCenter =
        hoverPosition.x > xMid - 50 &&
        hoverPosition.x < xMid + 50 &&
        hoverPosition.y > yMid - 50 &&
        hoverPosition.y < yMid + 50;

      if (isCenter) {
        classes.push("border-4 border-s-red-700");
      } else {
        if (x - left < 80) classes.push("border-l-4  border-s-red-700");
        if (right - x < 80) classes.push("border-r-4  border-s-red-700");
        if (y - top < 80) classes.push("border-t-4  border-s-red-700");
        if (bottom - y < 80) classes.push("border-b-4  border-s-red-700");
      }
    }
    return classes.join("");
  };

  return (
    <Link to={`/product-details/${props.shortName}`}>
      <div
        ref={ref}
        className={`flex flex-col flex-1 gap-8 bg-white dark:bg-zinc-900 relative rounded-2xl p-8 shadow-lg transition-all duration-100 ease-in-out ${getHoverBorderClasses(
          hoverPos
        )}`}
        onMouseMove={handleMouseMove}
        onMouseOut={() => setHoverPos(null)}
      >
        <div className="w-full h-64">
          <img src={props.cover} className="w-full h-full rounded-xl" alt="" />
        </div>
        <h2 className="truncate text-3xl text-slate-500 dark:text-slate-300">
          {props.title}
        </h2>
        <div className="flex justify-between items-center">
          {props.discount ? (
            <div className="bg-red-500 rounded-[40%] text-white p-2 text-[12px] font-bold">
              {toPersianNumber(props.discount)}%
            </div>
          ) : (
            <span className="bg-slate-300 py-2 w-30 text-lg font-bold text-center px-4 rounded-lg text-rose-500 hover:text-rose-500">
              بدون تخفیف
            </span>
          )}
          <div className="">
            <h2 className="line-through decoration-red-600 text-slate-500 dark:text-slate-300 h-4 text-end">
              {toPersianNumber(props.price)}
            </h2>
            <h2 className="text-2xl font-bold text-red-600 mt-4">
              {toPersianNumber(
                props.price - (props.price * props.discount) / 100
              )}
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

import React from "react";

const RoundedProductCard = (props) => {
  return (
    <div className="flex flex-col items-center gap-8">
      <img
        src={props.cover}
        className="rounded-[50%] w-40 h-40 cursor-pointer hover:border-2 border-s-red-700 transition-all duration-100 ease-in-out"
        alt=""
      />
      <h3 className="text-2xl font-bold text-slate-500 dark:text-slate-300">
        {props.title}
      </h3>
    </div>
  );
};

export default RoundedProductCard;

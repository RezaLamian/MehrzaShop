import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Quantity = ({ counter, setCounter }) => {
  return (
    <div className="flex items-center gap-8 border border-slate-600 rounded-2xl p-2 sm:py-4 sm:px-6">
      <div className="">
        <AiOutlinePlus
          className="text-4xl font-bold text-red-400 cursor-pointer"
          onClick={() => setCounter((prevCount) => prevCount + 1)}
        />
      </div>
      <div className="text-slate-600 dark:text-slate-300">{counter}</div>
      <div className="">
        <AiOutlineMinus
          className="text-4xl font-bold text-red-500 cursor-pointer"
          onClick={() =>
            setCounter((prevCount) => {
              if (prevCount > 1) {
                return prevCount - 1;
              }
              return prevCount;
            })
          }
        />
      </div>
    </div>
  );
};

export default Quantity;

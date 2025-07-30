import React from "react";
import toPersianNumber from "../toPersianNumber";
import { Link } from "react-router-dom";

const ArticleBox = (props) => {
  return (
    <Link to={`/article-details/${props.shortName}`}>
      <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg p-4 flex flex-col gap-8 cursor-pointer">
        <div className="">
          <img
            src={props.cover}
            className="rounded-2xl w-full h-72 !rounded-bl-[15%]"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-8">
          <h3 className="truncate text-2xl font-bold text-slate-500 dark:text-slate-300">
            {props.title}
          </h3>
          <h3 className="text-end text-xl font-bold text-red-400">
            {props.createdAt}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default ArticleBox;

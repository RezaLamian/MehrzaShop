import React from "react";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";

const getRoute = (btn) => {
  switch (btn) {
    case "allproducts":
      return "allproducts";
    case "allarticles":
      return "allarticles";

    default:
      return null; // Return a default route or handle the case where btn doesn't match any of the cases.
  }
};

const SectionHeader = ({ title, btn }) => {
  return (
    <div className="my-20 flex flex-col sm:flex-row gap-6 sm:gap-0 justify-center sm:justify-between items-center">
      <h1 className="text-3xl font-extrabold text-slate-600 dark:text-slate-300 select-none">
        {title}
      </h1>
      <div className="flex items-center gap-4 select-none">
        <Link className="text-red-400 text-3xl" to={getRoute(btn)}>
          مشاهده همه
        </Link>
        <FaAngleLeft className="text-red-400 text-3xl font-bold" />
      </div>
    </div>
  );
};

export default SectionHeader;

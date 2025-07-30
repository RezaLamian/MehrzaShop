import React, { useEffect, useState } from "react";
import Topbar from "./Topbar";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="bg-white shadow-lg sticky top-0 left-0 right-0 z-50 dark:bg-zinc-900 dark:border-b-2 dark:border-slate-300">
      <Topbar />
      <Navbar />
    </div>
  );
};

export default Header;

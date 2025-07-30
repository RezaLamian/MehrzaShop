import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../../Components/DashboardSidebar";

const Index = () => {
  return (
    <div className="flex flex-wrap gap-6 px-8 mb-16 sm:container">
      <DashboardSidebar />
      <Outlet />
    </div>
  );
};

export default Index;

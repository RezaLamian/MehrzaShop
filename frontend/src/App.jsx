import React, { useContext, useEffect, useState } from "react";

import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./CustomScrollBar.css";
import { AuthProvider } from "./Contexts/AuthContext";

const App = () => {
  const router = useRoutes(routes);

  return (
    <AuthProvider>
      <div className="custom-scrollbar bg-gray-100 dark:bg-black">
        <Header />
        {router}
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default App;

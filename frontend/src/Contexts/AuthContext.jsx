import React, { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Initial state
  const [user, setUser] = useState(() => {
    // Get from localStorage
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      return JSON.parse(storedUser);
    }

    return {
      name: "",
      username: "",
      email: "",
      phone: "",
      token: localStorage.getItem("token") || null,
    };
  });

  const updateUser = (updatedUser) => {
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
  };

  const logout = () => {
    localStorage.removeItem("user");

    setUser({
      id: null,
      name: "",
      username: "",
      email: "",
      phone: "",
      token: null,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        updateUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

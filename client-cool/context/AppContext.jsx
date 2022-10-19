import React from "react";
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const value = {
    user,
    setUser,
    token,
    setToken,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

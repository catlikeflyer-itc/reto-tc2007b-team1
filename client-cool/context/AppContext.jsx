import React from "react";
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const userSetter = (name, email, password) => {
    setUser({
      name: name,
      email: email,
      password: password,
      pos: "Admini",
      id: 10,
    });
    console.log("Set user");
  };

  const value = {
    user,
    setUser,
    token,
    setToken,
    userSetter,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

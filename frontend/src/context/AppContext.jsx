// src/context/AppContext.js
import { createContext } from "react";
import { doctors } from "../assets/data/assets";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const value = { doctors }; // Provide the doctors data to the context

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

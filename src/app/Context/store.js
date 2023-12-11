"use client";
import { createContext, useState, useContext, useEffect } from "react";

import OneBack from '../../assets/oneBack.jpg'

const GlobalContext = createContext(
    
);

export const GlobalContextProvider = ({ children }) => {
  const [displayImage, setDisplayImage] = useState("");
  return (
    <GlobalContext.Provider value={{ displayImage, setDisplayImage }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default function useGlobalContext(){
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalContextProvider");
  }
  return context;
};

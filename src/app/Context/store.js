"use client";
import { createContext, useState, useContext, useEffect } from "react";
import { SessionProvider } from 'next-auth/react'
import { Provider } from "react-redux";
import store from '../../redux/store'

const GlobalContext = createContext(
    
);

export const GlobalContextProvider = ({ children }) => {
  const [displayImage, setDisplayImage] = useState("");
  return (
    <GlobalContext.Provider value={{ displayImage, setDisplayImage }}>
       <Provider store={store}><SessionProvider> {children}
   
</SessionProvider></Provider>
      
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

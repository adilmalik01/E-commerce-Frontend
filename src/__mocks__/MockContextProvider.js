// src/__mocks__/MockContextProvider.js
import React from "react";
import { GlobalContext } from "../context/context";

export const MockContextProvider = ({ children, state, dispatch }) => {
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

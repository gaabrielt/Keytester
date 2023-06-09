import React from "react";
import InputHistoryProvider from "../InputHistoryContext";

const GlobalProvider: React.FC = ({ children }) => {
  return <InputHistoryProvider>{children}</InputHistoryProvider>;
};

export default GlobalProvider;

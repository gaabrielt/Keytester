import React from "react";
import GlobalProvider from "../../contexts/GlobalContext";

const Benchmark: React.FC = () => {
  return (
    <GlobalProvider>
      <div className="benchmark" />
    </GlobalProvider>
  );
};

export default Benchmark;

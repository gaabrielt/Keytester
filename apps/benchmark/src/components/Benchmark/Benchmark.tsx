import React from "react";
import "./Benchmark.css";

import GlobalProvider from "../../contexts/GlobalContext";
import InputHistory from "../InputHistory";

const Benchmark: React.FC = () => {
  return (
    <GlobalProvider>
      <div className="benchmark">
        <InputHistory />
      </div>
    </GlobalProvider>
  );
};

export default Benchmark;

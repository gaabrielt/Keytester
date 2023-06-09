import React from "react";

import "./App.css";
import Keyboard from "../Keyboard";
import Benchmark from "../Benchmark";

const App = () => {
  return (
    <div className="container">
      <Keyboard />
      <Benchmark />
    </div>
  );
};

export default App;

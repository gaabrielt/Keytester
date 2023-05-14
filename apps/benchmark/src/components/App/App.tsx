import React from "react";

import './App.css'
import Keyboard from "../Keyboard";

const App = () => {
  return (
    <div className="container">
      <div>Name: benchmark</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Empty CSS</div>
      <Keyboard />
    </div>
  )
};

export default App

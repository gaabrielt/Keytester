import React, { useRef, useEffect } from "react";
import "./Keyboard.css";

import { mount } from "keyboard/Keyboard";

const Keyboard = () => {
  const keyboardRef = useRef(null);

  const mountKeyboardApp = () => mount(keyboardRef.current);

  useEffect(mountKeyboardApp, []);

  return <div id="keyboard" ref={keyboardRef} />;
};

export default Keyboard;

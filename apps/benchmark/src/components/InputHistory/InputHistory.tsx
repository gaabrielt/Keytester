import React, { useContext } from "react";
import "./InputHistory.css";

import { InputHistoryContext } from "../../contexts/InputHistoryContext";
import KeyTile from "../KeyTile";

const InputHistory = () => {
  const { list } = useContext(InputHistoryContext);

  return (
    <aside className="inputHistory">
      {list.map((userInput, index) => (
        <KeyTile
          location={userInput.location}
          isAltPressed={userInput.altKey}
          isCtrlPressed={userInput.ctrlKey}
          isMetaPressed={userInput.metaKey}
          isShiftPressed={userInput.shiftKey}
          key={`${userInput.code}-${index}`}
        >
          {userInput.key}
        </KeyTile>
      ))}
    </aside>
  );
};

export default InputHistory;

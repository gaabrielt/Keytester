import React, { useContext } from "react";

import { InputHistoryContext } from "../../contexts/InputHistoryContext";

const InputHistory = () => {
  const { list } = useContext(InputHistoryContext);

  return (
    <aside className="inputHistory">
      {list.map((userInput, index) => (
        <pre key={`${userInput.code}-${index}`}>
          {JSON.stringify(userInput, null, 2)}
        </pre>
      ))}
    </aside>
  );
};

export default InputHistory;

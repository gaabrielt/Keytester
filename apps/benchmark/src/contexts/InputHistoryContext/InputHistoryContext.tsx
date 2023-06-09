import React, { createContext, useState, useEffect } from "react";
import { InputHistory, UserInput } from ".";
import { useInputListener } from "../../hooks";

const INITIAL_VALUE = {
  list: [],
};

const InputHistoryContext = createContext<InputHistory>(INITIAL_VALUE);

const InputHistoryProvider: React.FC = ({ children }) => {
  const [list, setList] = useState<UserInput[]>([]);

  const userInput = useInputListener();

  const inputHistory = {
    list,
    firstPressed: list[0],
    lastPressed: userInput,
  };

  const handleUserInput = () => {
    if (userInput) {
      setList([...list, userInput]);
    }
  };

  useEffect(handleUserInput, [userInput]);

  return (
    <InputHistoryContext.Provider value={inputHistory}>
      {children}
    </InputHistoryContext.Provider>
  );
};

export default InputHistoryProvider;

export { InputHistoryContext };

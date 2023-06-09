import { useEffect, useState } from "react";

const useInputListener = () => {
  const [userInput, setUserInput] = useState();

  // TODO: Incorporar tipagem do evento nas declarações globais do projeto
  const handleMessage = (event: MessageEvent) => {
    const message = event.data;

    // TODO: Criar constantes globais do projeto
    if (message.type === "userInput") setUserInput(message.input);
  };

  const initMessageListener = () => {
    window.addEventListener("message", handleMessage);

    return () => window.removeEventListener("message", handleMessage);
  };

  useEffect(initMessageListener, []);

  return userInput;
};

export default useInputListener;

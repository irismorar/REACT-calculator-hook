import { useCallback, useState } from "react";
import { evaluate } from "mathjs";

export function useCalculator() {
  const [userInput, setUserInput] = useState("");

  const equal = useCallback(() => {
    setUserInput((prevState) => {
      return prevState;
    });
  }, []);

  const deleteLastSymbol = useCallback(() => {
    setUserInput((prevState) => {
      const len = prevState.length;
      return prevState.slice(0, len - 1);
    });
  }, []);

  const resetUserInput = useCallback(() => {
    setUserInput("");
  }, []);

  const setSymbol = useCallback((symbol) => {
    console.log(symbol);
    setUserInput((prevState) => {
      return prevState.concat(symbol);
    });
  }, []);

  const setZeroes = useCallback(() => {
    setUserInput((prevState) => {
      return prevState.concat("00");
    });
  }, []);

  const evaluateInput = useCallback((userInput) => {
    return evaluate(userInput);
  }, []);

  return {
    equal,
    deleteLastSymbol,
    resetUserInput,
    setSymbol,
    setZeroes,
    evaluateInput,
    userInput,
  };
}

import { useCallback, useState } from "react";
import { atanhDependencies, evaluate } from "mathjs";

export function useCalculator() {
  const [userInput, setUserInput] = useState("");

  // try {
  //   console.log(evaluate(userInput));
  // } catch (error) {}

  console.log(userInput);

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

  const pushToUserInput = useCallback((additionalSymbols) => {
    const mathematicalOperators = ["+", "-", "/", "%", "*", ".", "0", "0."];
    const operatorsException = ["+", "/", "%", "*"];
    console.log(additionalSymbols);
    setUserInput((prevState) => {
      const lastChar = prevState[prevState.length - 1];
      const isLastOp = mathematicalOperators.includes(lastChar);
      const isNewOp = mathematicalOperators.includes(additionalSymbols);

      if (isLastOp && isNewOp) {
        return prevState;
      }

      if (
        prevState.length === 0 &&
        operatorsException.includes(additionalSymbols)
      ) {
        return prevState;
      }

      if (
        prevState.includes(".") &&
        additionalSymbols === "." &&
        !prevState.includes(mathematicalOperators)
      ) {
        return prevState;
      }

      if (prevState.length === 0 && additionalSymbols === ".") {
        return "0.";
      }

      if (prevState.length === 0 && additionalSymbols === "00") {
        return "0";
      }

      return prevState.concat(additionalSymbols);
    });
  }, []);

  return {
    equal,
    deleteLastSymbol,
    resetUserInput,
    pushToUserInput,
    userInput,
  };
}

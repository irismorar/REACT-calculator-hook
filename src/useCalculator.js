import { useCallback, useState } from "react";
import { evaluate } from "mathjs";

export function useCalculator() {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState("");

  console.log(userInput);

  const equal = () => {
    try {
      const value = evaluate(userInput);
      setUserInput(String(value));
      setResult(value);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteLastSymbol = useCallback(() => {
    setUserInput((prevState) => {
      const len = prevState.length;
      setResult(prevState.slice(0, len - 1));
      return prevState.slice(0, len - 1);
    });
  }, []);

  const resetUserInput = useCallback(() => {
    setResult("");
    setUserInput("");
  }, []);

  const pushToUserInput = useCallback((additionalSymbol) => {
    setUserInput((prevState) => {
      console.log(additionalSymbol);
      //-------------when the user first type ["*", "+", "/", "-", "%", "0", "00", "."]------------------------------
      if (
        prevState.length === 0 &&
        ["*", "+", "/"].includes(additionalSymbol)
      ) {
        setResult("");
        return "";
      }
      if (prevState.length === 0 && ["-", "%"].includes(additionalSymbol)) {
        setResult("");
        return prevState.concat(additionalSymbol);
      }
      if (
        prevState.length === 0 &&
        ["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(additionalSymbol)
      ) {
        setResult("");
        return prevState.concat(additionalSymbol);
      }
      if (prevState.length === 0 && ["0", "00"].includes(additionalSymbol)) {
        setResult("");
        return "0";
      }
      if (prevState.length === 0 && additionalSymbol === ".") {
        setResult("");
        return "0.";
      }

      //-------------When the user equation starts with 0 or digit followed by:------------------------------
      if (
        (prevState.startsWith("0") ||
          prevState.startsWith("0.") ||
          ["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(
            prevState[0]
          )) &&
        ["+", "-", "*", "/"].includes(additionalSymbol)
      ) {
        setResult("");
        return prevState.concat(additionalSymbol);
      }
      if (
        (prevState.startsWith("0") ||
          prevState.startsWith("0.") ||
          [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "1.",
            "2.",
            "3.",
            "4.",
            "5.",
            "6.",
            "7.",
            "8.",
            "9.",
          ].includes(prevState)) &&
        additionalSymbol === "%"
      ) {
        try {
          setResult(evaluate(prevState.concat(additionalSymbol)));
          return String(prevState.concat(additionalSymbol));
        } catch (error) {
          console.error(error);
        }
      }

      return prevState.concat(additionalSymbol);
    });
  }, []);

  // const pushToUserInput = useCallback((additionalSymbols) => {
  //   const mathematicalOperators = ["+", "-", "/", "%", "*", ".", "0", "0."];
  //   const operatorsException = ["+", "/", "%", "*"];
  //   console.log(additionalSymbols);
  //   setUserInput((prevState) => {
  //     const lastChar = prevState[prevState.length - 1];
  //     const isLastOp = mathematicalOperators.includes(lastChar);
  //     const isNewOp = mathematicalOperators.includes(additionalSymbols);

  //     if (isLastOp && isNewOp) {
  //       return prevState;
  //     }

  //     if (
  //       prevState.length === 0 &&
  //       operatorsException.includes(additionalSymbols)
  //     ) {
  //       return prevState;
  //     }

  //     if (
  //       prevState.includes(".") &&
  //       additionalSymbols === "." &&
  //       !prevState.includes(mathematicalOperators)
  //     ) {
  //       return prevState;
  //     }

  //     if (prevState.length === 0 && additionalSymbols === ".") {
  //       return "0.";
  //     }

  //     if (prevState.length === 0 && additionalSymbols === "00") {
  //       return "0";
  //     }

  //     return prevState.concat(additionalSymbols);
  //   });
  // }, []);

  return {
    equal,
    deleteLastSymbol,
    resetUserInput,
    pushToUserInput,
    userInput,
    result,
  };
}

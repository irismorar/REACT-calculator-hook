import "./App.css";
import { useCalculator } from "./useCalculator";

export default function App() {
  const {
    equal,
    deleteLastSymbol,
    resetUserInput,
    pushToUserInput,
    userInput,
    result,
  } = useCalculator();

  return (
    <main>
      <h1>Calculator</h1>

      <section>
        <div className="display-container">
          <div className="display">
            {userInput}
            <span className="cursor"></span>
          </div>
          <div className="result">{result}</div>
        </div>
        <div className="buttons-container">
          <button data-variant="operation" onClick={resetUserInput}>
            AC
          </button>
          <button
            data-variant="operation"
            onClick={() => {
              pushToUserInput("%");
            }}
          >
            %
          </button>
          <button data-variant="operation" onClick={deleteLastSymbol}>
            ⌫
          </button>
          <button
            data-variant="operation"
            onClick={() => {
              pushToUserInput("/");
            }}
          >
            ÷
          </button>
          <button
            data-variant="digit"
            onClick={() => {
              pushToUserInput("7");
            }}
          >
            7
          </button>
          <button
            data-variant="digit"
            onClick={() => {
              pushToUserInput("8");
            }}
          >
            8
          </button>
          <button
            data-variant="digit"
            onClick={() => {
              pushToUserInput("9");
            }}
          >
            9
          </button>
          <button
            data-variant="operation"
            onClick={() => {
              pushToUserInput("*");
            }}
          >
            ×
          </button>
          <button
            data-variant="digit"
            onClick={() => {
              pushToUserInput("4");
            }}
          >
            4
          </button>
          <button
            data-variant="digit"
            onClick={() => {
              pushToUserInput("5");
            }}
          >
            5
          </button>
          <button
            data-variant="digit"
            onClick={() => {
              pushToUserInput("6");
            }}
          >
            6
          </button>
          <button
            data-variant="operation"
            onClick={() => {
              pushToUserInput("-");
            }}
          >
            −
          </button>
          <button
            data-variant="digit"
            onClick={() => {
              pushToUserInput("1");
            }}
          >
            1
          </button>
          <button
            data-variant="digit"
            onClick={() => {
              pushToUserInput("2");
            }}
          >
            2
          </button>
          <button
            data-variant="digit"
            onClick={() => {
              pushToUserInput("3");
            }}
          >
            3
          </button>
          <button
            data-variant="operation"
            onClick={() => {
              pushToUserInput("+");
            }}
          >
            +
          </button>
          <button
            data-variant="digit"
            onClick={() => {
              pushToUserInput("00");
            }}
          >
            00
          </button>
          <button
            data-variant="digit"
            onClick={() => {
              pushToUserInput("0");
            }}
          >
            0
          </button>
          <button
            data-variant="digit"
            onClick={() => {
              pushToUserInput(".");
            }}
          >
            .
          </button>
          <button data-variant="destructive" onClick={equal}>
            =
          </button>
        </div>
      </section>
    </main>
  );
}

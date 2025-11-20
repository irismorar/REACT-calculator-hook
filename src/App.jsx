import "./App.css";
import { useCalculator } from "./useCalculator";

export default function App() {
  const {
    equal,
    deleteLastSymbol,
    resetUserInput,
    setSymbol,
    setZeroes,
    evaluateInput,
    userInput,
  } = useCalculator();

  return (
    <main>
      <header>
        <h1>Calculator</h1>
      </header>
      <section>
        <div className="display">{userInput}</div>
        <div>
          <button
            onClick={() => {
              setSymbol("+");
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              setSymbol("-");
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              setSymbol("*");
            }}
          >
            *
          </button>
          <button
            onClick={() => {
              setSymbol("/");
            }}
          >
            /
          </button>
          <button
            onClick={() => {
              setSymbol("%");
            }}
          >
            %
          </button>
          <button onClick={deleteLastSymbol}>&lt;-</button>
          <button onClick={equal}>=</button>
          <button onClick={resetUserInput}>AC</button>
          <button onClick={setZeroes}>00</button>
          <button
            onClick={() => {
              setSymbol("0");
            }}
          >
            0
          </button>
          <button
            onClick={() => {
              setSymbol("1");
            }}
          >
            1
          </button>
          <button
            onClick={() => {
              setSymbol("2");
            }}
          >
            2
          </button>
          <button
            onClick={() => {
              setSymbol("3");
            }}
          >
            3
          </button>
          <button
            onClick={() => {
              setSymbol("4");
            }}
          >
            4
          </button>
          <button
            onClick={() => {
              setSymbol("5");
            }}
          >
            5
          </button>
          <button
            onClick={() => {
              setSymbol("6");
            }}
          >
            6
          </button>
          <button
            onClick={() => {
              setSymbol("7");
            }}
          >
            7
          </button>
          <button
            onClick={() => {
              setSymbol("8");
            }}
          >
            8
          </button>
          <button
            onClick={() => {
              setSymbol("9");
            }}
          >
            9
          </button>
        </div>
      </section>
    </main>
  );
}

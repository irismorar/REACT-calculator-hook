import "./App.css";
import { useCalculator } from "./useCalculator";

export default function App() {
  const {
    equal,
    deleteLastSymbol,
    resetUserInput,
    pushToUserInput,
    userInput,
  } = useCalculator();

  return (
    <main>
      <h1>Calculator</h1>

      <section>
        <div className="display-container">
          <div className="display">{userInput}</div>
          <div className="result">{userInput}</div>
        </div>
        <div className="buttons-container">
          <button className="math-operator-button" onClick={resetUserInput}>
            AC
          </button>
          <button
            className="math-operator-button"
            onClick={() => {
              pushToUserInput("%");
            }}
          >
            %
          </button>
          <button className="math-operator-button" onClick={deleteLastSymbol}>
            &lt;-
          </button>
          <button
            className="math-operator-button"
            onClick={() => {
              pushToUserInput("/");
            }}
          >
            /
          </button>
          <button
            onClick={() => {
              pushToUserInput("7");
            }}
          >
            7
          </button>
          <button
            onClick={() => {
              pushToUserInput("8");
            }}
          >
            8
          </button>
          <button
            onClick={() => {
              pushToUserInput("9");
            }}
          >
            9
          </button>
          <button
            className="math-operator-button"
            onClick={() => {
              pushToUserInput("*");
            }}
          >
            *
          </button>
          <button
            onClick={() => {
              pushToUserInput("4");
            }}
          >
            4
          </button>
          <button
            onClick={() => {
              pushToUserInput("5");
            }}
          >
            5
          </button>
          <button
            onClick={() => {
              pushToUserInput("6");
            }}
          >
            6
          </button>
          <button
            className="math-operator-button"
            onClick={() => {
              pushToUserInput("-");
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              pushToUserInput("1");
            }}
          >
            1
          </button>
          <button
            onClick={() => {
              pushToUserInput("2");
            }}
          >
            2
          </button>
          <button
            onClick={() => {
              pushToUserInput("3");
            }}
          >
            3
          </button>
          <button
            className="math-operator-button"
            onClick={() => {
              pushToUserInput("+");
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              pushToUserInput("00");
            }}
          >
            00
          </button>
          <button
            onClick={() => {
              pushToUserInput("0");
            }}
          >
            0
          </button>
          <button
            onClick={() => {
              pushToUserInput(".");
            }}
          >
            .
          </button>
          <button className="math-operator-button" onClick={equal}>
            =
          </button>
        </div>
      </section>
    </main>
  );
}

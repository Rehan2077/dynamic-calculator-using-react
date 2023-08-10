import React, { useState } from "react";
import "./Calculator.css";
import History from "./History";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [inputResult, setInputResult] = useState("");
  const [history, setHistory] = useState([]);

  let nextId = 0;

  const calculate = () => {
    if (input !== "") {
      try {
        /* eslint no-eval: 0 */
        setOutput(eval(input));
        setInputResult(input);
        setHistory([
            ...history,
            {  id: nextId++, input: {input}, output: {output} }
          ]);
      } catch (error) {
        alert("Invalid Input!");
        setHistory([...history, `${input}=${output}`]);
      }
    }
  };

  const handleClick = (e) => {
    setInput(e.target.value);
  };
  const handleKey = (e) => {
    // console.log(e);
    if (e.key === "Enter") {
      calculate();
    }
  };

  return (
    <div>
      <div className="inputs">
        <input
          type="text"
          value={input}
          onChange={handleClick}
          onKeyDown={handleKey}
        />
        <button onClick={calculate}>Calculate</button>
      </div>
      <div className="outputs">
        <h3>
          Result:
          {output !== "" && (
            <span>
              {inputResult} = {output}
            </span>
          )}
        </h3>
      </div>
      <div className="history">
        <h2>History: </h2>
        {history.map((item) => {
          return <History key={item.id} input={item.input} output={item.output} />;
        })}
      </div>
    </div>
  );
};

export default Calculator;

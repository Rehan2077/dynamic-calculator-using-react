import React, { useEffect, useState } from "react";
import "./Calculator.css";


const Calculator = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [inputResult, setInputResult] = useState("");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (output) {
      setHistory((prev) => [...prev, `${input}=${output}`]);
    }
  }, [output]);

  const calculate = () => {
    if (input !== "") {
      try {
        /* eslint no-eval: 0 */
        setOutput(eval(input).toString());
        setInputResult(input);
      } catch (error) {
        alert("Invalid Input!");
      }
    }
  };

  
  
  const handleClick = (e) => {
    setInput(e.target.value);
  };
  const handleKey = (e) => {
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
          {output && (
            <span>
              {inputResult} = {output}
            </span>
          )}
        </h3>
      </div>
      <div className="history">
        <h2>History: </h2>
        {
            history.map((item, key) => {
                // return <History item={item} key={key} />
                return <h3 key={key}>{key+1}. {item}</h3>
            })
        }
      </div>
    </div>
  );
};

export default Calculator;

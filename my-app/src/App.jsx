import { useState } from "react";
import "./App.css";

//couter (increment and decrement)
function Count() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}


// calculator
function Calculator() {
  const [display, setDisplay] = useState("0");
  const [history, setHistory] = useState([]);

  const append = (char) => {
    setDisplay((prev) => {
      if (prev === "0" && /[0-9.]/.test(char)) return String(char);
      return prev + char;
    });
  };

  const clearAll = () => setDisplay("0");
  const backspace = () =>
    setDisplay((prev) => (prev.length <= 1 ? "0" : prev.slice(0, -1)));

  const evaluate = () => {
    try {
      // Disallow unsafe characters, allow digits, operators, parentheses, decimal
      if (!/^[0-9+\-*/().\s]+$/.test(display)) {
        setDisplay("Error");
        return;
      }
      // eslint-disable-next-line no-eval
      const value = eval(display);
      const result = typeof value === "number" && !Number.isNaN(value) ? value : "Error";
      setHistory((h) => [display + " = " + result, ...h].slice(0, 5));
      setDisplay(String(result));
    } catch (e) {
      setDisplay("Error");
    }
  };

  // keyboard support
  const handleKey = (e) => {
    const key = e.key;
    if (/^[0-9]$/.test(key)) append(key);
    else if (key === ".") append(key);
    else if (/[+\-*/]/.test(key)) append(key);
    else if (key === "Enter") evaluate();
    else if (key === "Backspace") backspace();
    else if (key === "Escape") clearAll();
  };

  // attach keyboard listener
  useState(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  return (
    <div
      style={{
        maxWidth: 360,
        margin: "2rem auto",
        padding: 20,
        border: "1px solid #ccc",
        borderRadius: 8,
        fontFamily: "sans-serif",
      }}
    >
      <h2>Calculator</h2>
      <div
        style={{
          background: "#222",
          color: "#0f0",
          padding: 12,
          fontSize: 20,
          borderRadius: 4,
          minHeight: 40,
          marginBottom: 12,
          wordWrap: "break-word",
        }}
      >
        {display}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8 }}>
        {[
          { label: "C", action: clearAll },
          { label: "⌫", action: backspace },
          { label: "(", action: () => append("(") },
          { label: ")", action: () => append(")") },
          { label: "7", action: () => append("7") },
          { label: "8", action: () => append("8") },
          { label: "9", action: () => append("9") },
          { label: "/", action: () => append("/") },
          { label: "4", action: () => append("4") },
          { label: "5", action: () => append("5") },
          { label: "6", action: () => append("6") },
          { label: "*", action: () => append("*") },
          { label: "1", action: () => append("1") },
          { label: "2", action: () => append("2") },
          { label: "3", action: () => append("3") },
          { label: "-", action: () => append("-") },
          { label: "0", action: () => append("0") },
          { label: ".", action: () => append(".") },
          { label: "=", action: evaluate },
          { label: "+", action: () => append("+") },
        ].map((btn) => (
          <button
            key={btn.label}
            onClick={btn.action}
            style={{ padding: 12, fontSize: 18 }}
            type="button"
          >
            {btn.label}
          </button>
        ))}
      </div>

      {history.length > 0 && (
        <div style={{ marginTop: 12 }}>
          <h4 style={{ margin: "8px 0" }}>History</h4>
          <ul>
            {history.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Count />
      <Calculator />
    </div>
  );
}

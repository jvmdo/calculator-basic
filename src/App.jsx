import React from "react";

import { evaluate } from "mathjs";

const numpadEntries = [
  [
    {
      id: crypto.randomUUID(),
      type: "number",
      value: 7,
      tags: ["seven"],
    },
    {
      id: crypto.randomUUID(),
      type: "number",
      value: 8,
      tags: ["eight"],
    },
    {
      id: crypto.randomUUID(),
      type: "number",
      value: 9,
      tags: ["nine"],
    },
    {
      id: crypto.randomUUID(),
      type: "operation",
      value: "del",
      tags: ["del", "delete", "backspace", "erase"],
    },
  ],
  [
    {
      id: crypto.randomUUID(),
      type: "number",
      value: 4,
      tags: ["four"],
    },
    {
      id: crypto.randomUUID(),
      type: "number",
      value: 5,
      tags: ["five"],
    },
    {
      id: crypto.randomUUID(),
      type: "number",
      value: 6,
      tags: ["six"],
    },
    {
      id: crypto.randomUUID(),
      type: "operation",
      value: "+",
      tags: ["+", "add", "addition", "sum", "plus"],
    },
  ],
  [
    {
      id: crypto.randomUUID(),
      type: "number",
      value: 1,
      tags: ["one"],
    },
    {
      id: crypto.randomUUID(),
      type: "number",
      value: 2,
      tags: ["two"],
    },
    {
      id: crypto.randomUUID(),
      type: "number",
      value: 3,
      tags: ["three"],
    },
    {
      id: crypto.randomUUID(),
      type: "operation",
      value: "-",
      tags: ["-", "sub", "subtraction", "minus"],
    },
  ],
  [
    {
      id: crypto.randomUUID(),
      type: "symbol",
      value: ".",
      tags: [".", "dot"],
    },
    {
      id: crypto.randomUUID(),
      type: "number",
      value: 0,
      tags: ["zero"],
    },
    {
      id: crypto.randomUUID(),
      type: "operation",
      value: "/",
      tags: ["/", "div", "division", "fraction"],
    },
    {
      id: crypto.randomUUID(),
      type: "operation",
      value: "x",
      tags: ["x", "*", "mul", "multiplication", "times"],
    },
  ],
  [
    {
      id: crypto.randomUUID(),
      type: "operation",
      value: "reset",
      tags: ["reset", "clear"],
    },
    {
      id: crypto.randomUUID(),
      type: "operation",
      value: "=",
      tags: ["=", "res", "result", "calculate", "enter", "equals"],
    },
  ],
];

const allowedCharacters = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ".",
  "+",
  "-",
  "x",
  "*",
  "/",
  "", // Empty is allowed
  " ", // Spaces are allowed
];

// "=", submits
// "Escape", clear input

function App() {
  const [expression, setExpression] = React.useState("");
  const inputRef = React.useRef();

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleInput = (event) => {
    const input = event.target.value;
    const key = input.at(-1) ?? ""; // [.at()] returns [undefined] for empty strings
    if (allowedCharacters.includes(key)) {
      setExpression(input);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = evaluate(expression);
    setExpression(result);
  };

  return (
    <>
      <header>
        <h1>calc</h1>
        <fieldset>
          <legend>Theme</legend>
          <label htmlFor="theme-1">1</label>
          <input type="radio" name="themeSwitch" id="theme-1" />
          <label htmlFor="theme-2">2</label>
          <input type="radio" name="themeSwitch" id="theme-2" />
          <label htmlFor="theme-3">3</label>
          <input type="radio" name="themeSwitch" id="theme-3" />
        </fieldset>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <label htmlFor="display">Display</label>
          <div>
            <input
              ref={inputRef}
              id="display"
              type="text"
              name="expression"
              required={true}
              pattern="[0-9\-+\/*x=.]+"
              title="Only numbers and operators (0-9, ., +, -, x, *, /, =) are allowed"
              value={expression}
              onChange={handleInput}
            />
          </div>
          <div>
            <div>
              {numpadEntries.map((row, index) => (
                <div key={index}>
                  {row.map(({ id, type, value }) => (
                    <button key={id}>{value}</button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </form>
      </main>
    </>
  );
}

export default App;

export const keypadEntries = [
  [
    {
      id: crypto.randomUUID(),
      category: "number",
      value: "7",
      tags: ["seven"],
    },
    {
      id: crypto.randomUUID(),
      category: "number",
      value: "8",
      tags: ["eight"],
    },
    {
      id: crypto.randomUUID(),
      category: "number",
      value: "9",
      tags: ["nine"],
    },
    {
      id: crypto.randomUUID(),
      category: "action",
      value: "del",
      tags: ["del", "delete", "backspace", "erase"],
    },
  ],
  [
    {
      id: crypto.randomUUID(),
      category: "number",
      value: "4",
      tags: ["four"],
    },
    {
      id: crypto.randomUUID(),
      category: "number",
      value: "5",
      tags: ["five"],
    },
    {
      id: crypto.randomUUID(),
      category: "number",
      value: "6",
      tags: ["six"],
    },
    {
      id: crypto.randomUUID(),
      category: "operation",
      value: "+",
      tags: ["+", "add", "addition", "sum", "plus"],
    },
  ],
  [
    {
      id: crypto.randomUUID(),
      category: "number",
      value: "1",
      tags: ["one"],
    },
    {
      id: crypto.randomUUID(),
      category: "number",
      value: "2",
      tags: ["two"],
    },
    {
      id: crypto.randomUUID(),
      category: "number",
      value: "3",
      tags: ["three"],
    },
    {
      id: crypto.randomUUID(),
      category: "operation",
      value: "-",
      tags: ["-", "sub", "subtraction", "minus"],
    },
  ],
  [
    {
      id: crypto.randomUUID(),
      category: "symbol",
      value: ".",
      tags: [".", "dot"],
    },
    {
      id: crypto.randomUUID(),
      category: "number",
      value: "0",
      tags: ["zero"],
    },
    {
      id: crypto.randomUUID(),
      category: "operation",
      value: "/",
      tags: ["/", "div", "division", "fraction"],
    },
    {
      id: crypto.randomUUID(),
      category: "operation",
      value: "x",
      tags: ["x", "*", "mul", "multiplication", "times"],
    },
  ],
  [
    {
      id: crypto.randomUUID(),
      category: "action",
      value: "reset",
      tags: ["reset", "clear"],
    },
    {
      id: crypto.randomUUID(),
      category: "action",
      value: "=",
      tags: ["=", "res", "result", "calculate", "enter", "equals"],
    },
  ],
];

export const allowedCharacters = [
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

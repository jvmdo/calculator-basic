import React from "react";

import styles from "./Screen.module.css";
import { allowedCharacters } from "@/constants";

function Screen({ expression, setExpression }) {
  const inputRef = React.useRef(null);

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

  return (
    <label className={styles.screen}>
      <input
        ref={inputRef}
        id="screen"
        type="text"
        name="expression"
        required={true}
        pattern="[0-9\-+\/*x=.]+"
        title="Only numbers and operators (0-9, ., +, -, x, *, /, =) are allowed"
        value={expression}
        onChange={handleInput}
      />
    </label>
  );
}

export default Screen;

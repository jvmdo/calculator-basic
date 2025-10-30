import React from "react";

import styles from "./Main.module.css";
import Keypad from "./Keypad";
import Screen from "./Screen";
import { safeEvaluate } from "@/utils/calculator";

function Main() {
  const [expression, setExpression] = React.useState("");

  const pushCharacter = (char) => {
    setExpression((currentExpression) => currentExpression + char);
  };

  const popCharacter = () => {
    setExpression((currentExpression) => currentExpression.slice(0, -1));
  };

  const clearScreen = () => {
    setExpression("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = safeEvaluate(expression.replace("x", "*"));

    if (result.success) {
      setExpression(result.data);
    } else {
      console.error(result.error);
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <Screen expression={expression} setExpression={setExpression} />
        <div className={styles["keypad-wrapper"]}>
          <Keypad
            enter={pushCharacter}
            del={popCharacter}
            reset={clearScreen}
          />
        </div>
      </form>
    </main>
  );
}

export default Main;

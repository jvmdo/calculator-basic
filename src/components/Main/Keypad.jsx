import styles from "./Keypad.module.css";
import { allowedCharacters, keypadEntries } from "@/constants";

function Keypad({ enter, ...actions }) {
  const handleButtonInput = (key) => {
    const value = key.value;

    if (["del", "reset"].includes(value)) {
      actions[value]();
      return;
    }

    if (allowedCharacters.includes(value)) {
      enter(value);
    }
  };

  return (
    <div className={styles.keypad}>
      {keypadEntries.map((row) =>
        row.map(({ id, ...entry }) => (
          <KeypadButton key={id} entry={entry} onPress={handleButtonInput}>
            {entry.value}
          </KeypadButton>
        ))
      )}
    </div>
  );
}

function KeypadButton({ children, entry, onPress }) {
  return (
    <button
      type={entry.value === "=" ? "submit" : "button"}
      data-value={entry.value}
      onClick={() => {
        onPress(entry);
      }}
    >
      {children}
    </button>
  );
}

export default Keypad;

import styles from "./Header.module.css";
import useTheme from "@/hooks/use-theme";

function Header() {
  const [theme, setTheme] = useTheme();

  return (
    <header>
      <h1>calc</h1>
      <fieldset>
        <legend>Theme</legend>
        <div className={styles.switch}>
          <ThemeButton label="1" theme={theme} setTheme={setTheme} />
          <ThemeButton label="2" theme={theme} setTheme={setTheme} />
          <ThemeButton label="3" theme={theme} setTheme={setTheme} />
          <span className={styles.ball}></span>
        </div>
      </fieldset>
    </header>
  );
}

function ThemeButton({ label, theme, setTheme }) {
  return (
    <>
      <input
        type="radio"
        name="themeSwitch"
        id={`theme-${label}`}
        className={styles[`theme-${label}`]}
        value={label}
        checked={theme === label}
        onChange={(event) => {
          setTheme(event.target.value);
        }}
      />
      <label htmlFor={`theme-${label}`}>{label}</label>
    </>
  );
}

export default Header;

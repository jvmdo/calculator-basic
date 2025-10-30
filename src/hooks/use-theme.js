import React from "react";

function useTheme(overrideTheme) {
  const [theme, setTheme] = React.useState(() => {
    const query = "(prefers-color-scheme: light)";
    const preferredColorScheme = window.matchMedia(query).matches ? 2 : 3;
    const localTheme = localStorage.getItem("theme");

    return overrideTheme ?? localTheme ?? preferredColorScheme;
  });

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme];
}

export default useTheme;

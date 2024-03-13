import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setisDark] = useState(false);

  const toggleTheme = () => {
    setisDark(prev => !prev);
  };

  const theme = isDark ? "dark" : "light";

  useEffect(
    () => {
      document.documentElement.setAttribute("data-theme", theme);
    },
    [isDark]
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

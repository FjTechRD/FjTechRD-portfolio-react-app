import { useState } from "react";
const themeType = "dark" | "light";

const useTheme = () => {
  const [theme, setTheme] = useState(themeType);
  const handleThemeChange = (e) => {
    setTheme(e.target.cheked ? "dark" : "light");
  };

  return { theme, handleThemeChange };
};

export default useTheme;

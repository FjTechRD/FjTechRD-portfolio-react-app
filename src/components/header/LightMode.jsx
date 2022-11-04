import React, { useEffect, useState } from "react";
import "../../shared/style/header.css";

const LightMode = () => {
  const [theme, setTheme] = useState("dark");
  const switchTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div>
      {theme === "dark" ? (
        <button
          className="btn dark-mobile-btn header__style-btn"
          onClick={switchTheme}
        >
          <i className="fa-solid fa-sun"></i>
        </button>
      ) : (
        <button
          className="btn dark-mobile-btn header__style-btn"
          onClick={switchTheme}
        >
          <i className="fa-solid fa-moon"></i>
        </button>
      )}
    </div>
  );
};

export default LightMode;

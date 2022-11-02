import React, { useEffect, useState } from "react";
import "../../shared/style/header.css";

const LightMode = () => {
  // const theme = "dark" || "light";
  // const [changerTheme, setChangerTheme] = useState < theme > "dark";
  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setChangerTheme(e.target.cheked ? "dark" : "light");
  // };

  // useEffect(() => {
  //   document.body.setAttribute("data-theme", theme);
  // }, [changerTheme]);

  return (
    <button
      className="btn dark-mobile-btn header__style-btn"
      // onClick={changerTheme}
      // cheked={theme === "light"}
    >
      <i className="fa-solid fa-moon"></i>
    </button>
  );
};

export default LightMode;

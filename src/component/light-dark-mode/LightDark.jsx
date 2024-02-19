import React from "react";
import LocalStorage from "./LocalStorage";
import './theme.css'

const LightDark = () => {
  const [theme, setTheme] = LocalStorage("theme", "dark");

  function handleClick() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  console.log(theme);

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>hello world</p>
        <button onClick={handleClick}>Change Theme</button>
      </div>
    </div>
  );
};

export default LightDark;

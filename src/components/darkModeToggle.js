import React from "react";

import Toggle from "./toggle";
import useDarkMode from "use-dark-mode";

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div id="contain" className="dark-mode-toggle">
      {/* <button type="button" onClick={darkMode.disable}> */}
      {/* ☀ */}
      {/* </button> */}
      <Toggle
        checked={darkMode.value}
        onChange={darkMode.toggle}
        // onColor="#6f61a1"
        // ^^$secondary-color
        onColor="#3e789e"
      />
      {/* <button type="button" onClick={darkMode.enable}> */}
      {/* ☾ */}
      {/* </button> */}
    </div>
  );
};

export default DarkModeToggle;

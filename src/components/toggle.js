import React from "react";
import "../styles/_toggle.scss";

const Toggle = ({ checked, onChange, onColor }) => {
  return (
    <>
      <div id="switch-align" className="toggle-control">
        <input
          checked={checked}
          onChange={onChange}
          className="react-switch-checkbox"
          id={`react-switch-new`}
          type="checkbox"
        />
        <label
          style={{ background: checked && onColor }}
          className="react-switch-label"
          htmlFor={`react-switch-new`}
        >
          <span className={`react-switch-button`} />
        </label>
      </div>
    </>
  );
};

export default Toggle;

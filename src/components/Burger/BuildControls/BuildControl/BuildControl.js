import React from "react";
import "./BuildControl.css";

const BuildControl = ({label, more, less,disabled}) => {
  return (
    <div className="BuildControl">
      <div className="Label">{label}</div>
      <button className="Less" onClick={less} disabled={disabled}>Less</button>
      <button className="More" onClick={more}>More</button>
    </div>
  );
};

export default BuildControl;

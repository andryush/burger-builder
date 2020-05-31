import React from "react";
import "./BuildControls.css";

import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = ({ more, less, price, disabled, purchaseable, purchasing }) => {
  return (
    <div className="BuildControls">
      <p><strong>Current price: {price.toFixed(2)}$</strong></p>
      {controls.map((el) => {
        return (
          <BuildControl
            key={el.label}
            label={el.label}
            more={() => more(el.type)}
            less={() => less(el.type)}
            disabled={disabled[el.type]}
          />
        );
      })}
      <button 
        className="OrderButton" 
        disabled={!purchaseable}
        onClick={purchasing}>ORDER NOW</button>
    </div>
  );
};

export default BuildControls;

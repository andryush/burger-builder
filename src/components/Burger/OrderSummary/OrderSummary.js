import React from "react";
import Aux from "../../hoc/Aux/Aux";
import Button from "../../UI/Button/Button";

const OrderSummary = ({
  ingredients,
  price,
  cancelHandler,
  continueHandler,
}) => {
  const summary = Object.keys(ingredients).map((el) => {
    return (
      <li key={el}>
        <span style={{ textTransform: "capitalize" }}>
          {el}: {ingredients[el]}
        </span>
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your order</h3>
      <p>A burger with the following ingredients</p>

      <ul>{summary}</ul>

      <h3>Total price: {price.toFixed(2)}$</h3>

      <p>Continue to checkout?</p>

      <Button btnType="cancel" clicked={cancelHandler}>
        CANCEL
      </Button>
      <Button btnType="success" clicked={continueHandler}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default OrderSummary;

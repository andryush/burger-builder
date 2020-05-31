import React from "react";
import "./Burger.css";
import BurgerIngredients from "../Burger/BurgerIngredients/BurgerIngredients";

const Burger = ({ ingredients }) => {
  let transformedIngredients = Object.keys(ingredients)
    .map((ingKey) => {
      return [...Array(ingredients[ingKey])].map((_, i) => {
        return <BurgerIngredients key={ingKey + i} type={ingKey} />;
      });
    })
    .reduce((newArr, el) => {
      return newArr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please add ingredients!</p>;
  }

  return (
    <div className="Burger">
      <BurgerIngredients type="bread-top" />
      {transformedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default Burger;

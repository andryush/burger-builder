import React, { Component } from "react";
import "./BurgerBuilder.css";

import Aux from "../../components/hoc/Aux/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.2,
  bacon: 0.8,
  cheese: 0.5,
  meat: 1.8,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 0.5,
    purchaseable: false,
    purchasing: false,
  };

  onMoreClick = (type) => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;
    const newIngredients = { ...this.state.ingredients };
    newIngredients[type] = newCount;

    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + INGREDIENT_PRICES[type];

    this.setState(
      {
        ingredients: newIngredients,
        totalPrice: newPrice,
      },
      () => this.updatePurchaseState()
    );
  };

  onLessClick = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const newCount = oldCount - 1;
    const newIngredients = { ...this.state.ingredients };
    newIngredients[type] = newCount;

    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - INGREDIENT_PRICES[type];

    this.setState(
      {
        ingredients: newIngredients,
        totalPrice: newPrice,
      },
      () => this.updatePurchaseState()
    );
  };

  updatePurchaseState = () => {
    const ingredients = { ...this.state.ingredients };
    const sum = Object.keys(ingredients)
      .map((el) => ingredients[el])
      .reduce((acc, el) => acc + el, 0);

    this.setState({
      purchaseable: sum > 0,
    });
  };

  purchasingHandler = () => {
    this.setState({
      purchasing: true,
    });
  };

  hideBackdropHandler = () => {
    this.setState({
      purchasing: false,
    });
  };

  continueHandler = () => {
      alert('Under construction:)');
  }

  render() {
    const disabledInfo = { ...this.state.ingredients };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          hideBackdrop={this.hideBackdropHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
            cancelHandler={this.hideBackdropHandler}
            continueHandler={this.continueHandler}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />

        <BuildControls
          price={this.state.totalPrice}
          more={this.onMoreClick}
          less={this.onLessClick}
          disabled={disabledInfo}
          purchaseable={this.state.purchaseable}
          purchasing={this.purchasingHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;

import React, { useContext } from "react";

import CartContext from "../../../store/cart-context";
import MealItemForm from "./MealItemForm";

import styles from "./MealItem.module.css";

function MealItem(props) {
  const cartCtx = useContext(CartContext);
  const price = `R$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItems({
      id: props.id,
      name: props.title,
      price: props.price,
      amount: amount,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.title}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}

export default MealItem;

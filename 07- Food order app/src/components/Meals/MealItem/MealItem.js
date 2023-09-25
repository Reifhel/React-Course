import React from "react";

import MealItemForm from "./MealItemForm";

import styles from "./MealItem.module.css";

function MealItem(props) {
  const price = `R$${props.price.toFixed(2)}`;

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.title}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} />
      </div>
    </li>
  );
}

export default MealItem;

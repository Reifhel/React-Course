import React, { useContext, useEffect, useState } from "react";

import CartContext from "../../store/cart-context";

import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

function HeaderCartButton(props) {
  const CartCtx = useContext(CartContext);
  const { items } = CartCtx;

  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);

  const NumberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const buttonClasses = `${styles.button} ${
    buttonIsHighlighted ? styles.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonIsHighlighted(true);

    const timer = setTimeout(() => {
      setButtonIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span> Seu Carrinho </span>
      <span className={styles.badge}> {NumberOfCartItems} </span>
    </button>
  );
}

export default HeaderCartButton;

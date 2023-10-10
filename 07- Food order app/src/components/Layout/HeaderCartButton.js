import React, { useContext } from "react";

import CartContext from "../../store/cart-context";

import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

function HeaderCartButton(props) {
  const CartCtx = useContext(CartContext);

  const NumberOfCartItems = CartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span> Seu Carrinho </span>
      <span className={styles.badge}> {NumberOfCartItems} </span>
    </button>
  );
}

export default HeaderCartButton;

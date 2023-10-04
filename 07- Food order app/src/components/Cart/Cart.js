import React from "react";

import Modal from "../UI/Modal";

import styles from "./Cart.module.css";

function Cart(props) {
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 2.0 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Valor Total</span>
        <span>00.00</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onHideCart}>
          Fechar
        </button>
        <button className={styles.button}> Pedir </button>
      </div>
    </Modal>
  );
}

export default Cart;

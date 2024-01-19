import React, { useRef, useState } from "react";

import Input from "../../UI/Input";

import styles from "./MealItemForm.module.css";

function MealItemForm(props) {
  const amountInputRef = useRef();

  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label={"Quantidade"}
        input={{
          id: "Quantidade_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button> + Adicionar</button>
      {!amountIsValid && <p>Por favor insira um valor válido!</p>}
    </form>
  );
}

export default MealItemForm;

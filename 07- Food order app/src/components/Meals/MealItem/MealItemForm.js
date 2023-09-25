import React from "react";

import Input from "../../UI/Input";

import styles from "./MealItemForm.module.css";

function MealItemForm(props) {
  return (
    <form className={styles.form}>
      <Input
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
    </form>
  );
}

export default MealItemForm;

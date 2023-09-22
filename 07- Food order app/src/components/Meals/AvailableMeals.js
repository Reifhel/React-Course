import React from "react";

import styles from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Pizza",
    description: "Pizza cabulosa de calabresa",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Pastel de queijo",
    description: "Pastelzinho de queijo insanoooooooooo",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Smash Burger",
    description: "Carne, crocancia e sabor",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Sorvetao de creme",
    description: "Gelado...e saboroso...",
    price: 18.99,
  },
];

function AvailableMeals() {
  return (
    <section className={styles.meals}>
      <ul>
        {DUMMY_MEALS.map((meal) => (
          <li>{meal.name}</li>
        ))}
      </ul>
    </section>
  );
}

export default AvailableMeals;

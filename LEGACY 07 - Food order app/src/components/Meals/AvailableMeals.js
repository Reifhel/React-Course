import React from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

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
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => (
            <MealItem
              key={meal.id}
              id={meal.id}
              title={meal.name}
              description={meal.description}
              price={meal.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;

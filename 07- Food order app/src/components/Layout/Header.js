import React from "react";

import mealsImage from "../../assets/meals.jpg";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

function Header() {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1> IFood Pirata </h1>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="a table full of food" />
      </div>
    </React.Fragment>
  );
}

export default Header;

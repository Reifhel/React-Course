import React from "react";

import styles from "./MealsSummary.module.css";

function MealsSummary() {
  return (
    <section className={styles.summary}>
      <h2> Comida gostosa no teu prato </h2>
      <p>
        Escolha sua refeição favorita em nossa ampla seleção de refeições
        disponíveis e desfrute de um delicioso almoço ou jantar em casa.
      </p>
      <p>
        Todas as nossas refeições são preparadas com ingredientes de alta
        qualidade, no tempo certo e claro, por chefs experientes!
      </p>
    </section>
  );
}

export default MealsSummary;

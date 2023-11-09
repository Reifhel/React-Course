import React from "react";

import { CORE_CONCEPTS } from "../../data";
import CoreConcept from "./CoreConcept";

import "./CoreConcept.css";

function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((item) => {
          return (
            <CoreConcept
              key={item.title}
              title={item.title}
              description={item.description}
              img={item.image}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default CoreConcepts;

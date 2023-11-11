import React from "react";

import { CORE_CONCEPTS } from "../../data";
import Section from "../UI/Section";
import CoreConcept from "./CoreConcept";

import "./CoreConcept.css";

function CoreConcepts() {
  return (
    <Section id="core-concepts" title="Core Concepts">
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
    </Section>
  );
}

export default CoreConcepts;

import React, { Fragment, useState } from "react";
import { EXAMPLES } from "../../data";
import TabButton from "../TabButton";
import Section from "../UI/Section";
import ExampleItem from "./ExampleItem";

import "./Examples.css";

function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  const handleSelect = (identifier) => {
    // identifier => "Components", "JSX", "Props", "State"
    setSelectedTopic(identifier);
  };

  return (
    <Fragment>
      <Section id="examples" title="Examples">
        <menu>
          <TabButton onSelect={() => handleSelect("components")}>
            Components
          </TabButton>
          <TabButton onSelect={() => handleSelect("jsx")}> JSX </TabButton>
          <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
          <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
        </menu>
      </Section>
      {!selectedTopic && <p> Please select a topic. </p>}
      {selectedTopic && (
        <ExampleItem
          title={EXAMPLES[selectedTopic].title}
          description={EXAMPLES[selectedTopic].description}
          code={EXAMPLES[selectedTopic].code}
        />
      )}
    </Fragment>
  );
}

export default Examples;

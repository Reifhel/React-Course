import { Fragment } from "react";

import Header from "./Components/UI/Header";

import CoreConcepts from "./Components/CoreConcepts/CoreConcepts.jsx";
import Examples from "./Components/Examples/Examples.jsx";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </Fragment>
  );
}

export default App;

import React, { useState } from "react";

import Form from "./Components/Form/Form";
import Header from "./Components/UI/Header";
import InvestmentTable from "./Components/DataTable/InvestimentTable";

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if (userInput) {
    let currentSavings = +userInput["currentSavings"];
    const yearlyContribution = +userInput["yearlySavings"];
    const expectedReturn = +userInput["expectedInterest"] / 100;
    const duration = +userInput["investmentDuration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />

      <Form onSaveData={calculateHandler} />

      {!userInput && (
        <p style={{ textAlign: "center" }}>No investment calculated yet.</p>
      )}
      {userInput && (
        <InvestmentTable
          investimentData={yearlyData}
          initialInvestiment={userInput.currentSavings}
        />
      )}
    </div>
  );
}

export default App;

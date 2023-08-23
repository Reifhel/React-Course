import React, { useState } from "react";
import styles from './Form.module.css'

const INITIAL_STATE = {
  currentSavings: "",
  yearlySavings: "",
  expectedInterest: "",
  investmentDuration: "",
}

function Form(props) {
  const [userInput, setUserInput] = useState(INITIAL_STATE);

  const currentSavingsHandler = (event) => {
    setUserInput((prevUserInputs) => {
      return {
        ...prevUserInputs,
        currentSavings: event.target.value,
      };
    });
  };

  const yearlySavingsHandler = (event) => {
    setUserInput((prevUserInputs) => {
      return {
        ...prevUserInputs,
        yearlySavings: event.target.value,
      };
    });
  };

  const expectedInterestHandler = (event) => {
    setUserInput((prevUserInputs) => {
      return {
        ...prevUserInputs,
        expectedInterest: event.target.value,
      };
    });
  };

  const investmentDurationHandler = (event) => {
    setUserInput((prevUserInputs) => {
      return {
        ...prevUserInputs,
        investmentDuration: event.target.value,
      };
    });
  };

  const submitHandler = (event) => {

    event.preventDefault();

    const investmentData = {
        currentSavings: +userInput.currentSavings,
        yearlySavings: +userInput.yearlySavings,
        expectedInterest: +userInput.expectedInterest,
        investmentDuration: +userInput.investmentDuration
    }

    props.onSaveData(investmentData)

    setUserInput(INITIAL_STATE)

  }

  const resetFormHandler = () => {
    setUserInput(INITIAL_STATE)
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={currentSavingsHandler}
            value={userInput.currentSavings}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={yearlySavingsHandler}
            value={userInput.yearlySavings}
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={expectedInterestHandler}
            value={userInput.expectedInterest}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={investmentDurationHandler}
            value={userInput.investmentDuration}
          />
        </p>
      </div>
      <p className={styles["actions"]}>
        <button type="reset" className={styles["buttonAlt"]} onClick={resetFormHandler}>
          Reset
        </button>
        <button type="submit" className={styles["button"]}>
          Calculate
        </button>
      </p>
    </form>
  );
}

export default Form;

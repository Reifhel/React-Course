import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    // First way
    setEnteredTitle(event.target.value);
    // second way (not the best all the times)
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    // third way
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredTitle: event.target.value,
    //   };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredAmount: event.target.value,
    //   };
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredDate: event.target.value,
    //   };
    // });
  };

  // usando um changeHandler compartilhado
  // const inputChangeHandler = (identifer,value) => {
  //   if (identifer = "title"){
  //     setEnteredTitle(value)
  //   }
  //   else if (identifer = "amount"){
  //     setEnteredAmount(value)
  //   }
  //   else{
  //     setEnteredDate(value)
  //   }
  // }

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveData(expenseData)

    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  };

  return (

    <form onSubmit={submitHandler}>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label> Titulo </label>
        <input
          type="text"
          value={enteredTitle}
          onChange={titleChangeHandler}
        />
      </div>
      <div className="new-expense__control">
        <label> Valor </label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          value={enteredAmount}
          onChange={amountChangeHandler}
        />
      </div>
      <div className="new-expense__control">
        <label> Data </label>
        <input
          type="date"
          min="2020-01-01"
          max="2024-12-31"
          value={enteredDate}
          onChange={dateChangeHandler}
        />
      </div>
    </div>
    <div className="new-expense__actions">
      <button type="button" onClick={props.onCancel}> Cancelar </button>
      <button type="submit"> Adicionar Despesa </button>
    </div>
  </form>
    
  );
}

export default ExpenseForm;

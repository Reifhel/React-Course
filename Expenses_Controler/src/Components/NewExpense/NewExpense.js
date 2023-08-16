import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {

  const [formVisible, setFormVisible] = useState(false)

  const saveDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData)
    setFormVisible(false)
  }

  const newExpenseHandler = () => {
    setFormVisible(true)
  }
  const cancelExpenseHandler = () => {
    setFormVisible(false)
  }

  let conteudo = <button onClick={newExpenseHandler}> Adicionar nova despesa </button>

  if(formVisible) {
    conteudo = <ExpenseForm onSaveData={saveDataHandler} onCancel={cancelExpenseHandler}/>
  }

  return (
    <div className='new-expense'>
        {conteudo}
    </div>
  )
}

export default NewExpense
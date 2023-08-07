import React from 'react';

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css"

function Expenses(props){

    return (
        <Card className="expenses">
            {props.list.map( (item) => 
                <ExpenseItem key={item.title} title={item.title} amount={item.amount} date={item.date}/>
            )}
            
        </Card>
    )

}

export default Expenses;
import React, {useState} from 'react';

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css"
import ExpensesFilter from './ExpensesFilter';

function Expenses(props){

    const [filteredYear, setFilteredYear] = useState('2023')

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }

    return (

        <div>
            
            <Card className="expenses">

                <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}/>

                {props.list.map( (item) => 
                    <ExpenseItem key={item.title} title={item.title} amount={item.amount} date={item.date}/>
                )}
                
            </Card>

        </div>

    )

}

export default Expenses;
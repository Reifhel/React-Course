import './ExpenseDate.css'

function ExpenseDate(props){

    const monthValue = props.date.toLocaleString("pt-BR", {month: "long"})
    const dayValue = props.date.toLocaleString("pt-BR", {day: "2-digit"})
    const yearValue = props.date.getFullYear()

    return(
        <div className='expense-date'>
            <div className='expense-date__month'>{monthValue}</div>
            <div className='expense-date__year'>{yearValue}</div>
            <div className='expense-date__day'>{dayValue}</div>
        </div>
    )
}

export default ExpenseDate;
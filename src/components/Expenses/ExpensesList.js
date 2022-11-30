import ExpenseItem from "./ExpenseItem"
import './ExpensesList.css'

const ExpensesList = props => {
    const { items: expenses } = props
    if (expenses.length === 0) {
        return (
            <h2 className="expenses-list__fallback">Found no expenses.</h2>
        )
    }

    return <ul className="expenses-list">
        {expenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            ></ExpenseItem>
        ))}
    </ul>
}

export default ExpensesList
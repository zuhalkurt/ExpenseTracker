import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(expense) {
  return (
    <div className="expenses">
      <ExpenseItem
        title={expense.items[0].title}
        amount={expense.items[0].amount}
        date={expense.items[0].date}
      />
      <ExpenseItem
        title={expense.items[1].title}
        amount={expense.items[1].amount}
        date={expense.items[1].date}
      />
      <ExpenseItem
        title={expense.items[2].title}
        amount={expense.items[2].amount}
        date={expense.items[2].date}
      />
      <ExpenseItem
        title={expense.items[3].title}
        amount={expense.items[3].amount}
        date={expense.items[3].date}
      />
    </div>
  );
}

export default Expenses;

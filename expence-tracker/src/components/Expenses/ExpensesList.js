import ExpenseItem from "./ExpenseItem";
import "../Expenses/ExpensesList.css";

export const ExpensesList = (props) => {
  let expensesContent = <p>No expenses found.</p>;

  if(props.items.length === 0) {
    return <h2 className=""expenses-list__fallback>Found no expenses.</h2>
  }

  return (
    <ul className="espenses-list">
      {props.items.map((expense, index) => (
      <ExpenseItem
        key={index}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
      ))};
    </ul>
  );
};

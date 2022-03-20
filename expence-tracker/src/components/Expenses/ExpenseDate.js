import "../Expenses/ExpenseDate.css";

const ExpenseDate = (expense) => {
  const day = expense.date.toLocaleString("en-EN", { day: "2-digit" });
  const month = expense.date.toLocaleString("en-EN", { month: "long" });
  const year = expense.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};

export default ExpenseDate;

import "../Expenses/ExpenseItem.css";
import Card from "../UI/Card";
import "../Expenses/Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import { ExpensesList } from "./ExpensesList";
import { ExpenseChart } from "./ExpensesChart";

const Expenses = (expense) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expense.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;

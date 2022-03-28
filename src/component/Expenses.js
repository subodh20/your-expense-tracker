import { useState } from "react";
import Card from './Card';
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import './Expenses.css';
const Expenses = (props) => {
  const [filteredYear, setFilteredYear]= useState('2020');
  const handleFilteredYear = (selectedYear)=>{
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter(expense=>{
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return ( 
    <div>
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} 
      onSaveNewFilterYear={handleFilteredYear}/>
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList filteredExpenses={filteredExpenses}/>
    </Card>
    </div>
   );
}
 
export default Expenses;
import { useState } from "react";
import Expenses from "./component/Expenses";
import NewExpense from "./component/NewExpense/NewExpense";
const INITIAL_EXPENSES=[
  {
    id:'e1',
    title:'Toilet Paper',
    amount:95,
    date: new Date(2020,7,14),
  },
  {
    id:'e2',
    title:'New TV',
    amount:1195,
    date: new Date(2020,7,15),
  },
  { 
    id:'e3',
    title:'Car Insurance',
    amount:195,
    date: new Date(2021,7,14),
  },
]
function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  const addExpenseHandler =(expense)=>{
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses];
    });
  }
  return (
    <div>
     <NewExpense onAddExpense={addExpenseHandler}/>
     <Expenses items={expenses}/>
    </div>
      
  );
}
export default App;

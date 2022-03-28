import './ExpensesList.css';
import ExpenseItem from './ExpenseItem'
const ExpensesList = ({filteredExpenses}) => {
  if(filteredExpenses.length === 0){
    return <h2 className="expenses-list__fallback">Fount no expenses</h2>;
  }
  return ( 
    <div>
      <ul className="expenses-list">
        {filteredExpenses.map((item) =>
        <ExpenseItem 
        key ={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
        />
      )}
      </ul>
    </div>
   );
}
 
export default ExpensesList;
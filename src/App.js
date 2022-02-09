import './App.css';
import ExpenseForm from './components/expense-form/expenseForm';
import TranscHistory from './components/TransactionHistory/transcHistory';
import AddTransaction from './components/addTransaction/addTransaction';
// import {ThemeContext } from "./store/store";
import { createContext , useState } from 'react';


export const ThemeContext = createContext();


function App() {
  let  [transactions,setTransaction] = useState([]);
  
  const deleteTransaction = (data)=>{

      setTransaction([...data])
  }

  const getTransaction =  (item)=>{
      // console.log(item);
       setTransaction([...transactions ,item])
  }
  return (
    <ThemeContext.Provider value={{transactions: transactions , getTransaction:getTransaction , deleteTransaction :deleteTransaction}}>
      <div className='fullForm'>
        <ExpenseForm></ExpenseForm>
        <TranscHistory></TranscHistory>
        <AddTransaction></AddTransaction>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

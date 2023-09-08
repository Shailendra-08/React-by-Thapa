
import ExpenseItem from "./components/Expenses/ExpenseItem.js";

// import Expenses from './components/Expenses.js';
import Expenses from './components/Expenses/Expenses.js';
import NewExpense from "./components/NewExpense/NewExpense.js";

import React from 'react';

const App=()=> {

  //  we created a array and then inside that object in javascript {} these is how object is created 

  let expenxe = [
    {
      id: 'e1',
      title: 'School Fees',
      amount: 400,
      date: new Date(2022, 5, 12),

    },

    {
      id: 'e2',
      title: 'Car Insurance',
      amount: 4000,
      date: new Date(2022, 17, 12),

    },

    {
      id: 'e3',
      title: 'Home Expense',
      amount: 50000,
      date: new Date(2022, 12, 12),

    },

    {
      id: 'e4',
      title: 'Chai Expense',
      amount: 600,
      date: new Date(2022, 25, 12),

    }


  ];

  // let expenseDate = new Date(2021,3,28);
  // let expenseTitle = "School Fee";
  // let expenseAmount = 300;


  return (
    <div className="app-container">
     <NewExpense/>
      {/* We use the Props inside the component and passed the variable */}
      <Expenses
        item = {expenxe}
      />
    </div>
  );
}

export default App;

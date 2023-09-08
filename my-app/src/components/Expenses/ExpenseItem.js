import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import React, { useState } from 'react';

import Card from '../UI/Card';

import Expenses from '../Expenses/Expenses';

const ExpenseItem=(props)=> {


    const [newTitle,setNewTitle] = useState("");

    const [title,setTitle] = useState(props.title);

    const clickHandler = ()=>{
        setTitle(newTitle);
    }

    const changeHandler = (event) =>{
        setNewTitle(event.target.value);
    }

   
    return (
        <Card className="expense-item">
            {/* since we are reciving the date as object we use .toISOString() */}
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{ props.title }</h2>
                <div className="expense-item__price">₹{props.amount}</div>
            </div>
        
        </Card>


    );
}

export default ExpenseItem;

import ExpenseItem from "./ExpenseItem";
import ExpenseDate from './ExpenseDate'
import './Expenses.css';
import React from 'react';

import Card from '../UI/Card'


const Expenses = (props) => {
    return (
        <Card className="expenses">
            { console.log("ITem:", props.item)}
            {
               
                props.item.map(
                    expense => (
                        <ExpenseItem 
                            key={ expense.id }
                            date={ expense.date } 
                            title={ expense.title } 
                            amount={ expense.amount } />
                    )
                )
            }



            {/* <ExpenseItem
                date={props.item[1].date}
                title={props.item[1].title}
                amount={props.item[1].amount}
            />
            <ExpenseItem
                date={props.item[2].date}
                title={props.item[2].title}
                amount={props.item[2].amount}
            />
            <ExpenseItem
                date={props.item[3].date}
                title={props.item[3].title}
                amount={props.item[3].amount}
            /> */}
        </Card>

    );
}

export default Expenses;
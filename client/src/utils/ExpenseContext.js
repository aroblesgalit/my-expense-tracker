import React, { createRef } from 'react';
import API from './API';

const ExpenseContext = React.createContext();

// Provider
function ExpenseProvider(props) {

    // function addExpense(data) {
    //     API.addExpense(data)
    // }

    /*********** Expense Add Form ***********/
    const expDateRef = createRef();
    const expCategoryRef = createRef();
    const expDescRef = createRef();
    const expAmountRef = createRef();

    function addExpense(e) {
        e.preventDefault();

        const date = expDateRef.current.value;
        const category = expCategoryRef.current.value;
        const description = expDescRef.current.value;
        const amount = expAmountRef.current.value;

        console.log(date, category, description, amount);
    }
    /*********** Expense Add Form ***********/

    return (
        <ExpenseContext.Provider
            value={{
                expDateRef,
                expCategoryRef,
                expDescRef,
                expAmountRef,
                addExpense
            }}
        >
            {props.children}
        </ExpenseContext.Provider>
    )
}

// Consumer
const ExpenseConsumer = ExpenseContext.Consumer;

export default ExpenseContext;
export { ExpenseProvider, ExpenseConsumer };
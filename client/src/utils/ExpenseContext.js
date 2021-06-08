import React, { createRef, useContext, useEffect, useState } from 'react';
import API from './API';
import UserContext from './UserContext';

const ExpenseContext = React.createContext();

// Provider
function ExpenseProvider(props) {

    const { isLoggedIn, userData } = useContext(UserContext);

    /*********** Expense Table ***********/
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        if (isLoggedIn) {
            getAllExpenses();
        }
    }, [isLoggedIn])

    function getAllExpenses() {
        API.getAllExpenses(userData.id)
            .then(res => {
                let tempExpenses = res.data;
                tempExpenses.forEach((expense, i) => {
                    let currentDate = new Date(expense.date);
                    // let week = currentDate.getDay();
                    let month = currentDate.getMonth();
                    let day = currentDate.getDate();
                    let year = currentDate.getFullYear();
                    tempExpenses[i].date = `${month + 1}/${day + 1}/${year}`
                })
                return tempExpenses;
            })
            .then(res => setExpenses(res))
            .catch(err => console.log(err));
    }
    /*********** END Expense Table ***********/


    /*********** Expense Add Form ***********/
    const [newExpense, setNewExpense] = useState(false);
    const expDateRef = createRef();
    const expCategoryRef = createRef();
    const expDescRef = createRef();
    const expAmountRef = createRef();

    function addExpense(e) {
        e.preventDefault();

        const user = userData.id;
        const date = new Date(expDateRef.current.value);
        const category = expCategoryRef.current.value;
        const description = expDescRef.current.value;
        const amount = expAmountRef.current.value;

        date && category && description && amount ? (
            API.addExpense({
                user,
                date,
                category,
                description,
                amount
            })
                .then(res => {
                    // Show alert that expense has been added
                    // Remove alert after 5 seconds
                    console.log('Expense added...', res);
                    // Get all expenses again to update table
                    return getAllExpenses();
                    // Clear form
                })
                .catch(err => {
                    // Show error message
                    console.log('Oh no! Something wen\'t wrong!', err);
                })
        ) : (
            // Show alert that all fields must be filled in
            console.log('Please fill in all the fields to continue.')
        )
    }
    /*********** END Expense Add Form ***********/


    /*********** Expense Delete ***********/
    function deleteExpense(id) {
        console.log(id);
        API.deleteExpense(id)
            .then(res => {
                // Alert deleted expense
                console.log('Deleted expense: ', res);
                getAllExpenses();
            })
            .catch(err => console.log('Oh no! Something wen\'t wrong!', err));
    }
    /*********** END Expense Delete ***********/


    /*********** Filter ***********/
    const filterRef = createRef();
    /*********** END Filter ***********/

    return (
        <ExpenseContext.Provider
            value={{
                expDateRef,
                expCategoryRef,
                expDescRef,
                expAmountRef,
                addExpense,
                expenses,
                deleteExpense,
                filterRef,
                newExpense
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
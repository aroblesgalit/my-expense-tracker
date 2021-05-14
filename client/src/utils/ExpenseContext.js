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
            API.getAllExpenses()
                .then(res => console.log(res.data))
                .catch(err => console.log(err));
        }
    }, [isLoggedIn])
    /*********** END Expense Table ***********/


    /*********** Expense Add Form ***********/
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
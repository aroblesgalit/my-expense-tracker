import React from 'react';
import API from './API';

const ExpenseContext = React.createContext();

// Provider
function ExpenseProvider(props) {

    return (
        <ExpenseContext.Provider
            value={{

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
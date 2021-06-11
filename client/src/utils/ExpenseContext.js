import React, { createRef, useContext, useEffect, useState } from 'react';
import API from './API';
import UserContext from './UserContext';

const ExpenseContext = React.createContext();

// Provider
function ExpenseProvider(props) {

    const { isLoggedIn, userData } = useContext(UserContext);

    /*********** Expense Table ***********/
    const [expenses, setExpenses] = useState([]);
    const [filteredExpenses, setFilteredExpenses] = useState([]);

    useEffect(() => {
        if (isLoggedIn) {
            getAllExpenses();
        }
    }, [isLoggedIn])

    function getAllExpenses() {
        API.getAllExpenses(userData.id)
            .then(res => {
                let tempExpenses = [...res.data];
                tempExpenses.forEach((expense, i) => {
                    let currentDate = new Date(expense.date);
                    let week = currentDate.getDay();
                    let month = currentDate.getMonth();
                    let day = currentDate.getUTCDate();
                    let year = currentDate.getFullYear();
                    tempExpenses[i].week = week;
                    tempExpenses[i].month = month;
                    tempExpenses[i].day = day;
                    tempExpenses[i].year = year;
                    tempExpenses[i].fullDate = `${month + 1}/${day}/${year}`
                })
                return tempExpenses;
            })
            .then(res => {
                updateTotals(res);
                return setExpenses(res);
            })
            .then(() => onFilterChange())
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
    const [activeFilter, setActiveFilter] = useState('All');
    const filterRef = createRef();
    function onFilterChange() {
        // Get today's date
        let currentDate = new Date();
        let currentMonth = currentDate.getMonth();
        let currentDay = currentDate.getDate();
        let currentYear = currentDate.getFullYear();
        let currentWeek = currentDate.getDay();
        // Get filter option
        const filterOption = filterRef.current.value;
        setActiveFilter(filterOption);
        // Create copy of expenses
        // const tempExpenses = [...expenses];
        // Filter based on selected option
        switch(filterOption) {
            case 'All':
                setFilteredExpenses(expenses);
                break;
            case 'Daily':
                const todayExpenses = expenses.filter(expense => expense.month === currentMonth && expense.day === currentDay && expense.year === currentYear);
                setFilteredExpenses(todayExpenses);
                break;
            case 'Monthly':
                const monthExpenses = expenses.filter(expense => expense.month === currentMonth && expense.year === currentYear);
                setFilteredExpenses(monthExpenses);
                break;
            case 'Yearly':
                const yearExpenses = expenses.filter(expense => expense.year === currentYear);
                setFilteredExpenses(yearExpenses);
                break;
            default:
                setFilteredExpenses(expenses);
        }
    }
    /*********** END Filter ***********/

    /*********** Expense Totals ***********/
    const [totalToday, setTotalToday] = useState(0);
    const [totalWeek, setTotalWeek] = useState(0);
    const [totalMonth, setTotalMonth] = useState(0);
    const [totalYear, setTotalYear] = useState(0);
    function updateTotals(expenses) {
        // Get today's date
        let currentDate = new Date();
        let currentMonth = currentDate.getMonth();
        let currentDay = currentDate.getDate();
        let currentYear = currentDate.getFullYear();
        let currentWeek = currentDate.getDay();
        // Get today's total
        // Get all expenses with today's date
        const todayExpenses = expenses
            .filter(expense => expense.month === currentMonth && expense.day === currentDay && expense.year === currentYear)
            .map(expense => expense.amount);
        // Add up expenses and set totalToday
        const tempTotalToday = todayExpenses.reduce((total, val) => total + val, 0);
        setTotalToday(tempTotalToday);
        // Get this week's total
        // Get all expenses up to today until day of week 0 (sunday)
        const weekExpenses = [];
        for (let i = currentWeek; i >= 0; i--) {
            const tempDate = new Date();
            tempDate.setDate(tempDate.getDate() - i);
            const tempDateMonth = tempDate.getMonth();
            const tempDateDay = tempDate.getDate();
            const tempDateYear = tempDate.getFullYear();
            const tempExpenses = expenses
                .filter(expense => expense.month === tempDateMonth && expense.day === tempDateDay && expense.year === tempDateYear)
                .map(expense => expense.amount);
            weekExpenses.push(...tempExpenses)
        }
        const tempTotalWeek = weekExpenses.reduce((total, val) => total + val, 0);
        setTotalWeek(tempTotalWeek);
        // Get this month's total
        const monthExpenses = expenses
            .filter(expense => expense.month === currentMonth && expense.year === currentYear)
            .map(expense => expense.amount);
        const tempTotalMonth = monthExpenses.reduce((total, val) => total + val, 0);
        setTotalMonth(tempTotalMonth);
        // Get this year's total
        const yearExpenses = expenses
            .filter(expense => expense.year === currentYear)
            .map(expense => expense.amount);
        const tempTotalYear = yearExpenses.reduce((total, val) => total + val, 0);
        setTotalYear(tempTotalYear);
    }
    /*********** END Expense Totals ***********/

    return (
        <ExpenseContext.Provider
            value={{
                expDateRef,
                expCategoryRef,
                expDescRef,
                expAmountRef,
                addExpense,
                filteredExpenses,
                deleteExpense,
                activeFilter,
                filterRef,
                onFilterChange,
                newExpense,
                setNewExpense,
                totalToday,
                totalWeek,
                totalMonth,
                totalYear
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
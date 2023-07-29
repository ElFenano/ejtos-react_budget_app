import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, currency } = useContext(AppContext);
    const [budgetValue, setBudgetValue] = useState(budget);
    const { expenses } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        const newBudgetValue = event.target.value;
        if (newBudgetValue < totalExpenses) {
            alert("You cannot reduce the budget value below than the spending");
            setBudgetValue(totalExpenses);
        } else if (newBudgetValue > 20000) {
            alert("The value cannot exceed the upper limit of $" + 20000);
            setBudgetValue(20000);
        } else {
            setBudgetValue(newBudgetValue);
            dispatch({ type: 'SET_BUDGET', payload: newBudgetValue });
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency} <input
                required='required'
                type='number'
                id='budget'
                value={budgetValue}
                onChange={handleBudgetChange}
                style={{ width: '150px' }}
            /></span>
        </div>
    );
};

export default Budget;
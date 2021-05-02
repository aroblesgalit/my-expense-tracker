import React from 'react';
import './input.css';

function Input() {
    return (
        <div>
            <label for='fname'>Filter</label>
            <select name='fname'>
                <option value='all'>All</option>
                <option value='all'>Weekly</option>
                <option value='all'>Monthly</option>
                <option value='all'>Annualy</option>
            </select>
        </div>
    )
}

export default Input;
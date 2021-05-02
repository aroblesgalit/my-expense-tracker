import React from 'react';
import './table.css';

function Table() {
    return (
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>5/2/2021</td>
                    <td>Grocery</td>
                    <td>Weekly grocery</td>
                    <td>$39.94</td>
                </tr>
                <tr>
                    <td>5/2/2021</td>
                    <td>Grocery</td>
                    <td>Weekly grocery</td>
                    <td>$39.94</td>
                </tr>
                <tr>
                    <td>5/2/2021</td>
                    <td>Grocery</td>
                    <td>Weekly grocery</td>
                    <td>$39.94</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table;
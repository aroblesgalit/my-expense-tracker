import React from 'react';
import './table.css';

function Table({ headings, rows }) {
    return (
        <table>
            <thead>
                <tr>
                    {
                        headings.map((heading, i) => <th key={`${i}-${heading}`}>{heading}</th>)
                    }
                </tr>
            </thead>
            <tbody>
                {
                    rows && rows.map((row, i) => (
                        <tr key={`${i}-${row.date}-${row.category}-${row.description}`}>
                            <td>{row.date}</td>
                            <td>{row.category}</td>
                            <td>{row.description}</td>
                            <td>{row.amount}</td>
                        </tr>
                    ))
                }
                {/* <tr>
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
                    <td>5/3/2021</td>
                    <td>Auto &amp; Transport</td>
                    <td>Auto insurance</td>
                    <td>$130.42</td>
                </tr> */}
            </tbody>
        </table>
    )
}

export default Table;
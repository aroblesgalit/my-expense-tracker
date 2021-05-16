import React from 'react';
import './table.css';

function Table({ headings, rows, handleDelete }) {
    return (
        <table>
            <thead>
                <tr>
                    {
                        headings.map((heading, i) => <th key={`${i}-${heading}`}>{heading}</th>)
                    }
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    rows && rows.map((row, i) => (
                        <tr key={`${i}-${row.date}-${row.category}-${row.description}`}>
                            <td>{row.date}</td>
                            <td>{row.category}</td>
                            <td>{row.description}</td>
                            <td>${row.amount}</td>
                            <td>
                                <button>Edit</button>&nbsp;
                                <button onClick={() => handleDelete(row._id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Table;
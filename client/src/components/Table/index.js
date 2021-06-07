import React from 'react';
// import './table.css';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@material-ui/core';

function TableComponent({ headings, rows, handleDelete }) {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        {
                            headings.map((heading, i) => (
                                <TableCell key={`${i}-${heading}`}>{heading}</TableCell>
                            ))
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    
                </TableBody>
            </Table>
        </TableContainer>
        // <table>
        //     <thead>
        //         <tr>
        //             {
        //                 headings.map((heading, i) => <th key={`${i}-${heading}`}>{heading}</th>)
        //             }
        //             <th></th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         {
        //             rows && rows.map((row, i) => (
        //                 <tr key={`${i}-${row.date}-${row.category}-${row.description}`}>
        //                     <td>{row.date}</td>
        //                     <td>{row.category}</td>
        //                     <td>{row.description}</td>
        //                     <td>${row.amount}</td>
        //                     <td>
        //                         <button>Edit</button>&nbsp;
        //                         <button onClick={() => handleDelete(row._id)}>Delete</button>
        //                     </td>
        //                 </tr>
        //             ))
        //         }
        //         <tr>
        //             <td colSpan='5'>
        //                 1-10 of 12
        //             </td>
        //         </tr>
        //     </tbody>
        // </table>
    )
}

export default TableComponent;
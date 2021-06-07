import React, { useState } from 'react';
// import './table.css';
import { TableContainer, Table, TableHead, TableBody, TableFooter, TableRow, TableCell, Paper, TablePagination } from '@material-ui/core';

function TableComponent({ headings, rows, handleDelete }) {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (e, newPage) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = e => {
        setRowsPerPage(+e.target.value);
        setPage(0);
    }

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
                    {
                        rows && rows.map((row, i) => (
                            <TableRow key={`${i}-${row.date}-${row.category}-${row.description}`}>
                                <TableCell>{row.date}</TableCell>
                                <TableCell>{row.category}</TableCell>
                                <TableCell>{row.description}</TableCell>
                                <TableCell>{row.amount}</TableCell>
                                <TableCell>
                                    <button>Edit</button>&nbsp;
                                    <button onClick={() => handleDelete(row._id)}>Delete</button>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 50]}
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                        // ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
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
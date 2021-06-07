import React, { useState } from 'react';
import { TableContainer } from './table.styles';
import { Table, TableHead, TableBody, TableFooter, TableRow, TableCell, Paper, TablePagination } from '@material-ui/core';
import { EditOutlined, DeleteOutlined } from '@material-ui/icons';

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
                                    <EditOutlined fontSize='small' />
                                    <DeleteOutlined fontSize='small' onClick={() => handleDelete(row._id)} />
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
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    )
}

export default TableComponent;
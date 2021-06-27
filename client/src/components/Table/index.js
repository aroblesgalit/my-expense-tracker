import React, { useState } from 'react'
import {
  useStyles,
  TableContainer,
  TableHeadCell,
  TablePagination
} from './table.styles'
import {
  Table,
  TableHead,
  TableBody,
  TableFooter,
  TableRow,
  TableCell,
  Paper
} from '@material-ui/core'
import { EditOutlined, DeleteOutlined } from '@material-ui/icons'

function TableComponent ({ headings, rows, handleDelete }) {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleChangePage = (e, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = e => {
    setRowsPerPage(+e.target.value)
    setPage(0)
  }

  const classes = useStyles()

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {headings.map((heading, i) => (
              <TableHeadCell key={`${i}-${heading}`}>{heading}</TableHeadCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows &&
            rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, i) => (
                <TableRow
                  className={classes.row}
                  key={`${i}-${row.fullDate}-${row.category}-${row.description}`}
                >
                  <TableCell>{row.fullDate}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>${row.amount.toFixed(2)}</TableCell>
                  <TableCell align='right'>
                    {/* <EditOutlined fontSize='small' /> */}
                    <DeleteOutlined
                      fontSize='small'
                      onClick={() => handleDelete(row._id)}
                    />
                  </TableCell>
                </TableRow>
              ))}
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

export default TableComponent

import React from 'react'
import Box from '@material-ui/core/Box'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
// import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import {
  useStyles,
  BreakdownRow,
  TableCell,
  TableHeadCell
} from './collapsibleTable.styles'

function Row (props) {
  const { row } = props
  const [open, setOpen] = React.useState(false)
  const classes = useStyles()

  return (
    <React.Fragment>
      <TableRow>
        <TableCell>
          {row.total > 0 && (
            <IconButton
              aria-label='expand row'
              size='small'
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          )}
        </TableCell>
        <TableCell component='th' scope='row'>
          {row.month === 0 && 'January'}
          {row.month === 1 && 'February'}
          {row.month === 2 && 'March'}
          {row.month === 3 && 'April'}
          {row.month === 4 && 'May'}
          {row.month === 5 && 'June'}
          {row.month === 6 && 'July'}
          {row.month === 7 && 'August'}
          {row.month === 8 && 'September'}
          {row.month === 9 && 'October'}
          {row.month === 10 && 'November'}
          {row.month === 11 && 'December'}
        </TableCell>
        <TableCell>${row.total.toFixed(2)}</TableCell>
      </TableRow>
      {row.expenses.length > 0 && (
        <BreakdownRow>
          <TableCell style={{ padding: 0 }} colSpan={3}>
            <Collapse in={open} timeout='auto' unmountOnExit>
              <Box margin={1}>
                <Typography variant='h6' gutterBottom component='div'>
                  Breakdown
                </Typography>
                <Table size='small' aria-label='purchases'>
                  <TableHead>
                    <TableRow>
                      <TableHeadCell className={classes.breakdownLabel}>
                        Date
                      </TableHeadCell>
                      <TableHeadCell className={classes.breakdownLabel}>
                        Category
                      </TableHeadCell>
                      <TableHeadCell className={classes.breakdownLabel}>
                        Description
                      </TableHeadCell>
                      <TableHeadCell
                        className={classes.breakdownLabel}
                        align='right'
                      >
                        Amount
                      </TableHeadCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.expenses.length > 0 &&
                      row.expenses.map(expense => (
                        <TableRow key={`${expense._id}-${expense.date}`}>
                          <TableCell
                            className={classes.breakdownValue}
                            component='th'
                            scope='row'
                          >
                            {expense.fullDate}
                          </TableCell>
                          <TableCell className={classes.breakdownValue}>
                            {expense.category}
                          </TableCell>
                          <TableCell className={classes.breakdownValue}>
                            {expense.description}
                          </TableCell>
                          <TableCell
                            className={classes.breakdownValue}
                            align='right'
                          >
                            ${expense.amount.toFixed(2)}
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </BreakdownRow>
      )}
    </React.Fragment>
  )
}

export default function CollapsibleTable ({ rows }) {
  return (
    <Table aria-label='collapsible table'>
      <TableHead>
        <TableRow>
          <TableCell size='small' />
          <TableHeadCell>Month</TableHeadCell>
          <TableHeadCell>Total</TableHeadCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, i) => (
          <Row key={`${i}-${row.month}/${row.year}`} row={row} />
        ))}
      </TableBody>
    </Table>
  )
}

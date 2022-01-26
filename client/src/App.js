import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Expenses from './pages/Expenses'
import Dashboard from './pages/Dashboard'
import Income from './pages/Income'
import Header from './components/Header'
import Signup from './pages/Signup'
import Login from './pages/Login'
import ExpenseForm from './components/ExpenseForm'
import { UserProvider } from './utils/UserContext'
import { ExpenseProvider } from './utils/ExpenseContext'
import { HeaderProvider } from './utils/HeaderContext'
import PublicRoute from './components/PublicRoute'
import ProtectedRoute from './components/ProtectedRoute'
import { Grid } from '@material-ui/core'

function App () {
  return (
    <UserProvider>
      <HeaderProvider>
        <ExpenseProvider>
          <Router>
            <Grid container>
              <Header />
              <Switch>
                <Route path='/signup'>
                  <PublicRoute component={Signup} />
                </Route>
                <Route path='/login'>
                  <PublicRoute component={Login} />
                </Route>
                <Route path='/expenses'>
                  <ExpenseForm />
                  <ProtectedRoute component={Expenses} />
                </Route>
                <Route path='/dashboard'>
                  <ProtectedRoute component={Dashboard} />
                </Route>
                <Route path='/income'>
                  <ProtectedRoute component={Income} />
                </Route>
                <Route exact path='/'>
                  <PublicRoute component={Login} />
                </Route>
              </Switch>
            </Grid>
          </Router>
        </ExpenseProvider>
      </HeaderProvider>
    </UserProvider>
  )
}

export default App

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Expenses from './pages/Expenses';
import Header from './components/Header';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { UserProvider } from './utils/UserContext';
import { ExpenseProvider } from './utils/ExpenseContext';
import PublicRoute from './components/PublicRoute';
import ProtectedRoute from './components/ProtectedRoute';
import { Grid } from '@material-ui/core';

function App() {
  return (
    <UserProvider>
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
                <ProtectedRoute component={Expenses} />
              </Route>
              <Route exact path='/'>
                <PublicRoute component={Login} />
              </Route>
            </Switch>
          </Grid>
        </Router>
      </ExpenseProvider>
    </UserProvider>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Expenses from './pages/Expenses';
import Header from './components/Header';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Switch>
        <Route path='/signup'>
          <Signup />
        </Route>
        <Route path='/expenses'>
          <Expenses />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

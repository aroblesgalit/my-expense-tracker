import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Expenses from './pages/Expenses';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/expenses'>
          <Expenses />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home';
import AppBar from './Components/AppBar';

function App() {
  return (
    <Router>
      <AppBar/>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;

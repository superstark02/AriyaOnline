import React from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home';
import MyAppBar from './Components/AppBar';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <MyAppBar/>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;

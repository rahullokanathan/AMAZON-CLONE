import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch , Route} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import './Header.css';

function App() {
  return (
    <Router>
<div className="App">
  <Switch>
    <Route path="/checkout">
      <h1>checkout</h1>
      </Route>
    <Route path="/login">
      <h1>Login Page</h1>
    </Route>

    <Route path="/">
      <Header />
      <Home />
      </Route>
   </Switch>
      </div>
    </Router>
    
  );
}

export default App;

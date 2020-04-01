import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from "./containers/Home";

function App() {
  return (
    <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
    </Switch>
  );
}

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './containers/Home';
import Header from './components/Header/Header';
import GlobalStyle from "./globalyStyle";

function App() {
    return (
        <>
            <GlobalStyle/>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
            </Switch>
        </>
    );
}

export default App;

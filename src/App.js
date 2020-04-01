import React from 'react';
import {Switch, Route, NavLink, Link} from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import Header from './components/Header/Header';
import GlobalStyle from "./globalyStyle";
import StocksContainer from "./containers/StocksContainer";
import {Navigation} from "./components/styledComponents";

function App() {
    return (
        <>
            <GlobalStyle/>
            <Header/>
            <Navigation>
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/stocks">Stocks</NavLink>
            </Navigation>
            <section>
                <Switch>
                    <Route exact path="/">
                        <HomeContainer/>
                    </Route>
                    <Route exact path="/stocks">
                        <StocksContainer/>
                    </Route>
                </Switch>
            </section>
        </>
    );
}

export default App;

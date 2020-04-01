import React from 'react';
import {Switch, Route, NavLink} from 'react-router-dom';
import GlobalStyle from '../globalyStyle';
import StocksContainer from './StocksContainer/StocksContainer';
import HomeContainer from './HomeContainer/HomeContainer';
import Header from '../components/Header/Header';
import {Navigation} from '../components/styledComponents';

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

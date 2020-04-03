import React from 'react';
import {Switch, Route, NavLink} from 'react-router-dom';
import GlobalStyle from '../globalStyle';
import StocksContainer from './StocksContainer/StocksContainer';
import HomeContainer from './HomeContainer/HomeContainer';
import Header from '../components/Header/Header';
import {Navigation} from '../components/styledComponents';
import {Container, Row, Col} from 'reactstrap';
import NewsContainer from './NewsContainer/NewsContainer';
import Theme from './theme';

function App() {
    return (
        <Theme>
            <GlobalStyle/>
            <Container>
                <Row>
                    <Col>
                        <Header/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Navigation>
                            <NavLink exact to="/">Home</NavLink>
                            <NavLink to="/stocks">Stocks</NavLink>
                            <NavLink to="/news">News</NavLink>
                        </Navigation>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <section>
                            <Switch>
                                <Route exact path="/">
                                    <HomeContainer/>
                                </Route>
                                <Route exact path="/stocks">
                                    <StocksContainer/>
                                </Route>
                                <Route exact path="/news">
                                    <NewsContainer/>
                                </Route>
                            </Switch>
                        </section>
                    </Col>
                </Row>
            </Container>
        </Theme>
    );
}

export default App;

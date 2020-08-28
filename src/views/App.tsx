import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Main';
import './App.css';

const App: FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;

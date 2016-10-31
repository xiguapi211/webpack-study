import React from 'react';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';

import Home from './home';

export default (
    <Router history={hashHistory}>
        <Route path="/">
            <IndexRedirect to="home" />
            <Route path="home" title="首页" component={Home} />
        </Route>
    </Router>
);
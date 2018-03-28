// @flow

import React from 'react';
import {render} from 'react-dom';
// import './components/iconfont/iconfont.css';
import {Switch, Redirect, Router, Route} from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
import IndexModule from './pages/index';
import HeaderModule from './component/header';
const history = createHashHistory();

let router = <Router history={history}>
    <div>
        <Route component={HeaderModule}/>
        <Route path="/" component={IndexModule}/>
    </div>
</Router>;
render(router, document.querySelector('#root'));

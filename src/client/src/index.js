import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route } from 'react-router-dom';

import Login from './components/login'
import Signup from './components/signup'

const App = () => (
    <BrowserRouter>
        <React.Fragment>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>

        </React.Fragment>
    </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));


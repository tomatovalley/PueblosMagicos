import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route } from 'react-router-dom';

import Login from './components/login'

const App = () => (
    <BrowserRouter>
        <React.Fragment>
            <Route path="/login" component={Login}/>
        </React.Fragment>
    </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));


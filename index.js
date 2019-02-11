import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/home'

const App = () => (
    <BrowserRouter>
        <React.Fragment>
            <Route path="/" component={Home}/>
        </React.Fragment>
    </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route , Switch } from 'react-router-dom';
import { createStore } from 'redux';


<<<<<<< HEAD
import Login from './components/login'
import Signup from './components/signup'

const App = () => (
    <BrowserRouter>
        <React.Fragment>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>

        </React.Fragment>
    </BrowserRouter>
=======

import Profile from './components/profile';
import Tecate from './components/Tecate';
import PostForm from './components/global/postForm';
import Feed from './components/feed';
import Login from './components/login';
import Signup from './components/signup';


import userInf from './components/reducers';

const store = createStore(userInf)

const App = (
	<Provider store = { store }>
	    <BrowserRouter>
	        <Switch>
	            <Route exact path="/" component={Login}/>
	            <Route path="/signup" component={Signup} />
		        <Route path="/profile" component={Profile} />
		        <Route path="/tecate" component={Tecate} />
		        <Route path="/post" component={PostForm} />
		        <Route path="/feed" component={Feed} />
	        </Switch>
	    </BrowserRouter>
    </Provider>
>>>>>>> 351b22a0c0972d6fe9156b06b1670aa1a239138f
);

ReactDOM.render(App, document.getElementById('root'));


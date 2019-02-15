import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route , Switch } from 'react-router-dom';



import Profile from './components/profile';
import Tecate from './components/Tecate';
import PostForm from './components/global/postForm';
import Feed from './components/feed';
import Login from './components/login';
import Signup from './components/signup';

import store from './components/store/store'

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
);

ReactDOM.render(App, document.getElementById('root'));


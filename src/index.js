import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Signup from './Signup';
import Profile from './Profile';
import Local from './Local';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route} from 'react-router-dom';


const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/signup" component={Signup} />
        <Route path="/profile" component={Profile} />
        <Route path="/local" component={Local} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'))
//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

import { Meteor } from 'meteor/meteor';
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

import App from '../imports/components/App'
import SignupFirst from '../imports/components/user/signup_first'
import Signin from '../imports/components/user/signin'

Meteor.startup(() => {
    ReactDOM.render(
        <Router>
            <div>
                <Route path='/' component={App} />
                <Route path='/signup' component={SignupFirst} />
                <Route path='/signin' component={Signin} />
            </div>
        </Router>,
        document.getElementById('app')
    )
})

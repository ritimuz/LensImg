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

import App from './components/App'
import SignupFirst from './components/user/signup_first'
import Signin from './components/user/signin'

Meteor.startup(() => {
    ReactDOM.render(
        <Router>
            <App />
        </Router>,
        document.getElementById('app')
    )
})

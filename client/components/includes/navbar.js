import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    onLogoutClick = (event) => {
        Meteor.logout(function(err) {
            console.log(err);
        })
    }
    render() {
        let Navlink
        if(!Meteor.userId()) {
            Navlink = (
                <div>
                    <li className="nav-item">
                        <Link to='/signin' className='nav-link'>Signin</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/signup' className='nav-link'>Signup</Link>
                    </li>
                </div>
            )
        } else {
            Navlink = (
            <div>
                <li className="nav-item">
                    <Link to='/signout' className='nav-link' onClick={this.onLogoutClick}>Signout</Link>
                </li>
            </div>
        )

        }
        return (
            <header className="header clearfix cd-auto-hide-header">
                <nav className="cd-primary-nav">
                    <ul className="nav nav-pills float-right cd-navigation">
                        {Navlink}
                    </ul>
                </nav>
                <Link to='/'><div className="logo"><img src="/logo.svg" alt="Logo" /></div></Link>
            </header>
        )
    }
}

export default Navbar

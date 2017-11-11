import React, { Component } from 'react'
import SignupBanner from './signup_banner'
import Signin from './signin'
import Signup from './signup'

class Form extends Component {
    render() {
        render(
            <div className='container'>
                <div className='row'>
                    <div className='signup__container'>
                        <SignupBanner />
                        <Signin />
                        <Signup />
                    </div>
                </div>
            </div>
        )
    }
}

export default Form

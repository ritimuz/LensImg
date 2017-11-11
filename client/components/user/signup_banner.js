import React, { Component } from 'react'

class SignupBanner extends Component {
    render() (
        return (
            <div className="col-md-6 container__child signup__thumbnail">
                <div className="thumbnail__logo">
                    <img src='/logo.svg' />
                    <h1 className="logo__text">LensImg</h1>
                </div>
                <div className="thumbnail__content text-center">
                    <h1 className="heading--primary">Welcome to LensImg.</h1>
                    <h2 className="heading--secondary">Are you ready to join the LensImg?</h2>
                </div>
                <div className="signup__overlay"></div>
            </div>
        )
    )
}

export default SignupBanner

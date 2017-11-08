import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
'../../../imports/collections/index'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Signin extends Component {
    state = {
        email: '',
        password: ''
    }
    onInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        Meteor.loginWithPassword(this.state.email, this.state.password)
    }
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='signup__container'>
                        <div className="col-md-6 container__child signup__thumbnail">
                            <div className="thumbnail__logo">
                                <img src='/logo.svg' />
                                <h1 className="logo__text">LensImg</h1>
                            </div>
                            <div className="thumbnail__content text-center">
                                <h1 className="heading--primary">Welcome to LensImg.</h1>
                                <h2 className="heading--secondary">Are you ready to join the LensImg?</h2>
                            </div>
                            <div className="thumbnail__links">
                                <ul className="list-inline m-b-0 text-center">
                                    <li><a href="http://alexdevero.com/" target="_blank"><i className="fa fa-globe"></i></a></li>
                                    <li><a href="https://www.behance.net/alexdevero" target="_blank"><i className="fa fa-behance"></i></a></li>
                                    <li><a href="https://github.com/alexdevero" target="_blank"><i className="fa fa-github"></i></a></li>
                                    <li><a href="https://twitter.com/alexdevero" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                </ul>
                            </div>
                            <div className="signup__overlay"></div>
                        </div>
                        <div className='container__child signup__form col-md-6'>
                            <Form onSubmit={this.onFormSubmit} className='signin-form'>
                                <FormGroup>
                                    <Label for='email'>Email</Label>
                                    <Input type='text' name='email' id='email' onChange={this.onInputChange} value={this.state.username} className='form-control-lg input-control' placeholder='Email'/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for='password'>Password</Label>
                                    <Input type='password' name='password' id='password' onChange={this.onInputChange} value={this.state.password} className='form-control-lg input-control' placeholder='******'/>
                                </FormGroup>
                                <Button className='btn-form'>Submit</Button>
                                <Link to='/signup' className='already-member'>Want to register with Us</Link>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signin

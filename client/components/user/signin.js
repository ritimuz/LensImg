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
        )
    }
}

export default Signin

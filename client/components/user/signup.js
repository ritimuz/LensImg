import { Meteor } from 'meteor/meteor'
import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import { withTracker } from 'meteor/react-meteor-data';
import { Bert } from 'meteor/themeteorchef:bert'
import Profile from '../../../imports/collections/index'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Signup extends Component {
    state = {
        email: '',
        username: '',
        password: '',
        usernameError: null,
        emailError: null
    }
    onInputBlur = (event) => {
        Meteor.call('findUsername', this.state.username, (error, result) => {
            if(!error) {
                if(!result) {
                    // username is not available with us
                    this.setState({
                        usernameError: 'Username is already taken'
                    })
                } else {
                    this.setState({
                        usernameError: ''
                    })
                }
            }
        })
    }
    onEmailBlur = (event) => {
        Meteor.call('findEmail', this.state.email, (error, result) => {
            if(!error) {
                if(!result) {
                    // username is not available with us
                    this.setState({
                        emailError: 'Email is already registered with us'
                    })
                } else {
                    this.setState({
                        emailError: ''
                    })
                }
            }
        })
    }
    onInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onFormSubmit = (event) => {
        event.preventDefault()
        Accounts.createUser(this.state, (error) => {
            if(error) {
                Bert.alert({
                  title: 'Authentication Error',
                  message: error.reason,
                  type: 'danger',
                  style: 'growl-top-right',
                });
            } else {
                Meteor.loginWithPassword(this.state.email, this.state.password, (error) => {
                    if(!error) {
                        this.setState({
                            username: '',
                            email: '',
                            password: ''
                        })
                    }
                })
            }
        })
    }
    render() {
        return (
            <div className='container__child signup__form col-md-6'>
                <Form onSubmit={this.onFormSubmit} autoComplete='off'>
                    <FormGroup className="form-input-div">
                        <Label for='email'>Email</Label>
                        <Input type='email' name='email' id='name' className='form-control-lg input-control' onChange={this.onInputChange} value={this.state.email} placeholder='Email' onBlur = {this.onEmailBlur}/>
                        <small className='avaliablity-error'>{this.state.emailError}</small>
                    </FormGroup>
                    <FormGroup>
                        <Label for='username'>Username</Label>
                        <Input type='text' name='username' id='username' onChange={this.onInputChange} value={this.state.username} className='form-control-lg input-control' placeholder='Username' onBlur = {this.onInputBlur}/>
                        <small className='avaliablity-error'>{this.state.usernameError}</small>
                    </FormGroup>
                    <FormGroup>
                        <Label for='password'>Password</Label>
                        <Input type='password' name='password' id='password' onChange={this.onInputChange} value={this.state.password} className='form-control-lg input-control' placeholder='******'/>
                    </FormGroup>
                    <Button className='btn-form'>Submit</Button>
                    <Link to='/signin' className='already-member'>I am already a member</Link>
                </Form>
            </div>
        )
    }
}

extends default Signup

import React, { Component } from 'react'

class ProfileSignup extends Component {
    render() {
        return (
            <div>
                <form>
                    <input type='text' name='name' /><br /><br />
                    <input type='text' name='email' /><br /><br />
                    <input type='text' name='comment' /><br /><br />
                    <input type='submit' value='Submit' />
                </form>
            </div>
        )
    }
}

export default ProfileSignup

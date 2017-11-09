import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

Meteor.methods({
    'findEmail': function(email) {
        const accountEmail = Accounts.findUserByEmail(email)
        if(!accountEmail) {
            return true;
        } else {
            return false;
        }
    },
    'findUsername': function(username) {
        const accountUsername = Accounts.findUserByUsername(username)
        if(accountUsername) {
            return false
        } else {
            return true
        }
    }
})

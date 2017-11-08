import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'

Meteor.methods({
    'account-signup': function(data) {
        const username = data.username
        const email = data.email
        const password = data.password
        console.log(email);
        Accounts.createUser({
            username,
            email,
            password
        })
    },
    'account-signin': function(data) {
        const email = data.email
        const password = data.password
        console.log(email, password);
        Meteor.loginWithPassword(email, password)
    },
    'account-logout': function() {
        Meteor.logout(function(err) {
            console.log(err);
        })
    }
})

export const Profile = new Mongo.Collection('profile')

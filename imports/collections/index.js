import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import { Accounts } from 'meteor/accounts-base'


Meteor.methods({
    'sendverificationemail': function(data) {
        let userId = Meteor.userId();
        if(userId) {
            Accounts.sendVerificationEmail(userId);
        }
    },
})


export const Profile = new Mongo.Collection('profile')

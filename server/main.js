import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email'
/*
    need to import collection/index.js for creating the mongo collection
*/
// custom Collections import
process.env.MONGO_URL = 'mongodb://dodo:dodo@ds139904.mlab.com:39904/dodo'
import { Profile } from '../imports/collections/index'
Meteor.startup(() => {
    process.env.MAIL_URL = 'smtps://ninnijs:nirajgeorgianN9@smtp.sendgrid.net'
    Accounts.emailTemplates.siteName = "My Website Name";
    Accounts.emailTemplates.from = "My Website Name <noreply@mywebsite.com>";
    Accounts.emailTemplates.resetPassword.subject = function(user) {
      return "How to reset your password for My Website Name";
    };

    Email.send({
      from: "My Website Name <noreply@mywebsite.com>",
      to: "nirajgeorgian01@gmail.com",
      subject: "noreply@mywebsite.com | You have received a reply to your enquiry",
      html: "Here is <b>some</b> text!"
    });
})

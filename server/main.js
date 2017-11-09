import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email'
// import './accounts/email'
/*
    need to import collection/index.js for creating the mongo collection
*/
// custom Collections import
import { Profile } from '../imports/collections/index'
Meteor.startup(() => {
    process.env.MAIL_URL = 'smtp://postmaster%40sandbox636bc4d663e8486ea5530a6fed579ea6.mailgun.org:77fa2401fd200b8fe911650aa2249a98@smtp.mailgun.org:587'
    // Email.send({
    //     to: 'nirajgeorgian01@gmail.com',
    //     from: 'admin@dodo.com',
    //     subject: 'dodo',
    //     text: 'dodo lives in email'
    // })
})

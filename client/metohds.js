// server/methods.js
import { Meteor } from 'meteor/meteor';
import { Accounts } from '../imports/collections';

Meteor.methods({
    'accounts.insert' (accountNumber, balance) {
        // Insert into the 'accounts' collection
        return Accounts.insert({ accountNumber, balance });
    },

    'accounts.getAll' () {
        // Retrieve all accounts from the 'accounts' collection
        return Accounts.find().fetch();
    },
});
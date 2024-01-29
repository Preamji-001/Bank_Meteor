import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '/imports/ui/App';

// client/main.js
import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Accounts } from '../imports/collections';

Template.registerHelper('accounts', () => {
  // Call the server-side method to get all accounts
  return Meteor.callPromise('accounts.getAll');
});

Template.events({
  'click #registerBtn'(event, template) {
    const email = template.find('#email').value;
    const balance = template.find('#balance').value;

    // Call the server-side method to insert a new account
    Meteor.call('accounts.insert', email, balance);
  },
});

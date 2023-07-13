// test.js

const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const { expect } = require('chai');

Given('a SQL connection is established', function () {
  // Implementation for establishing a SQL connection
});

When('a query is executed with {string}', function (query) {
  return cy.task('queryDb', query);
});

Then('the result should contain {int} records', function (expectedCount) {
  return cy.task('queryDb', 'SELECT * FROM customers')
    .then(count => {
      expect(count).to.have.lengthOf(expectedCount);
    });
});

Then('the log should display {string}', function (expectedLog) {
  return cy.task('queryDb', 'SELECT * FROM customers')
    .then(count => {
      cy.log('DB records count is => ' + count);
      expect(count).to.equal(expectedLog);
    });
});

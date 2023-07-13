const { Given, When, Then } = require('cucumber');

Given('Actor is on the login page', function () {
  cy.visit('https://notionpress.com/en/ind/login');
  cy.get('.d-inline-block.col-lg-12.text-center').invoke('hide');
});

When('Actor will my email as {string}', function (email) {
  cy.get('input[name="email"]').type(email, { force: true });
});

When('Actor will my password as {string}', function (password) {
  cy.get('input[name="password"]').type(password, { force: true });
});

When('Actor click on the login button', function () {
  cy.get('#login').click({ force: true });
});

Then('Actor should perform assertions for successful login if applicable', function () {
  // Add assertions for successful login if applicable
});

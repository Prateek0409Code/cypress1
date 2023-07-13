const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given('Actor is on the LinkedIn login page', function () {
    
  // Cypress code to visit the LinkedIn login page
  cy.visit('https://www.linkedin.com/login');
});

When('Actor enter my email or phone as {string}', function (emailOrPhone) {
  // Cypress code to enter the email or phone number in the input field
  const typingDelay = 5000;
  cy.get('#username').invoke('val','prateekpandey483@gmail.com');
});

When('Actor enter my password as {string}', function (password) {
  // Cypress code to enter the password in the password input field
  
  cy.get('#password').click().invoke('val','Psp@12345',{ force: true });
});

When('Actor click the {string} button', function (buttonText) {
  // Cypress code to click the specified button
  cy.contains('Sign up').should('be.visible').click();
});

Then('Actor should be redirected to the LinkedIn feed', function () {
  // Cypress code to assert that the login was successful
  cy.url().should('include', '/feed');
  cy.contains('Feed');
});

When('Actor click on my profile', function () {
  // Cypress code to click on the profile
  cy.get('#ember26').click();
});

Then('Actor should be redirected to my LinkedIn profile', function () {
  // Cypress code to assert that the profile page is loaded
  cy.url().should('include', '/in');
});

When('Actor click on the {string} button', function (buttonText) {
  // Cypress code to click the specified button
  cy.get('#navigation-add-edit-deeplink-add-skills').click();
});

Then('Actor should be redirected to the skills editing page', function () {
  // Cypress code to assert that the skills editing page is loaded
  cy.url().should('include', '/edit/forms/skills/new/?profileFormEntryPoint=PROFILE_SECTION');
});

When('Actor click the {string} button', function (buttonText) {
  // Cypress code to click the specified button
  cy.get('.artdeco-button__text').click();
});

Then('Actor should be redirected back to my LinkedIn profile', function () {
  // Cypress code to assert that the profile page is loaded
  cy.url().should('include', '/in');
});

const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
Given('Actor is on the YouTube homepage', function () {
    cy.visit('https://www.youtube.com/');
  });
  
  When('Actor enters textes to be searched', function () {
    // Perform a specific action on the page
    cy.get('#search').invoke('val', 'hello');
  });
  
  Then('Actor should observe the result', function () {
    // Assert the expected result
    cy.url().should('eq', 'https://www.youtube.com/results?search_query=hello');
  });
  
  // Additional step definitions can be added here
  
  module.exports = { Given, When, Then };
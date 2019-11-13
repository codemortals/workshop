import { Then } from 'cypress-cucumber-preprocessor/steps';

Then(/^the css selector "([^"]*)" will contain "([^"]*)"$/, (selector, content) => {
  cy.get(selector).contains(content);
});

import { Given } from 'cypress-cucumber-preprocessor/steps';

Given(/^open the website$/, () => {
  cy.visit('/');
});

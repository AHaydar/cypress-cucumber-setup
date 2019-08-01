/// <reference types="Cypress" />
import { Given, When } from 'cypress-cucumber-preprocessor/steps';

Given('I am on the google page', () => {
    cy.visit('/');
});


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('loginWithUser', () => {
    const password = 's3cret';
    const users = [ 'Alexis_Leuschke', 'Sandrine_Wyman', 'Frida.Hermann16', 'Gus.Mante75', 'Juana16'];
    cy.visit('/')
    
    cy.request('POST','/login', {type: "LOGIN", username: "Alexis_Leuschke", password: "s3cret"});

 })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

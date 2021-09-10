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
Cypress.Commands.add('loginViaRequest', () => {
    const password = 's3cret';
    const users = [ 'Alexis_Leuschke', 'Sandrine_Wyman', 'Frida.Hermann16', 'Gus.Mante75', 'Juana16'];

    cy.intercept("POST", "/login").as("loginUser");
    // cy.intercept("GET", "/checkAuth").as("getUserProfile");
    cy.visit('/signin').then(()=>{
        cy.url().should('include', '/signin')
    })
    cy.window().then((win) => win.authService.send("LOGIN", { username: users[0], password: password }));
    cy.wait("@loginUser").then((loginUser) =>{
        cy.log(`logged in with userId: ${loginUser.response.body.user.id}`);
        cy.url().should('not.include', '/signin');
        cy.get('[data-test=app-name-logo]').should('be.visible');
    });
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

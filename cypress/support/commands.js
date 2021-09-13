// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import "@testing-library/cypress/add-commands";

Cypress.Commands.add("loginViaRequest", () => {
  const password = "s3cret";
  const users = [
    "Katharina_Bernier",
    "Tavares_Barrows",
    "Allie2",
    "Giovanna74",
    "Jessyca.Kuhic",
  ];
  cy.clearLocalStorage();
  cy.clearCookies();
  cy.intercept("POST", "/login").as("loginUser");
  // cy.intercept("GET", "/checkAuth").as("getUserProfile");
  cy.visit("/signin").then(() => {
    cy.url().should("include", "/signin");
  });
  cy.window().then((win) =>
    win.authService.send("LOGIN", { username: users[3], password: password })
  );
  cy.wait("@loginUser").then((loginUser) => {
    // cy.log(`logged in with userId: ${loginUser.response.body.user.id}`);
    cy.url().should("not.include", "/signin");
    cy.get("[data-test=app-name-logo]").should("be.visible");
  });
});

Cypress.Commands.add("loginViaUI", () => {
  const password = "s3cret";
  const users = [
    "Alexis_Leuschke",
    "Sandrine_Wyman",
    "Frida.Hermann16",
    "Gus.Mante75",
    "Juana16",
  ];

  cy.clearLocalStorage();
  cy.clearCookies();
  cy.intercept("POST", "/login").as("loginUser");
  // cy.intercept("GET", "/checkAuth").as("getUserProfile");
  cy.visit("/signin").then(() => {
    cy.url().should("include", "/signin");
  });

  cy.get("#username").clear().type(users[3]);
  cy.get("#password").clear().type(password);
  cy.get("[data-test=signin-submit]").click();
  cy.wait("@loginUser").then((loginUser) => {
    cy.log(`logged in with userId: ${loginUser.response.body.user.id}`);
    cy.url().should("not.include", "/signin");
    cy.get("[data-test=app-name-logo]").should("be.visible");
  });
});

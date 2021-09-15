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
    "Maximillia74",
    "Kayleigh93",
    "Salma_King57",
    "Maymie.Hamill38",
    "Jamie.Legros47",
  ];

  cy.clearLocalStorage();
  cy.clearCookies();

  cy.intercept("POST", "/login").as("loginUser");

  cy.viewport(1536, 960);
  cy.visit("/signin");
  cy.url().should("include", "/signin");

  /** Du brauchst einen gültigen UserName */
  cy.window().then((win) =>
    win.authService.send("LOGIN", { username: users[0], password: password })
  );

  cy.wait("@loginUser")
    .then((loginUser) => {
      cy.log(`logged in with userId: ${loginUser.response.body.user.id}`);
      cy.url().should("not.include", "/signin");
      cy.get("[data-test=app-name-logo]").should("be.visible");
    })
    .end();
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

Cypress.Commands.add("logoutViaUI", () => {
  cy.findByRole("button", { name: /Logout/i })
    .click()
    .end();
});
Cypress.Commands.add("createNewBankAccount", (createNewBank) => {
  cy.findByRole("button", { name: /Bank Account/i }).click();
  cy.url().should("include", "/bankaccount");
  cy.contains("Bank Account");
  cy.get("[data-test=bankaccount-list]")
    .find("li")
    .should("have.length.above", 0)
    .as("bankAccountsList");
  cy.findByRole("button", { name: /CREATE/i }).click();
  cy.contains("Create Bank Account");

  cy.findByPlaceholderText("Bank Name")
    .should("have.value", "")
    .type(createNewBank.bank);

  cy.findByPlaceholderText("Routing Number")
    .should("have.value", "")
    .type(createNewBank.routing);

  cy.findByPlaceholderText("Account Number")
    .should("have.value", "")
    .type(createNewBank.account);

  cy.get("[data-test=bankaccount-submit]").should("be.enabled").click();
});

Cypress.Commands.add("clickOnNewButton", () => {
  
});

Cypress.Commands.add("selectFirstContactInList", () => {
  
});

Cypress.Commands.add("createPayment", (payment) => {
  
});
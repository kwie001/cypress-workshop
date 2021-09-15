// beispiel-new-test.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/* ==== Test Created with Cypress Studio ==== */
it("should change username", function () {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit("http://localhost:3000/signin");
  cy.get("#username").clear();
  cy.get("#username").type("Kayleigh93");
  cy.get("#password").clear();
  cy.get("#password").type("s3cret");
  cy.get(".PrivateSwitchBase-input-14").check();
  cy.get(".MuiButton-label").click();
  cy.get(
    "[data-test=sidenav-user-settings] > .MuiListItemText-root > .MuiTypography-root"
  ).click();
  cy.get(".MuiGrid-grid-xs-12 > .MuiPaper-root > :nth-child(2)").click();
  cy.get("[data-test=user-settings-firstName-input]").clear();
  cy.get("[data-test=user-settings-firstName-input]").type("Katharina");
  cy.get(".MuiGrid-grid-xs-12 > .MuiPaper-root > :nth-child(2)").click();
  cy.get("[data-test=user-settings-lastName-input]").clear();
  cy.get("[data-test=user-settings-lastName-input]").type("Bernier");
  cy.get(".MuiGrid-grid-xs-12 > .MuiPaper-root > :nth-child(2)").click();
  cy.get("[data-test=user-settings-lastName-input]").clear();
  cy.get("[data-test=user-settings-lastName-input]").type("B");
  cy.get("[data-test=user-settings-submit] > .MuiButton-label").click();
  cy.get("[data-test=sidenav-user-full-name]").should(
    "have.text",
    "Katharina B"
  );
  /* ==== End Cypress Studio ==== */
});

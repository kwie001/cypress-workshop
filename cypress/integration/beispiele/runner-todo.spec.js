context("Beispiel zu Folien", () => {
    describe("Die Cypress TODO App", () => {
      beforeEach(() => {
        cy.visit("https://example.cypress.io/todo");
      });
  
      it("einfacher Test", () => {
       cy.url().should("include","/todo");
      });
    });
  });
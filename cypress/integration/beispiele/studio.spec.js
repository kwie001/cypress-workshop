context("beispiele zu folien", () => {
  describe("vorstellung cypress studio", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/signin");
      cy.url().should("include", "signin");
      cy.get("form").should("exist");
      /** Du brauchst einen gültigen UserName */
      cy.get("#username").clear().type("Kayleigh93");
      /** Passwort ist für alle User gleich. */
      cy.get("#password").clear().type("s3cret");
      cy.get('[data-test="signin-submit"]').click();
    });

    it("ein neue transaktion durchfuehren", () => {
      /** Hier kannst du Cypress Studio ausprobieren. */
    });
  });
});

/**
 * assertions am Ende des Tests
 * cy.get('[data-test=alert-bar-success]').should('be.visible').and('contain', 'Transaction Submitted');
 */

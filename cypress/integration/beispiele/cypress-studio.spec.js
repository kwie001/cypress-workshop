context("beispiele zu folien", () => {
  describe("vorstellung cypress studio", () => {
    beforeEach(() => {
      cy.visit("/signin");
      cy.url().should("include", "signin");
      cy.get("form").should("exist");
      cy.get("#username").clear().type("Juana16");
      cy.get("#password").clear().type("s3cret");
      cy.get('[data-test="signin-submit"]').click();
    });

    it("ein neue transaktion durchfuehren", () => {
      cy.url().should("not.include", "signin");
    });
  });
});

/*          
cy.get('[data-test=alert-bar-success]').should('be.visible').and('contain', 'Transaction Submitted'); 
*/

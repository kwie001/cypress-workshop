context("Beispiele zu Folien", () => {
  describe("Vorstellung Custom Commands", () => {
    /** Die beiden Hooks haben wir schon gesehen.
     * Vor jedem Test wird eingelog auf der Ui und nach dem Test wird der User ausgeloggt.
     *  */
    beforeEach(() => {
      cy.log("HIER IM BEFORE HOOK");
      cy.loginViaRequest();
    });

    afterEach(() => {
      cy.log("HIER IM AFTER HOOK");
      cy.logoutViaUI();
    });

    it("Should create new payment", () => {
      const payment = {
        amount: "10",
        decribtion: "Friday Drinks",
      };

      /* 
      
      cy.findByRole("button", { name: /NEW/i }).click();
      cy.contains("Select Contact");
      cy.contains("Payment");
      cy.contains("Complete");
      cy.findByPlaceholderText('Search...').should('have.value', '');
      cy.url().should('include', '/transaction/new')
      
      */

      /* 
      
      cy.get("[data-test=users-list]")
        .find("li")
        .should("have.length.above", 0)
        .first()
        .click(); 
      
        */

      /* 
      
      cy.findByPlaceholderText('Amount').clear().type(payment.amount);
      cy.findByPlaceholderText('Add a note').clear().type(payment.decribtion);
      cy.findByRole('button', {name: /PAY/i}).should('be.enabled').click(); 
      
      */

      //cy.clickOnNewButton();
      //cy.selectFirstContactInList();
      //cy.createPayment(payment);
    });

    it("Should create new request", () => {
      const request = {
        amount: "12",
        decribtion: "Friday Pizza",
      };
      
    });
  });
});
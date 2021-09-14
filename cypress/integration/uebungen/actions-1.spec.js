context("uebung zu folien", () => {
  describe("Aktionen auf Elementen", () => {
    beforeEach(() => {
      cy.loginViaRequest();
    });

    it("Commands click(), clear(), type()", () => {
      /** Click() */
      cy.findByText("My Account").click();
      cy.findByText("Bank Accounts").click();
      /** finde andere Buttons in der Seitennavigation und klick drauf. */
      cy.findByText("Notifications").click();
      cy.findByText("Home").click();

      cy.findByRole("tab", { name: /FRIENDS/i }).click();
      /** Finde andere Tabs und klick drauf. */

      /** Type() */
      /** Klicke auf den NEW Button.
       * Selektiere das Suchfeld.
       * Benutze clear() vor type() und tippe ein Devon Becker.
       */
      cy.findByRole("button", { name: /NEW/i }).click();
      //cy.findByPlaceholderText("Search...").clear().type("Devon Becker");
      //cy.wait(3000).get('[data-test=users-list]').first().click();

      /** Kommentiere die naechste Zeile aus. */
      //cy.wait(3000).get('[data-test=users-list]').first().click();

      /** Danach Selektiere das Felder 'Amount' und tippe ein 10.
       * selektiere das Feld 'Add a note 'und tippe ein Pizza Friday.
       */
      //cy.findByPlaceholderText("Amount").clear().type("10");
      //cy.findByPlaceholderText("Add a note").clear().type("Pizza Friday");

      /** Finde den Button Pay und klicke drauf. */
      //cy.findByRole('button', {name: /PAY/i}).click()
    });
  });
});

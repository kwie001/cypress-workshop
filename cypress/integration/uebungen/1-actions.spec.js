context("Übung zu Folien", () => {
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
      /** Klicke auf den 'My Account' Button. 
       * Ändere die Benutzerdaten: Vor- und Nachname, E-Mail und Telefon mit eigenen Infos.
       * Benutze clear() vor type().
       */
      cy.findByRole("button", { name: /My/i }).click();
      cy.findByPlaceholderText("?").clear().type("?");
      /** Es ist nicht nötig die Änderungen zu dem Nutzer abzuspeichern, deshalb muss du nicht auf den 'Save' Button klicken. */
      
    });
  });
});



      /** Kommentiere die naechste Zeile aus. */
      //cy.wait(3000).get('[data-test=users-list]').first().click();

      /** Danach Selektiere das Felder 'Amount' und tippe ein 10.
       * selektiere das Feld 'Add a note 'und tippe ein Pizza Friday.
       */
      //cy.findByPlaceholderText("Amount").clear().type("10");
      //cy.findByPlaceholderText("Add a note").clear().type("Pizza Friday");

      /** Finde den Button Pay und klicke drauf. */
      //cy.findByRole('button', {name: /PAY/i}).click()
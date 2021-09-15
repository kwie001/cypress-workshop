context("Übung zu Folien", () => {
  describe("Aktionen auf Elementen", () => {
    /** Dokumentation zu cy.click() https://docs.cypress.io/api/commands/click */
    /** Dokumentation zu cy.type() https://docs.cypress.io/api/commands/type */
    beforeEach(() => {
      cy.loginViaRequest();
    });

    afterEach(() => {
      cy.logoutViaUI();
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

    it("Fortgeschritten - eine neue Transaktion anlegen", () => {
      cy.log('Eine neue Transaktion anlegen')
      /** Versuche eine neue Transaktion anzulegen, in dem du auf 'NEW' Button klickst, eine Person auswählst, einen Betrag und eine Beschreibung hinzufügst.
       * Die Werkzeuge dafür hast du bereits kennengelernt.
       * TIPP: Am Besten gibst du im Suchfeld einen kompletten Name ein, sodass nur diese Person angezeigt wird in der Liste und waehlst diese Person in der Liste.
       * Falls du nicht weiter kommst, kommentiere die naechste Zeile aus. Der Test sollte auf die erste Person in der Liste klicken.
       * cy.wait(3000).get('[data-test=users-list]').first().click();
       * Jetzt kannst du den Betrag und die Beschreibung ergeanzen.
       */
    })
  });
});
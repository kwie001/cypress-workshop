context("Übung zu Folien", () => {
  describe("Custom Commands", () => {
    /** https://docs.cypress.io/api/cypress-api/custom-commands#Syntax */
    beforeEach(() => {
      cy.loginViaRequest();
    });

    afterEach(() => {
      cy.logoutViaUI();
    });

    it("Should command on transactio", () => {
      /** Wechsel vom Bereich EVERYONE in den Bereich Friends.
       * Wähle die letzte Transaktion aus der Liste, du landest im Bereich 'Transaction Detail'.
       * Lass einen Kommentar unter der Transaction und einen Daumen hoch.
       * Überlege dir welche Custom Commands sind sinnvoll, machen den Test lesbarer und grün.
       */

      cy.findByRole("tab", { name: /F/i })
        .should("have.attr", "aria-selected", "false")
        .click();
      cy.url().should("include", "/personal");
      cy.findByRole("tab", { name: /FRIENDS/i }).should(
        "have.attr",
        "aria-selected",
        "false"
      );

      cy.get("li").should("have.length.above", 3).as("transactionList");
      /** Wähle das letzte Element in der Liste. */
      cy.get("@transactionList").last().click();
      cy.contains("Transaction Detail");

      /** Lasse ein Kommentar da. */
      cy.findByPlaceholderText("Write a comment...");

      /** Lasse ein Like da, wenn du magst. */
    });

    it.only("Fortgeschritten: delete a bank account", () => {
      /** Dieser Test soll einen Bank Account löschen, 
       * zunäcghst wird ein neuer Bank Account angelegt 
       * und dann soll dieser aus der Liste gelöscht werden. */
      const newBank = {
        bank: "Bank to delete",
        routing: "000001111",
        account: "555550000",
      };
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
        .type(newBank.bank);

      cy.findByPlaceholderText("Routing Number")
        .should("have.value", "")
        .type(newBank.routing);

      cy.findByPlaceholderText("Account Number")
        .should("have.value", "")
        .type(newBank.account);

      /* cy.get("[data-test=bankaccount-submit]").should("be.enabled").click();

      cy.get("@bankAccountsList")
        .should("have.length.above", 1)
        .last({ timeou: 3000 })
        .findByRole("button", { name: /DELETE/i })
        .click({force:true})
        .then(() => {
          cy.wait("@");
          cy.get("@bankAccountsList")
            .last()
            .should("contain", "Bank to delete (Deleted)");
          }) */
    });
  });
});
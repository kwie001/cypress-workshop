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

    it("Should delete bank account", () => {
      const createNewBank = {
        bank: "Bank to be deleted",
        routing: "000001111",
        account: "555556666",
      };

      cy.findByRole("button", { name: /Bank Account/i }).click();
      /* cy.url().should("include", "/bankaccount");
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

      

      cy.get("@bankAccountsList")
        .should("have.length.above", 1)
        .last()
        .findByRole("button", { name: /DELETE/i })
        .click().then(() => {
            cy.wait(2000);
            cy.contains("Bank to be deleted (Deleted)");
        }) */

      /** Mit Custom Commands */
      //cy.createNewBankAccount(createNewBank);
    });
  });
});
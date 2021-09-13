context("uebung zu folien", () => {
  describe("cypress testing library", () => {
    beforeEach(() => {
      cy.loginViaRequest();
    })

    it("find by text", () => {
      cy.log('/**** BY TEXT */')
      /** By text */
      cy.findByText("Home");
      cy.findByText("My Account");
      cy.findByText("Bank Accounts");
      cy.findByText("Notifications");
      /** ALL by text */
      cy.findAllByText("paid");
      cy.findAllByText("Kaylin Homenick");
      /** Welche Elemente lassen sich noch finden ByText. */
    });

    it("find by placeholder", () => {
      /** Finde den Knopf NEW mit den Attribut data-test*/
      cy.get('[data-test=nav-top-new-transaction]').click();

      cy.log('/**** BY PLACEHOLDER */')
      /** By placeholder */
      cy.findByPlaceholderText("Search...");
      
      cy.get('[data-test=users-list]').children("li").first().click();

      /** Find die Inputfelder mit Hilfe der Placeholder */
      cy.findByPlaceholderText("?");
      cy.findByPlaceholderText("?");
    })

    it("find by role, aria-label and ", () => {
      cy.log('/**** BY ROLE */')
      /** ALL by role */
      cy.findAllByRole("button");
      cy.findAllByRole("button", {name: /Logout/i});
      /** Finde den NEW Button by role */
      /** Finde weitere Buttons mit by role */

      cy.findAllByRole("tab");
      /** Finde den Tab MINE by role */

      cy.log('/**** BY LABEL TEXT */')
      /** ALL by label text /aria-label */
      cy.findAllByLabelText("open drawer");

      cy.findAllByRole("button", {name: /Date/i}).scrollIntoView().should("be.visible").click({force: true});
      /** Finde den Kalender mit label-text=Calendar */

      /** Finde weiter Elemente mit Hilfe von label-text */
    })
  });
});

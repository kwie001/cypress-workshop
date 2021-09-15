context("Übung zu folien", () => {
  describe("Vorstellung Cypress Testing Library", () => {
    /** https://testing-library.com/docs/cypress-testing-library/intro/ */
    beforeEach(() => {
      cy.loginViaRequest();
    });

    afterEach(() => {
      cy.logoutViaUI();
    });

    it("find by text", () => {
      /** cy.findByText() ist ähnlich wie cy.contains(). */
      cy.findByText("Home");
      cy.findByText("My Account");
      cy.findByText("Bank Accounts");
      cy.findByText("Notifications");

      /** cy.findAllByText() returned ein Array von Elementen.*/
      cy.findAllByText("paid");
      /** Welche Elemente lassen sich noch finden mit findByText()? */
      /** Wann macht es keine Sinn mit findAllByText() zu suchen? */
    });

    it("find by placeholder", () => {
      cy.get("[data-test=sidenav-user-settings]").click();

      /** Finde alle Inputfelder mit Hilfe der cy.findByPlaceholderText(). */
      cy.findByPlaceholderText("First Name");
      cy.findByPlaceholderText("?");
      /** Sind Placeholder immer vorhanden? */
    });

    it("find by role, aria-label and ", () => {
      /** cy.findAllByRole(), wenn Role ist definiert. */
      /** Wie viele Buttons gibt es? */
      cy.findAllByRole("button");
      cy.findAllByRole("button", { name: /Logout/i });
      /** Finde den NEW Button. */
      /** Finde weitere Buttons mit cy.findAllByRole() oder cy.findByRole() */

      cy.findAllByRole("tab");
      /** Wie viele Tabs gibt es? */
      /** Finde den MINE Tab und weiter Tabs, wenn möglich.  */

      /** cy.findAllByLabelText()
       * oder cy.findByLabelText()
       * bezieht sich auf das Attribut aria-label. */
      cy.findByLabelText("open drawer");
      /** Wann sind aria-labels wichtig? Vielleicht findest du noch andere Elemente. */

      /** Hier hat sich noch ein Element mit aria-label=Calendar versteckt. */
      cy.findAllByRole("button", { name: /Date/i })
        .scrollIntoView()
        .should("be.visible")
        .click({ force: true })
        .wait(1500);
      /** Finde den Kalender mit Hilfe von cy.findByLabelText() und aria-label=Calendar */
    });
  });
});

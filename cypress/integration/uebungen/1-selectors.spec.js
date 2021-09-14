context("Übung zu folien", () => {
  describe("Vorstellung selectoren", () => {
    beforeEach(() => {
      cy.loginViaRequest();
    });

    it("Element-tag (tag-name) selector", () => {
      /** By element-tag */
      cy.get("button");
      cy.get("h1");
      cy.get("ul");
      cy.get("li");
      cy.get("a");

      /** Finde den Bereich MINE */
      cy.get('a[href="/p"]');
      /** finde den Bereich FRIENDS */
      cy.get('a[href="/c"]');
      /** finde den Bereich EVERYONE */
      cy.get('a[href="?"]');
      /** Warum ist das hier nicht gut? */
    });

    it("ID, Class und Contains", () => {
      cy.get('a[href="/user/settings"]').click();
      /** By ID wird mit # gesucht. */
      /** Finde das Element mit der ID=user-settings-firstName-input, cy.get('#id'). */
      cy.get('?');
      /** Welche IDs haben die  andere Input-Felder?
       * Finde die anderen Elemente mit Hilfe der IDs.
       */

      /** By ID wird mit . gesucht. */
      /** Finde das Element mit der class=MuiButtonBase-root, cy.get('.class')*/
      cy.get('?');
      /** Warum ist das hier nicht gut? */

      /** By cy.contains wird im DOM gesucht. */
      /** Finde das Element mit Notification, cy.contains('string')*/
      cy.contains('?')
      /** Finde andere Elemente die du visuell erkennen kannst. */
      /** Welche Elemente lassen sich gut finden, welche nicht? */
    })

    it("Customed Attributs z.B. data-test", () => {
      /** By attribut */
      cy.get("[data-test=sidenav-home]");
      cy.get("[data-test=sidenav-user-settings]");
      cy.get("[data-test=sidenav-bankaccounts]");
      cy.get("[data-test=sidenav-notifications]");
      cy.get('[data-test="sidenav-toggle"]');

      /** Finde den Bereich MINE*/
      cy.get("[data-test= ???]");
      /** Finde den Bereich FRIENDS*/
      cy.get("[data-test= ???]");
      /** Finde den Bereich EVERYONE*/
      cy.get("[data-test= ???]");
    });
  });
});

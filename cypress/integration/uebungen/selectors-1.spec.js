context("uebung zu folien", () => {
  describe("vorstellung selectoren", () => {
    beforeEach(() => {
      cy.loginViaRequest();
    });

    it("element-tag (tag-name) selector", () => {
      /**By element-tag*/
      cy.get("button");
      cy.get("h1");
      cy.get("ul");
      cy.get("li");
      cy.get("a");

      /** Finde den Bereich MINE*/
      cy.get('a[href="/p"]');
      /** finde den Bereich FRIENDS*/
      cy.get('a[href="/c"]');
      /** finde den Bereich EVERYONE*/
      cy.get('a[href="?"]');
      /** Warum ist das hier nicht gut? */
    });

    it("customed attribut name selector", () => {
      /** By attribut data-test */
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

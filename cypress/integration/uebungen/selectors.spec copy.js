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
      cy.get('a[href="/personal"]');
      /** finde den Bereich FRIENDS*/
      cy.get('a[href="/contacts"]');
      /** finde den Bereich EVERYONE*/
      cy.get('a[href="/"]');
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
      cy.get('[data-test="nav-public-tab"]');
      /** Finde den Bereich FRIENDS*/
      cy.get("[data-test=nav-contacts-tab]");
      /** Finde den Bereich EVERYONE*/
      cy.get("[data-test=nav-personal-tab]");
    });
  });

  describe("example cypress todo app", () => {
    beforeEach(() => {
      cy.visit("https://example.cypress.io/todo");
    });

    it("selectors", () => {
      /** By class */
      cy.get(".navbar-brand");

      /** By id */
      cy.get("#navbar");

      /** Finde weiter Element ob mit attribute class oder id */
      /** Finde die TODO List mit ihren Unterelementen (ul.todo-list > ...). 
       * Es soll ein Array auf <li> elementen sein.*/
      cy.get('ul');

      /** Finde die Filter unter der TODO-List mit ihren Unterelementen (ul.filters > ...). 
       * Es soll ein Array auf <li> elementen sein.*/
      cy.get('ul');

    });
  
    it("cypress testing library", () => {
      /** By text */
      cy.findByText('Cypress API');
      cy.findByText('Walk the dog')
      /** Welche Elemente lassen sich noch finden ByText. */

      /** By placeholder */
      cy.findByPlaceholderText('What needs to be done?');
      
    });
  });

  describe("besuche eine webseite", () => {
    it("und suche dort nach verschiedenen Elementen", () =>{
      cy.visit('<web-address>');

    })
  })
});

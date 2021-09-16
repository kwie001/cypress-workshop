context("Übung zu folien", () => {
  describe("Beispiel Cypress Todo App", () => {
    beforeEach(() => {
      cy.visit("https://example.cypress.io/todo");
    });

    it("ID, Class und Contains", () => {
      /** By class */
      cy.get(".navbar-brand");

      /** By id */
      cy.get("#navbar");

      //cy.get('#user-settings-phoneNumber-input')

      /** By contains */
      cy.contains("Walk the dog");
      cy.contains("Completed");
      /** Finde den Filter Completed mit cy.contains() */
      /** Suche weitere Elemeten mit cy.contains() */
    });

    it("Mit Listen arbeiten", () => {
      /** Finde die TODO List mit ihren Unterelementen (ul.todo-list > ...).
       * Es soll ein Array auf <li> elementen sein.*/
      cy.get("ul.todo-list > li");

      /** Finde die Filter unter der TODO-List mit ihren Unterelementen (ul.filters > ...).
       * Es soll ein Array auf <li> elementen sein.*/
      cy.get(".filters > li");

      /** Finde das erst und das letzte TODO in the Liste, das heisst das erste oder letzte Element im Array (.first() oder .???()).*/
      cy.get("ul.todo-list > li").first();

      cy.get("ul.").last();

      /** Use find() */
      cy.get(".todo-list").find("input[type=checkbox]");
      /** Der Knopf zum loeschen der TODOs ist nicht sichtbar, trotzdem kannst du ihn finden. */
      cy.get(".todo-list").find("button");
      cy.get(".todo-list").find(".todo-button");

      /** Use parent() */
      cy.contains("Walk the dog").parent().find("input[type=checkbox]");
      /** Finde die Checkbox fuer das 1. TODO */
      cy.contains("?");

      /** Use next() */
      cy.contains("Walk the dog").next(".destroy");
      /** Finde den Knopf zum loeschen des TODOS fuer das 1. TODO */
      cy.contains("?");
    });

    it("Vorstellung Cypress Testing Library", () => {
      /**
       * findByText()
       * findByPlaceholderText()
       * findByRole()
       */

      cy.findByText("Walk the dog");
      cy.findByPlaceholderText("What needs to be done?");
      cy.findByRole("button");
    });
  });
});

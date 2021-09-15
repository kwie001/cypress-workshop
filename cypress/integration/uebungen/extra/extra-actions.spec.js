context("Übung zu Folien", () => {
  describe("Aktionen auf Elementen", () => {
    beforeEach(() => {
      cy.visit("https://example.cypress.io/todo");
    });

    it("Commands type(), select()", () => {
      /** Tippe ein neues TODO = 'Learn Cypress' ein mit der cy.type(). */
      /** Um ein TODO der Liste anzuhaengen benutze {enter} im String den du einfuegst.
       * cy.type('string {enter})
       */
      cy.findByPlaceholderText("What needs to be done?");

      cy.wait(1500);
      /** Markiere das TODO = 'Walk the dog' als erledigt, in dem du die Checkbox vor dem Element anklickst. Nutze dazu die cy.check() Methode. */

      /** Versuche andere TODOs der Liste hinzuzufügen oder als erledigt zu markieren. */

      /** Probiere ein TODO zu löschen. */
    });
  });
});

/**
 * TIPPS
 * cy.findByPlaceholderText('What needs to be done?').clear().type('Learn cypress {enter}')
 *
 * cy.contains("Walk the dog").parent().find('input[type=checkbox]').check()
 */

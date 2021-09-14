context("uebung zu folien", () => {
  describe("Aktionen auf Elementen", () => {
    beforeEach(() => {
      cy.visit("https://example.cypress.io/todo");
    });

    it("Commands type(), select()", () => {
        /** Fuege eine neues TODO dazu mit der type() Methode. */
        
        /** Um ein TODO der Liste anzuhaengen benutze {enter} im String den du einfuegst. */

        /** Hacke das TODO 'Walk the dog ab, 
         * in dem du die Fleder mit der Checkbox selektierst 
         * und das entsprechende check().'*/
        
        
        /** Versuche andere TODOs in der Liste abzuhacken oder hinzuzufuegen. 
         * Du kannst auch TODOs loeschen.
        */
    })
  });
});

/**
 * cy.findByPlaceholderText('What needs to be done?').clear().type('Learn cypress {enter}')
 * 
 * cy.contains("Walk the dog").parent().find('input[type=checkbox]').check()
 */
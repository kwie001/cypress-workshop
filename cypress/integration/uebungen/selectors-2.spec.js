context("uebung zu folien", () => {
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
          cy.get('ul.');
    
          /** Finde die Filter unter der TODO-List mit ihren Unterelementen (ul.filters > ...). 
           * Es soll ein Array auf <li> elementen sein.*/
          cy.get('ul.');
    
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
})
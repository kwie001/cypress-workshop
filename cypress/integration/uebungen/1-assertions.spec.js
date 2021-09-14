context("Übung zu Folien", () => {
    describe("Assertions auf Elementen", () => {
      beforeEach(() => {
        cy.loginViaRequest();
      });
  
      afterEach(() => {
        cy.logoutViaUI();
      });

      it.only("Cypress sieht mehr als du", () => {
        cy.findByRole('button', {name: /My Account/}).should('exist');
        cy.findByRole('tab', {name: /EVERYONE/i}).should('have.attr', 'aria-selected', 'true');
        cy.findAllByRole('button').should('have.length', 10);
        
        cy.findByRole('button', {name: /My Account/}).click();
        cy.url().should('include', '/user/settings');
        cy.contains('User Settings').should('be.visible');
        
        /** Suche ein beliebiges Element und führe Assertions aus. 
         * cy.get().should('...')
         * https://docs.cypress.io/guides/references/assertions#Chai
        */
      });
    });
  });
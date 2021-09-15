context("Übung zu Folien", () => {
    describe("Assertions auf Elementen", () => {
      /** Dokumentation zu Chai https://docs.cypress.io/guides/references/assertions#Chai */
      beforeEach(() => {
        cy.loginViaRequest();
      });
  
      afterEach(() => {
        cy.logoutViaUI();
      });

      it("Cypress sieht mehr als du", () => {
        /** Korregiere hier die Assertions, sodass der Test grün wird. */
        cy.findByRole('tab', {name: /EVERYONE/i}).should('have.attr', 'aria-selected', 'true');
        cy.findByRole('tab', {name: /FRIENDS/i}).should('have.attr', 'aria-selected', 'true');
        cy.findByRole('tab', {name: /MINE/i}).should('have.attr', 'aria-selected', 'true');

        cy.findAllByRole('button').should('have.length', 10);
        
        /** Korregiere hier die Assertions, sodass der Test grün wird. */
        cy.findByRole('button', {name: /My Account/}).click();
        cy.url().should('include', '/user/settings');
        cy.contains('User Settings');

        cy.findByRole('button', {name: /Notifications/}).click();
        cy.url().should('include', '/user/settings');
        cy.contains('User Settings');
        
        /** Im Bereich 'Bank Accounts' stimmen noch einige Assertions nicht.
         * Lass den Test gruen werden, in dem du die Assertions korregierst.
        */
         cy.findByRole('button', {name: /Bank Accounts/}).click();
         cy.url().should('include', '/user/settings');
         cy.contains('User Settings');
        cy.findByRole('button', {name: /CREATE/i}).should('not.be.visible').click();
        cy.contains('Create Bank Account');
        cy.findByPlaceholderText('Bank Name').should('have.value', '').type('New Test Bank');
        cy.get('[data-test=bankaccount-submit]').should('be.disabled');

        /** Wenn du die Inputfelder mit diesen Werten befuellst, z.B.
         * Bank Name: New Test Bank
         * Routing Number: 000001111
         * Account Number: 222220000
         * wird der SAVE Button enabled.
         * Aendere/ ergeanze mit cy.type() die Befehle entsprechen und ueberpruefe ob der Button enabled ist.
         * Ueberpruefen im Anschluss ob die Inputfelder die richtigen Values haben. 
         */
        cy.findByPlaceholderText('Routing Number').should('have.value', '000001111');
        cy.findByPlaceholderText('Account Number').should('have.value', '222220000');

        cy.get('[data-test=bankaccount-submit]').should('be.disabled');s          
      });
    });
  });
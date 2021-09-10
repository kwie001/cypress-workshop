context("beispiele zu folien", () => {
    describe("vorstellung cypress studio", () => {
         beforeEach(() => {
            cy.visit("/signin");
            cy.url().should("include", "signin");
            cy.get("form").should("exist");
            cy.get('#username').clear().type("Juana16");
            cy.get('#password').clear().type("s3cret");
            cy.get('[data-test="signin-submit"]').click();
         });

        it("ein neue transaktion durchfuehren", () => {
            cy.url().should("not.include", "signin");


            /* ==== Generated with Cypress Studio ==== */
            cy.get('.MuiButton-label').click();
            cy.get('[data-test=user-list-search-input]').clear();
            cy.get('[data-test=user-list-search-input]').type('Gregg Kub');
            cy.get('[data-test=user-list-item-CcXg5SEbsc] > .MuiListItemText-root > .MuiListItemText-primary').should('be.visible');
            cy.get('[data-test=user-list-item-CcXg5SEbsc] > .MuiListItemText-root > .MuiListItemText-primary').should('have.text', 'Gregg Kub');
            cy.get('[data-test=user-list-item-CcXg5SEbsc] > .MuiListItemText-root > .MuiListItemText-primary').click();
            cy.get('#amount').clear();
            cy.get('#amount').type('$5.5');
            cy.get('#transaction-create-description-input').clear();
            cy.get('#transaction-create-description-input').type('pizza');
            cy.get('[data-test=transaction-create-submit-payment] > .MuiButton-label').click();
            cy.get('.MuiAlert-message').should('be.visible');
            /* ==== End Cypress Studio ==== */
        });
    })
})

/*          
cy.get('[data-test=alert-bar-success]').should('be.visible').and('contain', 'Transaction Submitted'); 
*/
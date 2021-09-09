context("beispiele zu folien", () => {
    describe("vorstellung cypress studio", () => {
         beforeEach(() => {
            cy.visit("/signin");
            cy.url().should("include", "signin");
            cy.get("form").should("exist");
            cy.get('#username').clear().type("Katharina_Bernier");
            cy.get('#password').clear().type("s3cret");
            cy.get('[data-test="signin-submit"]').click();
         });

        it("ein neue transaktion durchfuehren", () => {
            cy.url().should("not.include", "signin");

            
        });
    })
})

/* 
cy.get('.MuiButton-label').click();
cy.get('[data-test=user-list-search-input]').clear();
cy.get('[data-test=user-list-search-input]').type('Devon Becker');
cy.get('[data-test=user-list-item-tsHF6_D5oQ] > .MuiListItemText-root > .MuiListItemText-primary').should('be.visible');
cy.get('[data-test=user-list-item-tsHF6_D5oQ] > .MuiListItemText-root > .MuiListItemText-primary').should('have.text', 'Devon Becker');
cy.get('[data-test=user-list-item-tsHF6_D5oQ] > .MuiListItemText-root > .MuiListItemText-primary').click();
cy.get('.MuiBox-root > .MuiGrid-container > :nth-child(2) > .MuiTypography-root').should('be.visible');
cy.get('.MuiBox-root > .MuiGrid-container > :nth-child(2) > .MuiTypography-root').should('have.text', 'Devon Becker');
cy.get('#amount').clear();
cy.get('#amount').type('$45');
cy.get('#transaction-create-description-input').clear();
cy.get('#transaction-create-description-input').type('sushi restaurante');
cy.get('[data-test=transaction-create-submit-payment] > .MuiButton-label').click();
cy.get('.MuiGrid-spacing-xs-4 > :nth-child(1) > .MuiGrid-container > :nth-child(2) > .MuiTypography-root').should('be.visible');
cy.get('.MuiGrid-spacing-xs-4 > :nth-child(1) > .MuiGrid-container > :nth-child(2) > .MuiTypography-root').should('have.text', 'Devon Becker');
            
cy.get('[data-test=alert-bar-success]').should('be.visible').and('contain', 'Transaction Submitted'); 
*/
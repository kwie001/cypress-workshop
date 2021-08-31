describe("cypress workshop", () => {
    it("my first test", () => {
        cy.visit("https://www.google.de");
        cy.get('#L2AGLb > .jyfHyd').click();
        cy.get('#hpctaplay').should("exist").and("be.visible");
        cy.get('.gLFyf').should("exist");
        cy.get('.FPdoLc > center > .gNO89b').should("exist");
        cy.get('#gbqfbb').should("exist");
        cy.get('.gb_3').should("exist");
    })

    it("my second test", () => {
        cy.visit("https://www.google.de");
        cy.get('#L2AGLb > .jyfHyd').click();
        cy.get('.gLFyf').clear().type("cucumber test");
        cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click().end();
    })
})
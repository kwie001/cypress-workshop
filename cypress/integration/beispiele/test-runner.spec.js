context("beispiele zu folien", () => {
    describe("vorstellung test runner", () => {
        
        it("besuchen der loginseite", () => {
            cy.visit("/signin");
            cy.url().should("include", "signin");
            cy.get("form").should("exist");
            cy.get('#username').clear().type("Katharina_Bernier");
            cy.get('#password').clear().type("s3cret");
            cy.get('[data-test="signin-submit"]').should("be.enabled");
        });

        it("besuchen der registrierungsseite", () => {
            cy.visit("/signup");
            cy.url().should("include", "signup");
            cy.get("form").should("exist");
            cy.get('#firstName').clear().type("New");
            cy.get('#lastName').clear().type("User");
            cy.get('#username').as("user").clear().type("SuperHero");
            cy.get('#password').clear().type("somepassword");
            cy.get('#confirmPassword').clear().type("somepassword");
            cy.get('[data-test=signup-submit]').should("be.enabled");
            cy.get('@user').should("have.value", "Super Hero");
        });

        it("erfolgriech einloggen", () => {
            cy.visit("/signin");
            cy.url().should("include", "signin");
            cy.get("form").should("exist");
            cy.get('#username').clear().type("Katharina_Bernier");
            cy.get('#password').clear().type("s3cret");
            cy.get('[data-test="signin-submit"]').should("be.enabled").click();
            cy.url().should("include", "/singin");
        });
    })
})

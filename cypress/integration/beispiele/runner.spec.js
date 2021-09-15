context("Beispiele zu Folien", () => {
  describe("Vorstellung test runner", () => {
    it("Loginseite", () => {
      cy.visit("/signin");
      cy.url().should("include", "signin");
      cy.get("form").should("exist");
      /** Du brauchst einen gültigen UserName */
      cy.get("#username").clear().type("Kayleigh93");
      /** Passwort ist für alle User gleich. */
      cy.get("#password").clear().type("s3cret");
      cy.get('[data-test="signin-submit"]').should("be.enabled");
    });

    it("Registrierungsseite", () => {
      cy.visit("/signup");
      cy.url().should("include", "signup");
      cy.get("form").should("exist");
      cy.get("#firstName").clear().type("New");
      cy.get("#lastName").clear().type("User");
      cy.get("#username").as("user").clear().type("SuperHero");
      cy.get("#password").clear().type("somepassword");
      cy.get("#confirmPassword").clear().type("somepassword");
      cy.get("[data-test=signup-submit]").should("be.enabled");
      cy.get("@user").should("have.value", "Super Hero");
    });

    it("Login erfolgreich", () => {
      cy.visit("/signin");
      cy.url().should("include", "signin");
      cy.get("form").should("exist");
      cy.get("#username").clear().type("Katharina_Bernier");
      cy.get("#password").clear().type("s3cret");
      cy.get('[data-test="signin-submit"]').should("be.enabled").click();
      cy.url().should("include", "/singin");
    });
  });
});

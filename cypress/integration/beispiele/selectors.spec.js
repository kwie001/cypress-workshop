context("beispiele zu folien", () => {
    describe("vorstellung selectoren", () => {
        beforeEach(() =>{
            cy.loginViaRequest();
        })
        
        it("verschiedene selectoren", () => {
            cy.get('button')
        })
    })
})

context("beispiele zu folien", () => {
    describe("vorstellung selectoren", () => {
    
        /* cy.request({
            method:"POST", 
            url: `http://localhost:3001/login`, 
            body: {type: "LOGIN", username: "Juana16", password: "s3cret"}
            }
        ).then(({body}) =>{
            return {body}
        }) */
        
        it("verschiedene selectoren", () => {
            cy.intercept("POST", "/login").as("loginUser");
            cy.intercept("GET", "/checkAuth").as("getUserProfile");
            cy.visit('/signin');
            
            cy.window().then((win) => win.authService.send("LOGIN", { username: "Juana16", password: "s3cret" }));
            cy.wait("@loginUser").then((loginUser) => {
                log.set({
                    consoleProps() {
                    return {
                        username: "Juana16",
                        password: "s3cret",
                        // @ts-ignore
                        userId: loginUser.response.body.user.id,
                    };
                },
                });
            });
    })
    })
})

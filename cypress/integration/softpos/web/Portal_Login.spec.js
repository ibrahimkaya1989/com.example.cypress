describe('Softpos Login specs', () => {

  it('Softpos Portal - Success', () => {
    cy.visit(Cypress.expose('softposLoginUrl'));
    cy.get('#username').should('be.visible');
    cy.get('#password').should('be.visible');
    cy.env(['username', 'password']).then(({ username, password }) => {
      cy.get('#username').type(username);
      cy.get('#password').type(password, { log: false });
      cy.get('#btnSubmit').first().click();
    });

    cy.get("title").should('have.text', 'Main Menu | TEST');
  })

  it('Softpos Portal - Failure', () => {
    cy.visit(Cypress.expose('softposLoginUrl'));
    cy.get('#username').should('be.visible');
    cy.get('#password').should('be.visible');
    cy.env(['username']).then(({ username }) => {
      cy.get('#username').type(username);
      cy.get('#password').type('invalid-password', { log: false });
      cy.get('#btnSubmit').first().click();
    });

    cy.get("div[class='yzr-text-danger']").should('have.text', 'Invalid Credentials');
  })

})
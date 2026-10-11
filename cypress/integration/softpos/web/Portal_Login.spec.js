describe('Softpos Login specs', () => {

  it('Softpos Portal - Success', () => {
    cy.visit('https://softpostest.paycore.com/uaa/login');
    cy.get("title").should('have.text', 'Main Menu | TEST');
    cy.get("#username").type(Cypress.env('username'));
    cy.get("#password").type(Cypress.env('password'), { log: false });
    cy.get("#btnSubmit").first().click();

    cy.get("title").should('have.text', 'Main Menu | TEST');
  })

  it('Softpos Portal - Failure', () => {
    cy.visit('https://softpostest.paycore.com/uaa/login');
    cy.get("title").should('have.text', 'Main Menu | TEST');
    cy.get("#username").type(Cypress.env('username'));
    cy.get("#password").type('invalid-password', { log: false });
    cy.get("#btnSubmit").first().click();

    cy.get("div[class='yzr-text-danger']").should('have.text', 'Invalid Credentials');
  })

})
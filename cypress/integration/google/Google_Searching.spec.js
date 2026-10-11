describe('Google searching spec', () => {

  it('passes', () => {
    cy.visit('https://www.google.com');
    cy.get("title").should('have.text', 'Google');
    cy.get("textarea[name='q']").type('Cypress Automation');
    cy.get("input[name='btnK']").first().click();

    cy.get("textarea[name='q']").should('have.text', 'Cypress Automation');
  })

  it('searches for JavaScript automation', () => {
    cy.visit('https://www.google.com');
    cy.get("textarea[name='q']").type('Javascript Automation');
    cy.get("input[name='btnK']").first().click();

    cy.get("textarea[name='q']").should('have.value', 'Javascript Automation');
  })

})